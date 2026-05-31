import { createContext, JSX, useContext, useMemo, useRef, useState } from "react";

export type TemplateConfig = {
    backgroundColor: string | null | undefined;
    canvasColor: string | null | undefined;
    maxWidth: string | null | undefined;
};

export type TemplateInfo = {
    templateId: string;
    templateName: string;
};

export type EditableField = {
    name: string;
    label: string;
}

export type EditorType = "Text" | "Image" | "Button" | "Divider" | "Spacer" | "Container" | "ButtonLink";

type Editor = {
    label: string;
    type: EditorType;
}

export type NodeData = {
    parentId: string | null;
    childrens: string[];
    tagName: keyof JSX.IntrinsicElements;
    style?: React.CSSProperties;
    props?: Record<string, unknown>;
    editor?: Editor;
    content?: string;
}

export type TemplateBlock = {
    rootId: string;
    nodes: {
        [nodeId: string]: NodeData;
    }
};

export type BlocksMap = { [blockId: string]: TemplateBlock };

export type EmailTemplate = {
    templateId: string;
    templateName: string;
    templateConfig: TemplateConfig;
    blockIds: string[],
    blocks: BlocksMap;
};

export type Selection = {
    blockId: string;
    nodeId: string;
} | null;

type Snapshot = {
    selectedBlockId: string;
    selectedNodeId: string;
    blocks: BlocksMap;
    templateConfig: TemplateConfig;
};

type EditorContextType = {
    templateInfo: TemplateInfo;
    setTemplateInfo: React.Dispatch<React.SetStateAction<TemplateInfo>>;
    templateConfig: TemplateConfig;
    updateTemplatConfig: (updates: Partial<TemplateConfig>) => void;
    blockIds: string[];
    setBlockIds: React.Dispatch<React.SetStateAction<string[]>>;
    blocks: BlocksMap;
    selectedBlockId: string;
    selectedNodeId: string;
    setSelection: React.Dispatch<React.SetStateAction<Selection>>;
    updateNode: (blockId: string, nodeId: string, updates: NodeData) => void;
    loadTemplate: (template: EmailTemplate) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
};

type EditorProviderProps = {
    children: React.ReactNode;
};

const EditorContext = createContext<EditorContextType | null>(null);

const MAX_HISTORY = 1000;

export function EditorProvider({ children }: EditorProviderProps) {
    const [templateInfo, setTemplateInfo] = useState<TemplateInfo>({ templateId: "", templateName: "" });
    const [templateConfig, setTemplateConfig] = useState<TemplateConfig>({
        backgroundColor: "",
        canvasColor: "",
        maxWidth: "",
    });
    const [blockIds, setBlockIds] = useState<string[]>([]);
    const [blocks, setBlocks] = useState<BlocksMap>({});
    const [selection, setSelection] = useState<Selection>(null);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    const pastRef = useRef<Snapshot[]>([]);
    const futureRef = useRef<Snapshot[]>([]);

    const pushToHistory = () => {
        pastRef.current.push({
            selectedBlockId: selection?.blockId ?? "",
            selectedNodeId: selection?.nodeId ?? "",
            blocks: blocks,
            templateConfig: templateConfig
        });
        if (pastRef.current.length > MAX_HISTORY) {
            pastRef.current.shift();
        }
        futureRef.current = [];
        setCanUndo(true);
        setCanRedo(false);
    };

    const undo = () => {
        if (!pastRef.current.length) return;
        futureRef.current.push({
            selectedBlockId: selection?.blockId ?? "",
            selectedNodeId: selection?.nodeId ?? "",
            blocks: blocks,
            templateConfig: templateConfig,
        });
        const snapshot = pastRef.current.pop()!;
        setBlocks(snapshot.blocks);
        setTemplateConfig(snapshot.templateConfig);
        setSelection({ blockId: snapshot.selectedBlockId, nodeId: snapshot.selectedNodeId });
        setCanUndo(pastRef.current.length > 0);
        setCanRedo(true);
    };

    const redo = () => {
        if (!futureRef.current.length) return;
        pastRef.current.push({
            selectedBlockId: selection?.blockId ?? "",
            selectedNodeId: selection?.nodeId ?? "",
            blocks: blocks,
            templateConfig: templateConfig,
        });
        const snapshot = futureRef.current.pop()!;
        setBlocks(snapshot.blocks);
        setTemplateConfig(snapshot.templateConfig);
        setSelection({ blockId: snapshot.selectedBlockId, nodeId: snapshot.selectedNodeId });
        setCanUndo(true);
        setCanRedo(futureRef.current.length > 0);
    };

    const updateNode = (blockId: string, nodeId: string, updates: NodeData) => {
        pushToHistory();
        setBlocks((prev) => ({
            ...prev,
            [blockId]: {
                ...prev[blockId],
                nodes: {
                    ...prev[blockId].nodes,
                    [nodeId]: updates,
                },
            },
        }));
    };

    const updateTemplatConfig = (updates: Partial<TemplateConfig>) => {         pushToHistory();
        setTemplateConfig((prev) => ({
            ...prev,
            ...updates,
        }));
    };

    const loadTemplate = (template: EmailTemplate) => {
        setTemplateInfo({ templateId: template.templateId, templateName: template.templateName });
        setTemplateConfig(template.templateConfig);
        setBlockIds(template.blockIds);
        setBlocks(template.blocks);
        setSelection(null);
        pastRef.current = [];
        futureRef.current = [];
        setCanUndo(false);
        setCanRedo(false);
    };

    const value = useMemo(
        () => ({
            templateInfo,
            setTemplateInfo,
            templateConfig,
            updateTemplatConfig,
            blockIds,
            setBlockIds,
            blocks,
            selectedBlockId: selection?.blockId ?? "",
            selectedNodeId: selection?.nodeId ?? "",
            setSelection,
            updateNode,
            loadTemplate,
            undo,
            redo,
            canUndo,
            canRedo,
        }),
        [templateInfo, templateConfig, blockIds, blocks, selection]
    );

    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    );
}


export function useEditorContext() {
    const ctx = useContext(EditorContext);

    if (!ctx) {
        throw new Error(
            "useEditorContext must be used inside EditorProvider"
        );
    }

    return ctx;
}

import { JSX } from "react";
import { TemplateBlock } from "../../context/EditorContext";

const VOID_ELEMENTS = new Set(["img", "br", "hr", "input", "meta", "link"]);

function renderNode(
    nodeId: string,
    nodes: TemplateBlock["nodes"],
    selectedNodeId: string,
    onSelect: (nodeId: string) => void
): JSX.Element | null {

    const nodeData = nodes[nodeId];
    if (!nodeData) return null;

    const Tag = nodeData.tagName;
    const props = {
        id: nodeId,
        style: {
            ...nodeData.style,
        },
        ...nodeData.props,
        className: `${nodeData.editor ? "hover-outline" : ""} ${selectedNodeId === nodeId ? "selected-outline" : ""}`,
        onClick: nodeData.editor
            ? (event: React.MouseEvent) => {
                if (nodeData.tagName === "a") {
                    event.preventDefault(); 
                }
                event.stopPropagation();
                onSelect(nodeId);
            }
            : undefined,
    };

    if (VOID_ELEMENTS.has(nodeData.tagName)) {
        return <Tag {...props} key={nodeId} />;
    }

    return (
        <Tag {...props} key={nodeId}>
            {nodeData.content ?? null}
            {nodeData.childrens?.map((childId) => renderNode(childId, nodes, selectedNodeId, onSelect))}
        </Tag>
    );
}

type BlockRenderProps = {
    blockData: TemplateBlock;
    selectedNodeId: string;
    onSelect: (nodeId: string) => void;
}

function BlockRender({ blockData, selectedNodeId, onSelect }: BlockRenderProps) {
    return (
        <div>
            {renderNode(blockData.rootId, blockData.nodes, selectedNodeId, onSelect)}
        </div>
    );
}

export default BlockRender;
import { EditorType, NodeData, useEditorContext } from '../../context/EditorContext';
import TextEditor from './editors/TexEditor';
import PageConfig from './editors/PageConfig';
import ImageEditor from './editors/ImageEditor';
import ContainerEditor from './editors/ContainerEditor';
import ButtonLinkEditor from './editors/ButtonLinkEditor';



export default function SidebarRender() {
    const { blocks, selectedBlockId, selectedNodeId, updateNode, templateConfig, updateTemplatConfig } = useEditorContext();

    const nodeData = blocks[selectedBlockId]?.nodes[selectedNodeId] || null;

    const updateNodeData = (updates: NodeData) => {
        updateNode(selectedBlockId, selectedNodeId, updates);
    }

    switch (nodeData?.editor?.type as EditorType) {
        case 'Text':
            return <TextEditor data={nodeData} setData={updateNodeData} />;
        case 'Image':
            return <ImageEditor data={nodeData} setData={updateNodeData} />;
        case 'Container':
            return <ContainerEditor data={nodeData} setData={updateNodeData} />;
        case 'ButtonLink':
            return <ButtonLinkEditor data={nodeData} setData={updateNodeData} />;
        default:
            return <PageConfig templateConfig={templateConfig} updateTemplatConfig={updateTemplatConfig} />
    }
}


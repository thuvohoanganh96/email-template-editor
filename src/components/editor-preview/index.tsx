import { useEditorContext } from '../../context/EditorContext';
import BlockRender from './BlockRender';
import EditableWrapper from './EditableWrapper';
import styled from '@emotion/styled'

const StyledHtml = styled.div`
.hover-outline:hover {
    outline: 1px solid var(--grn-color-selection);
    outline-offset: -1px;
}

.selected-outline {
    outline: 2px solid var(--grn-color-selection);
    outline-offset: -2px;
}
`
export default function EditorPreview() {
  const { setSelection, templateConfig, blockIds, blocks, selectedNodeId } = useEditorContext();

  return (
    <StyledHtml
      onClick={() => {
        setSelection({
          blockId: '',
          nodeId: '',
        });
      }}
      style={{
        backgroundColor: templateConfig?.backgroundColor ?? '#F5F5F5',        
        fontSize: '16px',
        fontWeight: '400',
        width: '100%',
        minHeight: '100%',
        padding: "32px"
      }}
    >
      <table
        align="center"
        width="100%"
        style={{
          margin: '0 auto',
          maxWidth: templateConfig?.maxWidth || '600px',
          backgroundColor: templateConfig?.canvasColor ?? '#FFFFFF'
        }}
        role="presentation"
        cellSpacing="0"
        cellPadding="0"
        border={0}
      >
        <tbody>
          <tr style={{ width: '100%' }}>
            <td>
              {blockIds.map((blockId) => (
                <EditableWrapper key={blockId}>
                  <BlockRender
                    blockData={blocks[blockId]}
                    selectedNodeId={selectedNodeId}
                    onSelect={(nodeId) => {
                      setSelection({
                        blockId,
                        nodeId,
                      });
                    }}
                  />
                </EditableWrapper>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </StyledHtml>
  );
}
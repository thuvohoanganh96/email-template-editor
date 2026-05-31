import { BlocksMap, TemplateBlock, TemplateConfig } from "../../context/EditorContext";

const VOID_ELEMENTS = new Set(["img", "br", "hr", "input", "meta", "link"]);

function styleToString(style: React.CSSProperties): string {
  return Object.entries(style)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
      return `${kebabKey}: ${value}`;
    })
    .join("; ");
}

function renderNodeToHtml(nodeId: string, nodes: TemplateBlock["nodes"]): string {
  const nodeData = nodes[nodeId];
  if (!nodeData) return "";

  const tag = nodeData.tagName as string;
  const styleAttr = nodeData.style ? ` style="${styleToString(nodeData.style)}"` : "";
  const propsAttr = nodeData.props
    ? " " + Object.entries(nodeData.props)
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ")
    : "";

  if (VOID_ELEMENTS.has(tag)) {
    return `<${tag}${styleAttr}${propsAttr} />`;
  }

  const content = nodeData.content ?? "";
  const childrenHtml = (nodeData.childrens ?? [])
    .map((childId) => renderNodeToHtml(childId, nodes))
    .join("");

  return `<${tag}${styleAttr}${propsAttr}>${content}${childrenHtml}</${tag}>`;
}

export function generateHtml(templateConfig: TemplateConfig, blockIds: string[], blocks: BlocksMap): string {
  const outerStyle = [
    `background-color: ${templateConfig.backgroundColor ?? "#F5F5F5"}`,
    "font-size: 16px",
    "font-weight: 400",
    "font-family: 'Flodesk Sans',sans-serif",
    "padding: 32px 0",
    "min-height: 100%",
  ].join("; ");

  const blocksHtml = blockIds
    .map((blockId) => {
      const block = blocks[blockId];
      return block ? renderNodeToHtml(block.rootId, block.nodes) : "";
    })
    .join("\n            ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0;">
  <div style="${outerStyle}">
    <table align="center" width="100%" style="${`margin: 0 auto; max-width: ${templateConfig.maxWidth}; background-color: ${templateConfig.canvasColor ?? "#FFFFFF"}`}" role="presentation" cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr style="width: 100%">
          <td>
            ${blocksHtml}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`;
}
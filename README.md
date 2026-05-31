# Email Template Builder

## Getting Started

```bash
yarn install
yarn dev
```
---

## Application Structure

```
src/
├── context/
│   └── EditorContext.tsx        # Global editor state + undo/redo
├── metadata.ts                  # Hardcoded template data (template1, template2)
├── constant.ts                  # Preset color palette
├── pages/
│   ├── Templates.tsx            # Template picker page
│   └── Builder.tsx              # Main editor page
└── components/
    ├── common/                  # Layout primitives (Header, Container, LayoutWrapper)
    ├── editor-preview/          # Live canvas
    └── editor-sidebar/          # Property panel + export
```

---

## Template Data Structure

An `EmailTemplate` is the top-level object loaded into the editor. It is defined in [src/context/EditorContext.tsx](src/context/EditorContext.tsx).

```ts
type EmailTemplate = {
  templateId: string;
  templateName: string;
  templateConfig: TemplateConfig;   // global page settings
  blockIds: string[];               // ordered list of block IDs
  blocks: BlocksMap;                // map of blockId → TemplateBlock
};
```
### Full example

A minimal single-block template with a heading and an image:

```json
{
  "templateId": "template1",
  "templateName": "Simple Announcement",
  "templateConfig": {
    "backgroundColor": "#f4f4f4",
    "canvasColor": "#ffffff",
    "maxWidth": "600px"
  },
  "blockIds": ["block-hero"],
  "blocks": {
    "block-hero": {
      "rootId": "node-root",
      "nodes": {
        "node-root": {
          "parentId": null,
          "childrens": ["node-heading", "node-image"],
          "tagName": "div",
          "style": { "padding": "32px 24px", "textAlign": "center" }
        },
        "node-heading": {
          "parentId": "node-root",
          "childrens": [],
          "tagName": "h1",
          "style": { "fontSize": "28px", "color": "#111111", "marginBottom": "16px" },
          "content": "Welcome to Our Newsletter",
          "editor": { "label": "Heading", "type": "Text" }
        },
        "node-image": {
          "parentId": "node-root",
          "childrens": [],
          "tagName": "img",
          "style": { "width": "100%", "height": "auto" },
          "props": {
            "src": "https://example.com/banner.jpg",
            "alt": "Banner image"
          },
          "editor": { "label": "Banner", "type": "Image" }
        }
      }
    }
  }
}
```

Key things to notice:
- `blockIds` controls block **order**; `blocks` is an unordered map.
- `node-root` has `parentId: null` — it is the entry point for rendering.
- Only `node-heading` and `node-image` have an `editor` field, so only they are selectable in the sidebar.
- Leaf nodes (`img`, text nodes) have empty `childrens` arrays.

### TemplateConfig

Global canvas settings that are not tied to any specific block.

| Field             | Type     | Description                             |
|-------------------|----------|-----------------------------------------|
| `backgroundColor` | `string` | Backdrop color surrounding the canvas   |
| `canvasColor`     | `string` | Background color of the email canvas    |
| `maxWidth`        | `string` | Max width of the canvas (e.g. `"600px"`) |

### TemplateBlock

A block is a self-contained section of the email (e.g. hero, footer). Each block has a single root node and a flat map of all its descendant nodes.

```ts
type TemplateBlock = {
  rootId: string;                      // entry node for rendering
  nodes: { [nodeId: string]: NodeData };
};
```

### NodeData

Every element in the email — whether a container `div`, heading, image, or link — is a `NodeData` entry.

```ts
type NodeData = {
  parentId: string | null;             // null for root nodes
  childrens: string[];                 // ordered child node IDs
  tagName: keyof JSX.IntrinsicElements; // HTML tag (div, p, img, a, table…)
  style?: React.CSSProperties;         // inline styles
  props?: Record<string, unknown>;     // extra HTML attributes (src, href, alt…)
  content?: string;                    // text content for leaf nodes
  editor?: { label: string; type: EditorType }; // present when the node is user-editable
};
```

The `editor` field is the key to the editing system: if a node has an `editor`, clicking it in the preview selects it and opens the matching editor panel in the sidebar. Nodes without `editor` are structural-only and cannot be selected.

### EditorType

```ts
type EditorType = "Text" | "Image" | "Container" | "ButtonLink";
```

### Rendering model

Blocks render as a **tree** by recursively resolving `childrens` from the flat `nodes` map starting at `rootId`. This flat-map-with-parent-pointer structure keeps the data fully serializable while supporting arbitrary nesting.

---

## EditorContext

`EditorContext` ([src/context/EditorContext.tsx](src/context/EditorContext.tsx)) is the single source of truth for all editor state.

### State

| Field              | Type           | Description                                      |
|--------------------|----------------|--------------------------------------------------|
| `templateInfo`     | `TemplateInfo` | `templateId` and `templateName`                  |
| `templateConfig`   | `TemplateConfig` | Global page settings                           |
| `blockIds`         | `string[]`     | Ordered list of block IDs                        |
| `blocks`           | `BlocksMap`    | Full node map for all blocks                     |
| `selectedBlockId`  | `string`       | Currently selected block                         |
| `selectedNodeId`   | `string`       | Currently selected node                          |

### Actions

| Action                  | Description                                                    |
|-------------------------|----------------------------------------------------------------|
| `setSelection`          | Set the active `blockId` + `nodeId` (drives sidebar content)   |
| `updateNode`            | Overwrite a node's data, pushing a snapshot to undo history    |
| `updateTemplatConfig`   | Update page-level config, pushing a snapshot to undo history   |
| `loadTemplate`          | Replace the entire editor state from an `EmailTemplate` object |
| `undo` / `redo`         | Travel through the snapshot history (max 1000 snapshots)       |

---

## Editor Preview

**Location:** [src/components/editor-preview/](src/components/editor-preview/)

The preview is a live, interactive rendering of the current template. It mirrors exactly what the exported HTML will look like.
Recursively renders a `TemplateBlock` starting from `rootId`. For each node:
- Renders the correct HTML tag via `nodeData.tagName`
- Applies `nodeData.style` as inline styles
- Spreads `nodeData.props` (e.g. `src`, `href`, `alt`)
- Renders `nodeData.content` as text content
---

## Editor Sidebar

**Location:** [src/components/editor-sidebar/](src/components/editor-sidebar/)

The sidebar displays context-sensitive controls based on the currently selected node's `editor.type`.
A `switch` on the selected node's `editor.type` that mounts the matching editor component:

| `editor.type` | Component          | Editable properties                                             |
|---------------|--------------------|-----------------------------------------------------------------|
| `Text`        | `TextEditor`       | Background color, text color, content, font, size, alignment, line height, padding |
| `Image`       | `ImageEditor`      | URL, alt text, width (%), height (px), object-fit             |
| `Container`   | `ContainerEditor`  | Background color, padding                                      |
| `ButtonLink`  | `ButtonLinkEditor` | Background color, text color, content, URL, border radius      |
| _(none)_      | `PageConfig`       | Backdrop color, canvas color, max width                        |

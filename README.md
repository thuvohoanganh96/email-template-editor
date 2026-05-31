# Email Template Builder

A front-end engineer take-home assignment — a browser-based email template editor built with React, TypeScript, and Vite. Users pick a pre-built template, customize it visually through a sidebar, and export production-ready HTML.

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

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
type EditorType = "Text" | "Image" | "Button" | "Divider" | "Spacer" | "Container" | "ButtonLink";
```

### Rendering model

Blocks render as a **tree** by recursively resolving `childrens` from the flat `nodes` map starting at `rootId`. This flat-map-with-parent-pointer structure keeps the data fully serializable while supporting arbitrary nesting.

---

## EditorContext

`EditorContext` ([src/context/EditorContext.tsx](src/context/EditorContext.tsx)) is the single source of truth for all editor state. It is provided at the app root via `<EditorProvider>` and consumed with the `useEditorContext()` hook.

### State

| Field              | Type           | Description                                      |
|--------------------|----------------|--------------------------------------------------|
| `templateInfo`     | `TemplateInfo` | `templateId` and `templateName`                  |
| `templateConfig`   | `TemplateConfig` | Global page settings                           |
| `blockIds`         | `string[]`     | Ordered list of block IDs                        |
| `blocks`           | `BlocksMap`    | Full node map for all blocks                     |
| `selectedBlockId`  | `string`       | Currently selected block (empty string = none)   |
| `selectedNodeId`   | `string`       | Currently selected node (empty string = none)    |

### Actions

| Action                  | Description                                                    |
|-------------------------|----------------------------------------------------------------|
| `setSelection`          | Set the active `blockId` + `nodeId` (drives sidebar content)  |
| `updateNode`            | Overwrite a node's data, pushing a snapshot to undo history    |
| `updateTemplatConfig`   | Update page-level config, pushing a snapshot to undo history   |
| `loadTemplate`          | Replace the entire editor state from an `EmailTemplate` object |
| `undo` / `redo`         | Travel through the snapshot history (max 1000 snapshots)       |

### Undo / Redo

Each call to `updateNode` or `updateTemplatConfig` pushes a `Snapshot` (blocks + templateConfig + current selection) onto a `past` stack stored in a `useRef`. Undo pops from `past` onto a `future` stack; redo reverses this. Because the stacks are refs, modifying them does not trigger a re-render — only the derived `canUndo` / `canRedo` booleans are state.

---

## Editor Preview

**Location:** [src/components/editor-preview/](src/components/editor-preview/)

The preview is a live, interactive rendering of the current template. It mirrors exactly what the exported HTML will look like.

### `EditorPreview` (index.tsx)

The top-level canvas component. Renders a centred `<table>` styled with `templateConfig` values (backdrop color, canvas color, max width). Iterates over `blockIds`, wrapping each `BlockRender` in an `EditableWrapper`.

Clicking anywhere on the backdrop deselects the current node (sets selection to empty strings).

### `EditableWrapper`

A thin wrapper around each block. Adds hover shadow and border transitions so users can see block boundaries as they hover.

### `BlockRender`

Recursively renders a `TemplateBlock` starting from `rootId`. For each node:

- Renders the correct HTML tag via `nodeData.tagName`
- Applies `nodeData.style` as inline styles
- Spreads `nodeData.props` (e.g. `src`, `href`, `alt`)
- Renders `nodeData.content` as text content
- If the node has an `editor`, adds `hover-outline` and `selected-outline` CSS classes and attaches an `onClick` handler that calls `onSelect(nodeId)`
- Prevents default navigation for `<a>` tags so links don't redirect during editing

Void elements (`img`, `br`, `hr`, etc.) are rendered as self-closing tags.

---

## Editor Sidebar

**Location:** [src/components/editor-sidebar/](src/components/editor-sidebar/)

The sidebar displays context-sensitive controls based on the currently selected node's `editor.type`. When nothing is selected, it shows global page settings.

### `EditorSidebar` (index.tsx)

Shell component. Renders a scrollable area for `SidebarRender` and a sticky `Footer` bar at the bottom.

### `SidebarRender`

A `switch` on the selected node's `editor.type` that mounts the matching editor component:

| `editor.type` | Component          | Editable properties                                             |
|---------------|--------------------|-----------------------------------------------------------------|
| `Text`        | `TextEditor`       | Background color, text color, content, font, size, alignment, line height, padding |
| `Image`       | `ImageEditor`      | URL, alt text, width (%), height (px), object-fit             |
| `Container`   | `ContainerEditor`  | Background color, padding                                      |
| `ButtonLink`  | `ButtonLinkEditor` | Background color, text color, content, URL, border radius      |
| _(none)_      | `PageConfig`       | Backdrop color, canvas color, max width                        |

### `Footer`

Sticky bottom bar with **Undo** / **Redo** buttons (disabled when history is empty) and the **Export HTML** button.

### `Export`

Calls `generateHtml` and triggers a browser download of `email-template.html`.

---

## HTML Export

**Location:** [src/components/editor-sidebar/RenderHtml.ts](src/components/editor-sidebar/RenderHtml.ts)

`generateHtml` walks the same block/node tree as `BlockRender` but produces a static HTML string instead of React elements. Inline styles are converted from camelCase to kebab-case. The output is a complete `<!DOCTYPE html>` document with a centred table layout, suitable for sending through an ESP.

---

## Sidebar Controllers

Reusable input primitives used by all editor panels:

| Component              | Description                                                    |
|------------------------|----------------------------------------------------------------|
| `TextInput`            | Debounced textarea (500 ms) to avoid pushing undo history on every keystroke |
| `ColorPicker`          | Floating swatch grid using the preset palette + free-form hex input |
| `FontPicker`           | Font family + weight selector                                  |
| `FontSizeSelector`     | Numeric size input for font size and line height               |
| `AlignmentSelection`   | Left / center / right / justify toggle                         |
| `PaddingEditor`        | Four-sided padding editor (top, right, bottom, left)           |
| `SizeInput`            | Generic numeric input with a configurable unit label, min, max, and step |
| `ObjectFitSelector`    | Dropdown for `object-fit` values                               |

---

## Pages

| Page          | Route              | Description                                                    |
|---------------|--------------------|----------------------------------------------------------------|
| `Templates`   | `/`                | Grid of available templates rendered as scaled iframe previews. Clicking a card navigates to the builder. |
| `Builder`     | `/build/:templateid` | Main editor. Loads the matching template via `loadTemplate`, renders preview + sidebar side by side, and exposes a toggle to collapse the sidebar. |

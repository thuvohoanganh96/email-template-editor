# @flodesk/grain — Component Reference

Use this file to understand what Grain provides before building or editing any UI component.
Always prefer Grain primitives over custom HTML/styled components. Only reach for `@emotion/styled` when Grain props genuinely cannot express the required style.

---

## Import pattern

```tsx
import { Box, Flex, Text, Button, TextInput, ... } from '@flodesk/grain';
```

---

## Design Tokens

All tokens are accepted by their respective props as string keys.

### Space (`DimensionPropType` → `xs | s | m | l | xl | xxl`)
Used in: `padding`, `margin`, `gap`, `top`, `left`, `right`, `bottom`, `width`, `height`, etc.
Also accepts raw strings (`"24px"`) and numbers.

### Text size (`size` on `Text`)
`s | m | l | xl | xxl`

### Font weight (`weight` on `Text`)
`normal | medium`

### Border radius (`radius` on `Box` / `Flex`)
`s | m | l` — also accepts raw strings

### Shadow (`shadow` on `Box` / `Flex`)
`s | m | l`

### Transition (`transition` on `Box`)
`slow | fast | xFast | xxFast | leave | hover | active`

### Border width (`borderWidth` on `Box`)
`"1px" | "2px" | "3px" | "4px"`

### Border side (`borderSide` on `Box`)
`"all" | "top" | "bottom" | "left" | "right" | "x" | "y"`

### Color tokens (`ColorPropType`)
All token names below are valid values for any `color`, `backgroundColor`, `borderColor` prop.
Also accepts any raw CSS color string.

**Semantic content**
`content` `content2` `content3` `disabledContent` `icon` `disabledIcon`

**Backgrounds**
`background` `background2` `background3` `disabledBackground` `floatingBackground` `backdrop`

**Borders**
`border` `border2`

**Status**
`warning` `danger` `success` `selection`

**Base**
`blue` `red` `yellow` `green`

**Shade scale** (light→dark)
`shade1`–`shade13`, `shadeTone1`–`shadeTone13`

**Fades**
`fade1`–`fade10`, `lightFade1`–`lightFade10`, `darkFade1`–`darkFade10`

---

## Layout Components

### `Box`
Generic block container. Covers every layout and visual need that maps to a single element.

```tsx
<Box
  // Dimensions
  width="100%" height="480px" minWidth="300px" maxWidth="260px"
  // Spacing
  padding="m" paddingX="l" paddingY="s"
  paddingTop="xs" paddingBottom="xs" paddingLeft="s" paddingRight="s"
  margin="m" marginTop="s" marginBottom="m" marginX="auto"
  // Visual
  backgroundColor="background" color="content"
  borderColor="border" borderWidth="1px" borderSide="top"
  radius="l" shadow="m" opacity="0.5"
  // Position
  position="fixed" top="0px" bottom="24px" left="24px" right="0px" zIndex={9999}
  // Overflow
  overflow="hidden" overflowX="auto" overflowY="auto"
  // Flex child
  flex="1" alignSelf="center" order={1}
  // Interaction
  cursor="pointer" transition="hover"
  // Hover variants
  backgroundColorHover="background2" colorHover="content2"
  borderColorHover="border2" shadowHover="l" opacityHover="0.8"
  // Other
  tag="section" aspectRatio="16/9"
/>
```

### `Flex`
Extends `Box` with flexbox container props.

```tsx
<Flex
  direction="row"           // "row" | "column"
  wrap="wrap"               // "nowrap" | "wrap" | "wrap-reverse"
  justifyContent="center"   // "start" | "end" | "center" | "stretch" | "baseline"
                            //   + "space-around" | "space-between" | "space-evenly"
  alignItems="center"
  alignContent="start"
  gap="m"
  columnGap="s"
  rowGap="xs"
  // + all Box props
/>
```

### `Stack`
Flex shorthand optimised for lists of items. Extends `Box`.

```tsx
<Stack gap="s" direction="column" alignItems="stretch" justifyContent="start" wrap="nowrap">
  {/* items */}
</Stack>
```

### `Arrange`
CSS Grid container. Extends `Box`.

```tsx
<Arrange
  columns={3}              // number | string
  rows={2}
  gap="m" columnGap="s" rowGap="xs"
  autoFlow="row"
  alignItems="center"
  justifyContent="start"
  alignContent="start"
/>
```

---

## Typography

### `Text`

```tsx
<Text
  size="m"                  // s | m | l | xl | xxl
  weight="medium"           // normal | medium
  color="content2"
  tag="h2"                  // any HTML tag
  align="center"            // left | center | right
  display="inline-block"    // block | inline-block | inline
  textTransform="uppercase" // capitalize | uppercase | lowercase
  wrap="nowrap"             // nowrap | balance | pretty
  variant="caps"
  hasEllipsis               // single-line truncation
  ellipsisLines={2}         // multi-line clamp
  trimTop trimBottom        // remove leading/trailing space from cap-height
  letterSpacing="0.05em"
/>
```

---

## Buttons

### `Button`

```tsx
<Button
  variant="accent"          // "neutral" | "accent" | "danger"
  size="m"                  // "m" | "l"
  icon={<IconPlus />}
  iconPosition="left"       // "left" | "right"
  hasFullWidth
  hasSpinner
  isDisabled
  type="submit"
  tag="a"                   // "button" | "a" | "span"
  onClick={handler}
/>
```

### `IconButton`
Icon-only button, no background. Accepts any child as the icon.

```tsx
<IconButton
  icon={<IconTrash />}
  variant="neutral"         // "neutral" | "danger"
  isActive
  isDisabled
  trimSide="right"          // "left" | "right" | "x"  — removes padding on that side
  color="rgba(255,255,255,0.8)"
  onClick={handler}
  tag="button"
/>
```

### `TextButton`
Text link-style button.

```tsx
<TextButton
  variant="accent"          // "neutral" | "accent" | "danger"
  icon={<IconPlus />}
  iconPosition="left"
  isDisabled
/>
```

### `Link`

```tsx
<Link variant="neutral" href="/" target="_blank" tag="a" />
```

---

## Form Inputs

### `TextInput`
ForwardRef — accepts `ref`.

```tsx
<TextInput
  ref={inputRef}
  value={value} onChange={handler}
  placeholder="Type here…"
  type="text"               // text | password | email | number | tel | url
  label="Email"
  hint="We'll never share it."
  icon={<IconMail />}
  hasError errorMessage="Required"
  isDisabled isReadOnly
  onClear={() => setValue('')}
  backgroundColor="background2"
  size="m"                  // "m" | "l"
/>
```

### `Textarea`

```tsx
<Textarea
  value={value} onChange={handler}
  label="Body" hint="Plain text only"
  rows={4} maxLength={500}
  hasError errorMessage="Too long"
  isDisabled isReadOnly
  backgroundColor="background2"
/>
```

### `GhostInput`
Transparent, inline input — no border/background.

```tsx
<GhostInput
  prefix="$"
  isTabular          // monospace numbers
  hasEllipsis
  type="text"        // "text" | "number"
/>
```

### `Checkbox`

```tsx
<Checkbox
  id="agree" label="I agree" hint="Required"
  isChecked isIndeterminate isDisabled
  onChange={handler}
/>
// Subcomponents: Checkbox.Label, Checkbox.Box
```

### `Radio`

```tsx
<Radio id="opt1" label="Option 1" hint="Best choice" name="group" isChecked isDisabled onChange={handler} />
```

### `Switch`

```tsx
<Switch id="dark" label="Dark mode" hint="Beta" isActive isDisabled onChange={handler} />
```

### `Slider`

```tsx
<Slider
  value={50} min={0} max={100} step={1}
  label="Volume" hint="0–100"
  hasError errorMessage="Out of range"
  trackColor="selection" thumbColor="content"
/>
```

### `Select`

```tsx
<Select
  options={[{ value: 'a', label: 'Alpha' }]}
  value="a" placeholder="Pick one"
  label="Type" hint="Choose carefully"
  hasError errorMessage="Required"
  isDisabled isReadOnly
  menuWidth="240px" menuMaxHeight="300px"
  backgroundColor="background2"
  onChange={handler}
/>
// Subcomponent: Select.Trigger
```

### `Autocomplete`

```tsx
<Autocomplete
  options={[{ value: 'a', label: 'Alpha' }]}
  value="a" placeholder="Search…"
  isCreatable onCreate={(v) => {}}
  menuPlacement="bottomStart"
  menuWidth="240px" menuMaxHeight="300px" menuZIndex={100}
  label="Tag" hint="Type to search"
  hasError errorMessage=""
  isDisabled
  backgroundColor="background2"
  onClear={() => {}}
  searchField="label"
/>
// Subcomponents: Autocomplete.Label, Autocomplete.Hint
```

---

## Feedback & Status

### `Progress`

```tsx
<Progress value={60} max={100} />
```

### `Spinner`

```tsx
<Spinner size={24} color="selection" />
```

### `Toast`

```tsx
<Toast
  variant="success"         // "success" | "danger" | "neutral"
  isOpen
  dismissTimeout={3000}
  onDismiss={handler}
>
  Saved!
</Toast>
```

### `Badge`

```tsx
<Badge
  variant="success"         // "neutral" | "danger" | "warning" | "success"
  color="content"
  backgroundColor="background2"
  borderColor="border"
>
  New
</Badge>
```

---

## Overlay Components

### `Modal`

```tsx
<Modal
  isOpen onClose={handler}
  title="Confirm" description="Are you sure?"
  hasCloseButton
  cardMaxWidth="medium"     // "narrow" | "medium" | "wide" | number | string
  cardHeight="auto"
  cardMaxHeight="80vh"
  cardRadius="l"
  cardPadding="l"
  zIndex={1000}
>
  {/* content */}
</Modal>
// Subcomponent: Modal.Title
```

### `Popover`

```tsx
<Popover
  isOpen onClose={handler}
  placement="bottomStart"
  padding="m" width="240px"
  strategy="fixed"
  offset={8} zIndex={100}
  hasPortal
>
  <Popover.Trigger>{/* trigger element */}</Popover.Trigger>
  {/* popover content */}
</Popover>
```

### `Tooltip`

```tsx
<Tooltip content="Helpful text" placement="top" maxWidth="200px" zIndex={200} hasPortal>
  <button>Hover me</button>
</Tooltip>
// Subcomponent: Tooltip.Content
```

### `Dropdown`

```tsx
<Dropdown
  options={[{ label: 'Edit', value: 'edit', icon: <IconPencil /> }]}
  menuPlacement="bottomEnd"
  menuWidth="200px"
  menuZIndex={100}
  hasPortal
  onOpenChange={(open) => {}}
  trigger={<button>Open</button>}
/>
// Subcomponent: Dropdown.Trigger
```

---

## Navigation

### `Nav` / `NavItem`

```tsx
<Nav direction="row" size="m" justifyContent="start">
  <NavItem isActive href="/">Home</NavItem>
  <NavItem href="/about">About</NavItem>
</Nav>
```

### `Tab` / `TabGroup`

```tsx
<TabGroup hasFullWidth>
  <Tab isActive height="40px">Overview</Tab>
  <Tab>Settings</Tab>
</TabGroup>
```

### `Pagination`

```tsx
<Pagination amount={10} selected={3} onChange={handler} />
```

---

## Toggle Groups

### `IconToggle` / `IconToggleGroup`

```tsx
<IconToggleGroup>
  <IconToggle icon={<IconBold />} isActive onClick={handler} />
  <IconToggle icon={<IconItalic />} onClick={handler} />
</IconToggleGroup>
```

### `TextToggle` / `TextToggleGroup`

```tsx
<TextToggleGroup hasFullWidth>
  <TextToggle isActive onClick={handler}>Left</TextToggle>
  <TextToggle onClick={handler}>Right</TextToggle>
</TextToggleGroup>
```

---

## Icon Component

```tsx
import { Icon, IconMail } from '@flodesk/grain';

<Icon icon={<IconMail />} size="m" color="content2" hasEvenBoundary />
```

All icon exports follow the pattern `Icon<Name>`. Full list (86 icons):

**Arrows/Chevrons:** `IconArrowUp/Down/Left/Right`, `IconChevronUp/Down/Left/Right/Horizontal/Vertical`

**Text align:** `IconTextAlignCenter/Left/Right`, `IconTextJustify`

**Text format:** `IconBold`, `IconItalic`, `IconUnderline`, `IconType`, `IconBulletList`, `IconNumberList`

**Layout:** `IconColumnsAndRow`, `IconColumnAndRows`, `IconColumns`, `IconRows`, `IconRowAndColumns`, `IconRowsAndColumn`, `IconLayoutTextLeft/Right/Top/Bottom`, `IconContentAlignTop/Center/Bottom`, `IconColumnOne/Two`

**Actions:** `IconPencil`, `IconTrash`, `IconGear`, `IconRedo`, `IconUndo`, `IconReset`, `IconSwitch`, `IconUpload`, `IconDownload`, `IconShare`, `IconSend`, `IconSearch`, `IconLink`, `IconDuplicate`, `IconCrop`, `IconBolt`, `IconBoltFilled`

**Files:** `IconArchive`, `IconFile`, `IconFolder`, `IconFolderAdd`, `IconFolderMove`, `IconFolderRemove`, `IconClip`

**Status:** `IconCheck`, `IconCross`, `IconMinus`, `IconPlus`, `IconEllipsis`, `IconDrag`

**Device:** `IconBrowser`, `IconMonitor`, `IconTablet`, `IconPhone`

**Media:** `IconImage`, `IconPlay`

**Visibility:** `IconHide`, `IconShow`

**Contact/Info:** `IconMail`, `IconAt`, `IconGlobe`, `IconLocation`, `IconClock`, `IconChart`, `IconInfo`, `IconQuestion`, `IconHeart`, `IconSmile`

---

## Foundational — Menu

Use these to build custom dropdown/context menus.

```tsx
import { MenuCard, MenuItem, MenuGroupTitle, MenuItemDivider } from '@flodesk/grain';

<MenuCard zIndex={100} maxHeight="300px" maxWidth="240px">
  <MenuGroupTitle hasDivider>Actions</MenuGroupTitle>
  <MenuItem icon={<IconPencil />} onClick={handler}>Edit</MenuItem>
  <MenuItem variant="danger" icon={<IconTrash />}>Delete</MenuItem>
  <MenuItemDivider />
  <MenuItem isSelected isDisabled>Archived</MenuItem>
</MenuCard>
```

`MenuItem` props: `isSelected`, `isActive`, `isDisabled`, `icon`, `variant` (`neutral|danger`), `hasEllipsis`, `checkVariant` (`check|none`), `onClick`

---

## Foundational — Field

Low-level building blocks for custom form fields.

```tsx
import { InputField, FieldLabel, FieldHint, FieldClearButton } from '@flodesk/grain';

<div>
  <FieldLabel htmlFor="my-input">Label</FieldLabel>
  <InputField hasError isDisabled paddingLeft="36px">
    <input id="my-input" />
  </InputField>
  <FieldHint>Hint text</FieldHint>
  <FieldClearButton onClick={clear} />
</div>
```

---

## Hooks

```tsx
import { useMedia, useOnClickOutside } from '@flodesk/grain';

// Responsive value based on media query
const isMobile = useMedia(['(max-width: 600px)'], [true], false);

// Outside click detection
useOnClickOutside([ref1, ref2], (e) => closeMenu());
```

---

## Utility Functions

```tsx
import {
  getColor, getSpace, getDimension, getShadow,
  getRadius, getWeight, getTransition, getBorder,
  getIconSize, getMediaCss, getResponsiveSpace,
} from '@flodesk/grain';

// Use inside @emotion/styled to stay on Grain tokens:
const Card = styled.div`
  background: ${getColor('background')};
  padding: ${getSpace('m')};
  border-radius: ${getRadius('l')};
  box-shadow: ${getShadow('s')};
  ${getBorder('top', '1px', 'border')}
`;
```

---

## When to use `@emotion/styled`

Only create a styled component when none of these apply:
- The style is a CSS gradient (Grain `backgroundColor` maps to `background-color`, not `background`)
- Per-corner `border-radius` (Grain's `radius` applies to all corners)
- Pseudo-elements (`::before`, `::after`)
- Complex hover/focus transitions beyond the `*Hover` props
- Wrapping a non-Grain element (e.g. `<svg>`, `<progress>`)

Keep all styled components in a co-located `style.ts` file. Never write `style={{…}}` inline.
1. **Grain first** — always reach for a `@flodesk/grain` component before writing any custom markup or styles. Use `Box`, `Flex`, `Text`, `Button`, `Icon*`, and other Grain primitives for layout, typography, spacing, colour, and interactive elements.

2. **`@emotion/styled` for gaps** — only create a styled component when Grain props cannot express the required style (e.g. complex pseudo-selectors, CSS not exposed by Grain tokens, third-party element wrappers).

3. **No inline styles** — `style={{…}}` is never allowed. Every style must live in a Grain prop or an `@emotion/styled` definition in a co-located `style.ts` file.

## File conventions

- Styled components live in `<ComponentFolder>/style.ts`, imported by name into the component file.
- Never put `styled` definitions inside component files.

## Grain usage cheatsheet

| Need | Grain solution |
|---|---|
| Block / layout | `<Box>` with `display`, `padding`, `margin`, `width`, `height`, `position`, `overflow` props |
| Flex layout | `<Flex>` with `gap`, `alignItems`, `justifyContent`, `flexDirection`, `flex` props |
| Text / headings | `<Text>` with `variant`, `color`, `weight`, `size` props |
| Buttons | `<Button>` or `<IconToggle>` |
| Spacing values | Grain tokens: `"xs"` `"s"` `"m"` `"l"` `"xl"` |
| Colours | Grain semantic tokens: `"background"`, `"primary"`, `"text"`, etc. |
| Border radius | `radius` prop on `Box` / `Flex` |
| Shadow | `shadow` prop on `Box` / `Flex` |
| z-index | `zIndex` prop on `Box` |
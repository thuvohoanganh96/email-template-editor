import { Box } from "@flodesk/grain";
import { JSX } from "react";

type TEditorBlockWrapperProps = {
  children: JSX.Element;
};

export default function EditableWrapper({ children }: TEditorBlockWrapperProps) {
  return (
    <Box
      borderColorHover="content5"
      transition="var(--grn-transition-leave)"
      transitionHover="var(--grn-transition-hover)"
      shadowHover="l"
      position="relative"
    >
      {children}
    </Box>
  );
}
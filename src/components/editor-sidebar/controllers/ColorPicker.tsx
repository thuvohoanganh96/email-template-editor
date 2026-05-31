import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { Arrange, Box, Text } from "@flodesk/grain";
import { PRESET_COLORS } from "../../../constant";

type ColorPickerProps = {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
};

const checkerboard = `
  background-image:
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0;
`;

const SwatchButton = styled.button<{
  $color: string;
  $selected?: boolean;
  $size: number;
}>`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  border: ${({ $selected }) =>
    $selected
      ? "2px solid #2563EB"
      : "1px solid #D1D5DB"};

  ${({ $color }) =>
    $color === "transparent"
      ? checkerboard
      : `
          background-color: ${$color};
        `}
`;

export default function ColorPicker({
  label,
  value,
  onChange,
}: ColorPickerProps) {

  const [open, setOpen] = useState(false);
  const containerRef =
    useRef<HTMLDivElement>(null);

  function handleBlur(
    e: React.FocusEvent
  ) {
    if (
      !containerRef.current?.contains(
        e.relatedTarget as Node
      )
    ) {
      setOpen(false);
    }
  }

  return (
    <Box>
      <Text>{label}</Text>

      <Box
        ref={containerRef}
        onBlur={handleBlur}
        tabIndex={-1}
        position="relative"
        marginTop="8px"
      >
        <SwatchButton
          $color={value ?? "transparent"}
          $size={40}
          onClick={() =>
            setOpen((o) => !o)
          }
        />

        {open && (
          <Arrange
            gap="s"
            wrap="no-wrap"
            columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
            position="absolute"
            justifyContent="center"
            padding="m"
            top="calc(100% + 8px)"
            left={0}
            backgroundColor="background"
            radius="m"
            zIndex={200}
            shadow="m"
            width="240px"
          >
            {PRESET_COLORS.map((c) => (
              <SwatchButton
                key={c}
                $color={c}
                $selected={value === c}
                $size={18}
                tabIndex={0}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
              />
            ))}
          </Arrange>
        )}
      </Box>
    </Box>
  );
}
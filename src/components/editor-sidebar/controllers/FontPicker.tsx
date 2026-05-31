import { Arrange, Box, Select, Text } from '@flodesk/grain';

const FONT_FAMILY_OPTIONS = [
  { value: 'Inter', content: 'Inter' },
  { value: 'Georgia', content: 'Georgia' },
  { value: 'Times New Roman', content: 'Times New Roman' },
  { value: 'Arial', content: 'Arial' },
  { value: 'Helvetica', content: 'Helvetica' },
  { value: 'Trebuchet MS', content: 'Trebuchet MS' },
  { value: 'Courier New', content: 'Courier New' },
];

const FONT_WEIGHT_OPTIONS = [
  { value: 'normal', content: 'normal' },
  { value: 'bold', content: 'bold' },
];

export type FontValue = {
  fontFamily: string;
  fontWeight: string;
};

type FontPickerProps = {
  label: string;
  value: FontValue;
  onChange: (v: FontValue) => void;
};

export default function FontPicker({ label, value, onChange }: FontPickerProps) {
  return (
    <Box>
      <Text>{label}</Text>
      <Arrange gap="s" columns="1fr 1fr" wrap="no-wrap">
        <Box overflow="hidden">
          <Select
            width="100%"
            options={FONT_FAMILY_OPTIONS}
            value={value?.fontFamily}
            placeholder="Font family"
            onChange={(option) => onChange({ fontFamily: option.value, fontWeight: value?.fontWeight ?? "normal" })}
          />
        </Box>
        <Box>
          <Select
            width="100%"
            options={FONT_WEIGHT_OPTIONS}
            value={value.fontWeight.toString()}
            placeholder="Weight"
            onChange={(option) => onChange({ fontFamily: value?.fontFamily, fontWeight: option.value })}
          />
        </Box>
      </Arrange>
    </Box>
  );
}

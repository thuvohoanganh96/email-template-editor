import { Box, Select, Text } from '@flodesk/grain';

const FONT_SIZE_OPTIONS = [
  { value: '10', content: '10' },
  { value: '12', content: '12' },
  { value: '13', content: '13' },
  { value: '14', content: '14' },
  { value: '16', content: '16' },
  { value: '18', content: '18' },
  { value: '20', content: '20' },
  { value: '22', content: '22' },
  { value: '24', content: '24' },
  { value: '26', content: '26' },
  { value: '28', content: '28' },
  { value: '30', content: '30' },
  { value: '32', content: '32' },
  { value: '34', content: '34' },
  { value: '36', content: '36' },
  { value: '38', content: '38' },
  { value: '40', content: '40' },
  { value: '42', content: '42' },
  { value: '44', content: '44' },
  { value: '46', content: '46' },
  { value: '48', content: '48' },
  { value: '60', content: '60' },
  { value: '72', content: '72' },
];

type FontSizeSelectorProps = {
  label: string;
  value: number | undefined;
  onChange: (v: number) => void;
};

export default function FontSizeSelector({ label, value, onChange }: FontSizeSelectorProps) {
  return (
    <Box>
      <Text>{label}</Text>
      <Box marginTop="s">
        <Select
          options={FONT_SIZE_OPTIONS}
          value={value?.toString()}
          placeholder="Size"
          onChange={(option) => onChange(parseInt(option.value))}
        />
      </Box>
    </Box>
  );
}

import { Box, Select, Text } from '@flodesk/grain';

const OBJECT_FIT_OPTIONS = [
  { value: 'fill', content: 'Fill' },
  { value: 'contain', content: 'Contain' },
  { value: 'cover', content: 'Cover' },
  { value: 'none', content: 'None' },
  { value: 'scale-down', content: 'Scale Down' },
];

type ObjectFitSelectorProps = {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
};

export default function ObjectFitSelector({ label, value, onChange }: ObjectFitSelectorProps) {
  return (
    <Box>
      <Text>{label}</Text>
      <Box marginTop="s">
        <Select
          options={OBJECT_FIT_OPTIONS}
          value={value}
          placeholder="Object fit"
          onChange={(option) => onChange(option.value)}
        />
      </Box>
    </Box>
  );
}

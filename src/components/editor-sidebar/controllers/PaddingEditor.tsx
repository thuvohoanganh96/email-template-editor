import { Arrange, Box, Flex, Text, TextInput } from '@flodesk/grain';

export type PaddingValue = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type PaddingEditorProps = {
  label: string;
  value: PaddingValue | undefined;
  onChange: (v: PaddingValue) => void;
};

const SIDES = [
  { key: 'top', label: 'Top' },
  { key: 'bottom', label: 'Bottom' },
  { key: 'left', label: 'Left' },
  { key: 'right', label: 'Right' },
] as const;

export default function PaddingEditor({ label, value, onChange }: PaddingEditorProps) {
  const current: PaddingValue = value ?? { top: 0, right: 0, bottom: 0, left: 0 };

  function handleChange(side: keyof PaddingValue, raw: string) {
    const num = parseInt(raw) || 0;
    onChange({ ...current, [side]: num });
  }

  return (
    <Box>
      <Text>{label}</Text>
      <Arrange columnGap="l" rowGap="s" columns="1fr 1fr" justifyContent="space-between" marginTop="s">
        {SIDES.map(({ key, label }) => (
          <Flex key={key} wrap="no-wrap" alignItems="center" gap="s">
            <Box width={"70px"}>
              <Text>{label}</Text>
            </Box>
            <Box width="100%">
              <TextInput
                type="number"
                placeholder={key}
                value={current[key].toString()}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </Box>
          </Flex>
        ))}
      </Arrange>
    </Box>
  );
}

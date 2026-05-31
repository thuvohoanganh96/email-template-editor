import { Box, IconTextAlignCenter, IconTextAlignLeft, IconTextAlignRight, IconTextJustify, IconToggle, IconToggleGroup, Text } from '@flodesk/grain';

const ALIGNMENTS = [
  {
    value: 'left',
    icon: <IconTextAlignLeft />,
  },
  {
    value: 'center',
    icon: <IconTextAlignCenter />,
  },
  {
    value: 'right',
    icon: <IconTextAlignRight />,
  },
  {
    value: 'justify',
    icon: <IconTextJustify />,
  },
] as const;

export type AlignmentValue = 'left' | 'center' | 'right' | 'justify';

type AlignmentSelectionProps = {
  label: string;
  value: AlignmentValue | undefined;
  onChange: (v: AlignmentValue) => void;
};

export default function AlignmentSelection({ label, value, onChange }: AlignmentSelectionProps) {
  return (
    <Box>
      <Text>{label}</Text>
      <Box marginTop="s">
        <IconToggleGroup>
          {ALIGNMENTS.map((a) => (
            <IconToggle
              key={a.value}
              icon={a.icon}
              isActive={value === a.value}
              onClick={() => onChange(a.value)}
            />
          ))}
        </IconToggleGroup>
      </Box>
    </Box>
  );
}

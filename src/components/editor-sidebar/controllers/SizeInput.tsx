import { Box, Flex, Slider, Text } from '@flodesk/grain';
import { useEffect, useState } from 'react';

type SizeInputProps = {
  min: number;
  max: number;
  step: number;
  label: string;
  unit: string;
  value: number | undefined;
  onChange: (v: number) => void;
};

const DEBOUNCEMS = 300;

export default function SizeInput({ label, value, unit, min, max, step, onChange }: SizeInputProps) {
  const [localValue, setLocalValue] = useState(value ?? 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue !== (value ?? '')) {
        onChange(localValue);
      }
    }, DEBOUNCEMS);
    return () => clearTimeout(timer);
  }, [localValue]);


  useEffect(() => {
    setLocalValue(value || 0)
  }, [value])

  return (
    <Flex direction="column" gap="s">
      <Text>{label}: {value || "0"}{unit}</Text>
      <Box width="100%">
        <Slider id="valueExample" value={localValue}
          onChange={(e) => setLocalValue(e.target.valueAsNumber)} min={min} max={max} step={step}
        />
      </Box>
    </Flex>
  );
}

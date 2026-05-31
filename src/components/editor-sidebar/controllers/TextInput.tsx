import { Box, Text, Textarea } from '@flodesk/grain';
import { useEffect, useState } from 'react';

type TextInputProps = {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
  placeholder?: string;
};

const DEBOUNCEMS = 500;

export default function TextInput({ label, value, placeholder, onChange }: TextInputProps) {
  const [localValue, setLocalValue] = useState(value ?? '');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue !== (value ?? '')) {
        onChange(localValue);
      }
    }, DEBOUNCEMS);
    return () => clearTimeout(timer);
  }, [localValue]);


  useEffect(() => {
    setLocalValue(value || "")
  }, [value])
  return (
    <Box>
      <Text>{label}</Text>
      <Box marginTop="s">
        <Textarea
          placeholder={placeholder}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
        />
      </Box>
    </Box>
  );
}

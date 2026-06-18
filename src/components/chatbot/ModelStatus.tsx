import { Box, Text, Button, Progress } from '@flodesk/grain';
import type { Phase } from '../../hooks/chatbot/useModelEngine';

interface Props {
  phase: Phase;
  progress: number;
  progressText: string;
  onTryClick: () => void;
}

export default function ModelStatus({ phase, progress, progressText, onTryClick }: Props) {
  if (phase === 'first-time') {
    return (
      <Button variant="accent" onClick={onTryClick}>
        ✨ Try editing assistant
      </Button>
    );
  }

  if (phase === 'no-gpu') {
    return (
      <Box
        backgroundColor="background"
        borderColor="border"
        borderWidth="1px"
        radius="l"
        padding="m"
        shadow="s"
        maxWidth="260px"
      >
        <Text size="l">⚠️</Text>
        <Text size="s" color="content2">
          Your browser does not support WebGPU, which is required for the AI assistant. Try Chrome
          113+ or Edge 113+.
        </Text>
      </Box>
    );
  }

  if (phase === 'downloading' || phase === 'loading') {
    return (
      <Box
        backgroundColor="background"
        borderColor="border"
        borderWidth="1px"
        radius="l"
        padding="m"
        shadow="s"
        width="280px"
      >
        <Text size="s" weight="medium">
          {phase === 'loading' ? 'Loading AI model…' : 'Downloading AI model…'}
        </Text>
        <Box marginTop="xs" marginBottom="xs">
          <Progress value={progress} max={100} />
        </Box>
        <Text size="s" color="content3">
          {progress}% — {progressText || 'Initializing…'}
        </Text>
        <Text size="s" color="content3">
          If the progress bar stops for a long time, please refresh and try again.
        </Text>
      </Box>
    );
  }

  if (phase === 'error') {
    return (
      <Box
        backgroundColor="background"
        borderColor="danger"
        borderWidth="1px"
        radius="l"
        padding="m"
        shadow="s"
        maxWidth="260px"
      >
        <Text size="l">❌</Text>
        <Text size="s" color="content2">
          Failed to load AI model. Please refresh and try again.
        </Text>
      </Box>
    );
  }

  return null;
}

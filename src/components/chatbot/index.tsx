import { useState } from 'react';
import { Box } from '@flodesk/grain';
import { useModelEngine } from '../../hooks/chatbot/useModelEngine';
import { useChat } from '../../hooks/chatbot/useChat';
import { FloatingIconButton } from './style';
import ModelStatus from './ModelStatus';
import ChatWindow from './ChatWindow';

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const engine = useModelEngine();
  const chat = useChat(engine.engineRef);

  if (engine.phase === 'checking') return null;

  return (
    <Box position="fixed" bottom="24px" left="24px" zIndex={9999}>
      {engine.phase !== 'ready' ? (
        <ModelStatus
          phase={engine.phase}
          progress={engine.progress}
          progressText={engine.progressText}
          onTryClick={engine.handleTryClick}
        />
      ) : chatOpen ? (
        <ChatWindow onClose={() => setChatOpen(false)} chat={chat} />
      ) : (
        <FloatingIconButton
          onClick={() => setChatOpen(true)}
          title="Open AI assistant"
          aria-label="Open AI assistant"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.477 2 2 6.037 2 11c0 2.613 1.178 4.966 3.07 6.63L4 21l4.12-1.649C9.3 19.766 10.618 20 12 20c5.523 0 10-4.037 10-9S17.523 2 12 2Z"
              fill="white"
            />
          </svg>
        </FloatingIconButton>
      )}
    </Box>
  );
}

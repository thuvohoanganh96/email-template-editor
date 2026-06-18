import { useEffect } from 'react';
import { Box, Flex, Text, TextInput, IconButton, IconArrowUp } from '@flodesk/grain';
import { HeaderDot, UserBubble, AssistantBubble } from './style';
import type { useChat } from '../../hooks/chatbot/useChat';

interface Props {
  onClose: () => void;
  chat: ReturnType<typeof useChat>;
}

export default function ChatWindow({ onClose, chat }: Props) {
  const { messages, input, setInput, generating, sendMessage, messagesEndRef, inputRef } = chat;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Flex
      direction="column"
      width="360px"
      height="480px"
      radius="l"
      shadow="l"
      overflow="hidden"
      backgroundColor="background"
      borderColor="border"
      borderWidth="1px"
    >
      <Flex
        alignItems="center"
        gap="xs"
        backgroundColor="backdrop"
        paddingY="s"
        paddingX="m"
        width="100%"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap="xs" direction="row">
          <HeaderDot />
          <Text size="s" weight="medium" color="lightFade1">
            AI Assistant
          </Text>
        </Flex>
        <IconButton onClick={onClose} aria-label="Close" color="rgba(255,255,255,0.8)">
          ✕
        </IconButton>
      </Flex>

      <Box flex="1" overflowY="auto" padding="m">
        <Flex direction="column" gap="s">
          {messages.length === 0 && (
            <AssistantBubble alignSelf="flex-start" maxWidth="80%" paddingY="xs" paddingX="s" shadow="l">
              <Text size="s" color="content">
                Ask me anything about your email template.
              </Text>
            </AssistantBubble>
          )}
          {messages.map((msg, i) =>
            msg.role === 'user' ? (
              <UserBubble key={i}>{msg.content}</UserBubble>
            ) : (
              <AssistantBubble key={i} alignSelf="flex-start" maxWidth="80%" paddingY="xs" paddingX="s" shadow="l">
                {msg.content ? (
                  <Text size="s" color="content">
                    {msg.content}
                  </Text>
                ) : (
                  <Text size="s" color="content3">
                    Thinking…
                  </Text>
                )}
              </AssistantBubble>
            )
          )}
          <div ref={messagesEndRef} />
        </Flex>
      </Box>

      <Flex
        gap="xs"
        padding="s"
        borderColor="border"
        borderWidth="1px"
        borderSide="top"
        alignItems="center"
        width="100%"
      >
        <Box flex="1 256px">
          <TextInput
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Type a message…"
            isDisabled={generating}
            width="100%"
          />
        </Box>
        <IconButton
          icon={<IconArrowUp />}
          onClick={sendMessage}
          disabled={generating || !input.trim()}
          aria-label="Send"
        />
      </Flex>
    </Flex>
  );
}

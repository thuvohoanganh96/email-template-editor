import { useState, useEffect, useRef } from 'react';
import * as webllm from '@mlc-ai/web-llm';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat(engineRef: React.RefObject<webllm.MLCEngine | null>) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [generating, setGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || generating || !engineRef.current) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setGenerating(true);

    const prompt = `You are css styling expert, based on user requirement, which of these properties should be changed. Return only the property name need to be changed, do not return any other text.
    Example:

    User requirement: ${text}
    property options: "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "backgroundColor", "textAlign", "borderBottom"
`;

    try {
      const history: webllm.ChatCompletionMessageParam[] = [
        { role: 'user', content: prompt },
      ];

      const chunks = await engineRef.current.chat.completions.create({
        messages: history,
        stream: true,
        temperature: 0,
      });

      let reply = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of chunks) {
        const delta = chunk.choices[0]?.delta?.content ?? '';
        reply += delta;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: reply };
          return updated;
        });
      }
    } catch (err) {
      console.error('Generation error:', err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setGenerating(false);
      inputRef.current?.focus();
    }
  }

  return { messages, input, setInput, generating, sendMessage, messagesEndRef, inputRef };
}

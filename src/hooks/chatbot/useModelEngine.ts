import { useState, useEffect, useRef } from 'react';
import * as webllm from '@mlc-ai/web-llm';

const MODEL_ID = 'Llama-3.2-1B-Instruct-q4f32_1-MLC';

export type Phase =
  | 'checking'
  | 'first-time'
  | 'no-gpu'
  | 'downloading'
  | 'loading'
  | 'ready'
  | 'error';

export function useModelEngine() {
  const [phase, setPhase] = useState<Phase>('checking');
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const engineRef = useRef<webllm.MLCEngine | null>(null);

  useEffect(() => {
    checkCache();
  }, []);

  async function checkCache() {
    try {
      const cached = await webllm.hasModelInCache(MODEL_ID);
      if (cached) {
        setPhase('loading');
        await loadEngine();
      } else {
        setPhase('first-time');
      }
    } catch {
      setPhase('first-time');
    }
  }

  async function handleTryClick() {
    if (!(navigator as { gpu?: unknown }).gpu) {
      setPhase('no-gpu');
      return;
    }
    setPhase('downloading');
    await loadEngine();
  }

  async function loadEngine() {
    try {
      const engine = await webllm.CreateMLCEngine(MODEL_ID, {
        initProgressCallback: (report) => {
          setProgress(Math.round(report.progress * 100));
          setProgressText(report.text);
        },
      });
      engineRef.current = engine;
      setPhase('ready');
    } catch (err) {
      console.error('Failed to load model:', err);
      setPhase('error');
    }
  }

  return { phase, progress, progressText, engineRef, handleTryClick };
}

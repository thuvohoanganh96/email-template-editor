import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { GrainProvider } from '@flodesk/grain';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GrainProvider>
      <App />
    </GrainProvider>
  </StrictMode>,
)

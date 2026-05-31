import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditorProvider } from './context/EditorContext';

const Templates = lazy(() => import('./pages/Templates'));
const Builder = lazy(() => import('./pages/Builder'));

export default function App() {
  return (
    <BrowserRouter>
      <EditorProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Templates />} />
            <Route path="/build/:templateid" element={<Builder />} />
          </Routes>
        </Suspense>
      </EditorProvider>
    </BrowserRouter>
  );
}

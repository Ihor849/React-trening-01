import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/css/index.css';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * Application Entry Point
 * Wraps the app with Redux Provider and Theme Provider, initializes i18n
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import DataGate from './components/DataGate';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataGate>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataGate>
    </QueryClientProvider>
  </StrictMode>
);
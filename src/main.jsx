import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Loading from './components/shared/Loading';

// Lazy load the app
const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>
);

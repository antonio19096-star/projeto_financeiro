import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from './lib/query-client'; 
import { pagesConfig } from './pages.config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/AuthContext'; 
import PWAInstallPrompt from './components/PWAInstallPrompt'; 
import { useEffect } from 'react';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

const LayoutWrapper = ({ children, currentPageName }) => {
  return Layout ? <Layout currentPageName={currentPageName}>{children}</Layout> : <>{children}</>;
};

const AuthenticatedApp = () => {
  const { isLoadingAuth } = useAuth();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW error', err));
      });
    }
  }, []);

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-blue-500 font-bold animate-pulse">Iniciando Dashboard...</div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWrapper currentPageName={mainPageKey}><MainPage /></LayoutWrapper>} />
        {Object.entries(Pages).map(([path, PageComponent]) => (
          <Route key={path} path={`/${path}`} element={<LayoutWrapper currentPageName={path}><PageComponent /></LayoutWrapper>} />
        ))}
      </Routes>
      {/* Aqui a mudança: Inclusão do componente que você enviou */}
      <PWAInstallPrompt />
    </>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}
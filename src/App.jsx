import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from './lib/query-client'; 
import { pagesConfig } from './pages.config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/AuthContext'; 
import PWAInstallPrompt from './PWAInstallPrompt'; 
import { useEffect } from 'react';

// --- CONFIGURAÇÃO DE ROTAS DINÂMICAS ---
const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

const LayoutWrapper = ({ children, currentPageName }) => {
  return Layout ? 
    <Layout currentPageName={currentPageName}>{children}</Layout> : 
    <>{children}</>;
};

// --- COMPONENTE DE APLICAÇÃO ---
const AuthenticatedApp = () => {
  const { isLoadingAuth, authError } = useAuth();

  // Registro do Service Worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(err => console.error('SW error:', err));
    }
  }, []);

  // Tela de Carregamento
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-blue-500 font-bold animate-pulse">Iniciando Estratégia Visionária...</div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={
          <LayoutWrapper currentPageName={mainPageKey}>
            <MainPage />
          </LayoutWrapper>
        } />

        {/* Rotas Automáticas do Config */}
        {Object.entries(Pages).map(([path, PageComponent]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <LayoutWrapper currentPageName={path}>
                <PageComponent />
              </LayoutWrapper>
            }
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <PWAInstallPrompt />
    </>
  );
};

// --- COMPONENTES DE SUPORTE (Evitam erro de importação) ---
const PageNotFound = () => <div className="text-white p-10 text-center">Página não encontrada.</div>;
const Toaster = () => null; 
const NavigationTracker = () => null;

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}
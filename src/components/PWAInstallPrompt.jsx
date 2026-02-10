import React, { useState, useEffect } from "react";
import { X, Download, Smartphone, Monitor, Share } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);

    const standalone = window.matchMedia('(display-mode: standalone)').matches ||
                      window.navigator.standalone ||
                      document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => {
        if (!localStorage.getItem('pwa-install-dismissed')) {
          setShowPrompt(true);
        }
      }, 10000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setShowPrompt(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    localStorage.setItem('pwa-install-dismissed', 'true');
    setShowPrompt(false);
  };

  if (isStandalone || !showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-50 md:max-w-md md:left-auto"
      >
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl text-white relative overflow-hidden">
          <button onClick={handleDismiss} className="absolute right-4 top-4 text-slate-500 hover:text-white">
            <X size={20} />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Download className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Instalar Estratégia</h3>
              <p className="text-slate-400 text-sm">Acesso rápido e offline</p>
            </div>
          </div>

          {isIOS ? (
            <div className="space-y-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <p className="text-sm flex items-center gap-2">1. Toque em <Share size={18} className="text-blue-400"/> no Safari</p>
              <p className="text-sm flex items-center gap-2">2. Role e selecione <strong>Adicionar à Tela de Início</strong></p>
            </div>
          ) : (
            <button 
              onClick={handleInstallClick}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <Download size={20} /> Instalar Agora
            </button>
          )}
          
          <button onClick={handleDismiss} className="w-full mt-2 py-2 text-slate-500 text-sm hover:text-slate-300">
            Agora não
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
import React, { useState, useEffect } from "react";
import { X, Download, Share } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShowPrompt(true), 5000);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-50 md:max-w-sm"
      >
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl text-white">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Download className="text-blue-500" /> Instalar App
            </h2>
            <button onClick={() => setShowPrompt(false)}><X size={20}/></button>
          </div>
          <p className="text-slate-400 text-sm mb-4">Adicione o Estratégia Visionária à sua tela de início para acesso rápido.</p>
          <button 
            onClick={() => {
              if(deferredPrompt) deferredPrompt.prompt();
              setShowPrompt(false);
            }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors"
          >
            Instalar Agora
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
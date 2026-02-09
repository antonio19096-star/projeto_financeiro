import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Download, Smartphone, Monitor, Share } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detectar iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);

    // Detectar se já está instalado (standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)').matches ||
                      window.navigator.standalone ||
                      document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    // Escutar evento de instalação (Android/Desktop)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Mostrar prompt após 10 segundos (ou quando quiser)
      setTimeout(() => {
        if (!localStorage.getItem('pwa-install-dismissed')) {
          setShowPrompt(true);
        }
      }, 10000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Evento após instalação bem-sucedida
    window.addEventListener('appinstalled', () => {
      console.log('PWA instalado com sucesso!');
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Mostrar prompt de instalação nativo
    deferredPrompt.prompt();

    // Aguardar escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Usuário ${outcome === 'accepted' ? 'aceitou' : 'recusou'} a instalação`);

    if (outcome === 'accepted') {
      setShowPrompt(false);
    }

    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');

    // Mostrar novamente em 7 dias
    setTimeout(() => {
      localStorage.removeItem('pwa-install-dismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  const getDeviceIcon = () => {
    if (isIOS) return Smartphone;
    if (window.innerWidth <= 768) return Smartphone;
    return Monitor;
  };

  const DeviceIcon = getDeviceIcon();

  // Não mostrar se já está instalado
  if (isStandalone) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50"
        >
          <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 backdrop-blur-xl p-6 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>

            {/* Content */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-blue-500/30 flex-shrink-0">
                  <DeviceIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    Instalar Aplicativo
                  </h3>
                  <p className="text-sm text-slate-400">
                    {isIOS ? 'iPhone/iPad' : 'Acesso Rápido'}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-4">
                {isIOS
                  ? 'Adicione o Estratégia Visionária à tela inicial para acesso rápido e experiência completa de app.'
                  : 'Instale o aplicativo no seu dispositivo para acesso rápido e funcione offline.'}
              </p>

              {isIOS ? (
                // Instruções para iOS
                <div className="space-y-3 bg-slate-900/50 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-400 flex items-center justify-center font-semibold">
                      1
                    </span>
                    <p className="text-slate-300">
                      Toque no botão <Share className="w-4 h-4 inline mx-1" /> <strong>Compartilhar</strong> (parte inferior da tela)
                    </p>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-400 flex items-center justify-center font-semibold">
                      2
                    </span>
                    <p className="text-slate-300">
                      Role e selecione <strong>"Adicionar à Tela de Início"</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 text-blue-400 flex items-center justify-center font-semibold">
                      3
                    </span>
                    <p className="text-slate-300">
                      Confirme tocando em <strong>"Adicionar"</strong>
                    </p>
                  </div>
                </div>
              ) : (
                // Botão para Android/Desktop
                <Button
                  onClick={handleInstallClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-6 mb-2"
                  disabled={!deferredPrompt}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Instalar Agora
                </Button>
              )}

              <Button
                variant="ghost"
                onClick={handleDismiss}
                className="w-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                Agora Não
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

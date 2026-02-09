import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // Inicializamos com um usuário simulado para o desenvolvimento não parar
  const [user, setUser] = useState({ 
    id: 1, 
    name: 'Estrategista Visionário', 
    role: 'Admin' 
  });
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  // No futuro, aqui faremos o fetch para o seu backend em Python no Vercel
  const login = (credentials) => {
    setIsLoadingAuth(true);
    // Lógica de autenticação futura
    setIsLoadingAuth(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoadingAuth, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
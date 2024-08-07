import React, { createContext, useContext, useState, useEffect,ReactNode } from 'react';
import authService from './authService';
import { AuthContextType } from '../../types/auth';


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) =>  {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem('token') !== null);

  useEffect(() => {
        setIsAuthenticated(authService.isLoggedIn());
  }, []);

  const login = async (username: string, password: string) => {
    await authService.login({username, password});
    setIsAuthenticated(true);
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

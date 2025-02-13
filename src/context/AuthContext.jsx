import React, { createContext, useState, useContext, useEffect } from "react";

// Создаем контекст
const AuthContext = createContext();

// Провайдер для AuthContext
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверка наличия флага auth в localStorage при инициализации
  useEffect(() => {
    const authStatus = localStorage.getItem("auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("auth", "true"); // Сохраняем флаг auth в localStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth"); // Удаляем флаг auth из localStorage
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

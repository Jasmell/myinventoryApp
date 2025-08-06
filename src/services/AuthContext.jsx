import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/dbInitialization"; // Importamos la auth inicializada

// 1. Crear el Contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación más fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

// 2. Crear el Proveedor del Contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Para saber si ya cargó la info del user

  // Función para registrar un nuevo usuario
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Función para iniciar sesión
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Función para cerrar sesión
  const logout = () => {
    return signOut(auth);
  };

  // Efecto para gestionar el estado de autenticación
  useEffect(() => {
    // onAuthStateChanged es un observador que está pendiente de los cambios de auth
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Si hay usuario logueado, lo guarda en el estado
      setLoading(false); // Ya terminó de cargar
    });

    // Se desuscribe del observador cuando el componente se desmonta
    return () => unsubscribe();
  }, []); // El array vacío asegura que se ejecute solo una vez

  // El valor que proveeremos a los componentes hijos
  const value = {
    user,
    loading,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Solo renderizamos los hijos cuando no esté cargando */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
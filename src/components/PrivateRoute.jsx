import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Importa el hook useAuth

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Obtiene el usuario y el estado de carga del contexto

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Cargando...</div>; // Muestra un spinner o mensaje
  }

  // Si no hay usuario, redirige a la página de inicio de sesión
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario, renderiza los componentes hijos
  return children;
};

export default PrivateRoute;
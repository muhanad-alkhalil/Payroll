import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
    const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
    <Navigate to="/login" replace />
    </>
  );
};

export default Login;
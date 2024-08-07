import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // Redirect if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Otherwise, render the child routes
    return <Outlet />;
};

export default ProtectedRoute;

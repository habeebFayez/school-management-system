import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    // Redirect to appropriate dashboard based on user role
    const dashboardPath = user.role.includes('teacher') 
      ? '/teacher/dashboard' 
      : '/student/dashboard';
    return <Navigate to={dashboardPath} replace />;
  }

  return children;
}; 
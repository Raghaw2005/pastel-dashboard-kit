
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import StudentDashboard from '@/components/StudentDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <StudentDashboard onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Index;

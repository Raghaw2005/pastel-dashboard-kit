
import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import LoginSelector from '@/components/LoginSelector';
import StudentLogin from '@/components/StudentLogin';
import TeacherLogin from '@/components/TeacherLogin';
import StudentDashboard from '@/components/StudentDashboard';
import TeacherDashboard from '@/components/TeacherDashboard';

type PageType = 'landing' | 'selector' | 'studentLogin' | 'teacherLogin' | 'studentDashboard' | 'teacherDashboard';
type UserType = 'student' | 'teacher' | null;

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [userType, setUserType] = useState<UserType>(null);

  const handleGetStarted = () => {
    setCurrentPage('selector');
  };

  const handleUserTypeSelect = (type: 'student' | 'teacher') => {
    setUserType(type);
    setCurrentPage(type === 'student' ? 'studentLogin' : 'teacherLogin');
  };

  const handleLogin = () => {
    setCurrentPage(userType === 'student' ? 'studentDashboard' : 'teacherDashboard');
  };

  const handleLogout = () => {
    setCurrentPage('landing');
    setUserType(null);
  };

  const handleBackToSelector = () => {
    setCurrentPage('selector');
    setUserType(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {currentPage === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      {currentPage === 'selector' && (
        <LoginSelector onUserTypeSelect={handleUserTypeSelect} />
      )}
      {currentPage === 'studentLogin' && (
        <StudentLogin 
          onLogin={handleLogin} 
          onBack={handleBackToSelector} 
        />
      )}
      {currentPage === 'teacherLogin' && (
        <TeacherLogin 
          onLogin={handleLogin} 
          onBack={handleBackToSelector} 
        />
      )}
      {currentPage === 'studentDashboard' && (
        <StudentDashboard onLogout={handleLogout} />
      )}
      {currentPage === 'teacherDashboard' && (
        <TeacherDashboard onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Index;

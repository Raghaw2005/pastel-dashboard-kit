
import { Button } from '@/components/ui/button';
import { Home, BookOpen, Calendar, Users, Settings, LogOut, GraduationCap } from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'Courses' },
    { icon: Calendar, label: 'Schedule' },
    { icon: Users, label: 'Study Groups' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-white/90 backdrop-blur-sm border-r border-gray-200 flex flex-col items-center py-6 shadow-lg">
      {/* Logo */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-2xl">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`p-3 rounded-2xl transition-all duration-200 hover:bg-gray-100 group ${
              item.active
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            title={item.label}
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <Button
        onClick={onLogout}
        variant="ghost"
        size="sm"
        className="p-3 rounded-2xl text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
        title="Logout"
      >
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Sidebar;

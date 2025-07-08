
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, ArrowLeft } from 'lucide-react';

interface LoginSelectorProps {
  onUserTypeSelect: (type: 'student' | 'teacher') => void;
}

const LoginSelector = ({ onUserTypeSelect }: LoginSelectorProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Role
          </h1>
          <p className="text-xl text-gray-600">
            Select whether you're a student or teacher to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Student Card */}
          <Card 
            className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white/90 backdrop-blur-sm cursor-pointer hover:scale-105 group"
            onClick={() => onUserTypeSelect('student')}
          >
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">I'm a Student</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 mb-6">
                Track your attendance, view your progress, and manage your academic journey
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>✓ View subject-wise attendance</div>
                <div>✓ Track attendance percentage</div>
                <div>✓ Request corrections</div>
                <div>✓ Get attendance alerts</div>
              </div>
              <Button 
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl"
                size="lg"
              >
                Continue as Student
              </Button>
            </CardContent>
          </Card>

          {/* Teacher Card */}
          <Card 
            className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white/90 backdrop-blur-sm cursor-pointer hover:scale-105 group"
            onClick={() => onUserTypeSelect('teacher')}
          >
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">I'm a Teacher</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 mb-6">
                Manage attendance with AI-powered scanning and comprehensive reporting
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>✓ AI face recognition scanning</div>
                <div>✓ Manual attendance marking</div>
                <div>✓ Attendance reports</div>
                <div>✓ Manage correction requests</div>
              </div>
              <Button 
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl"
                size="lg"
              >
                Continue as Teacher
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginSelector;

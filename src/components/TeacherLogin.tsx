
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface TeacherLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

const TeacherLogin = ({ onLogin, onBack }: TeacherLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-fade-in">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to selection
        </Button>

        <Card className="border-0 shadow-2xl rounded-3xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mb-4 mx-auto">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-800">Teacher Login</CardTitle>
            <p className="text-gray-600">Access your teaching dashboard</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="employeeId" className="text-gray-700 font-medium">
                  Employee ID
                </Label>
                <Input
                  id="employeeId"
                  type="text"
                  placeholder="Enter your employee ID"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="rounded-xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="rounded-xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl h-12 font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center">
              <a href="#" className="text-purple-500 hover:text-purple-600 text-sm font-medium">
                Forgot your password?
              </a>
            </div>

            <div className="text-center text-sm text-gray-500">
              Need help? Contact the administration office
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherLogin;

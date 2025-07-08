
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, Award, TrendingUp, Clock, Users } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  return (
    <div className="min-h-screen flex animate-fade-in">
      <Sidebar onLogout={onLogout} />
      
      <main className="flex-1 p-6 ml-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Good morning, Sarah! 👋</h1>
            <p className="text-gray-600">Ready to make today productive?</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Attendance</p>
                    <p className="text-2xl font-bold text-blue-800">94%</p>
                  </div>
                  <div className="bg-blue-200 p-3 rounded-xl">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 text-sm font-medium">Assignments</p>
                    <p className="text-2xl font-bold text-purple-800">8/10</p>
                  </div>
                  <div className="bg-purple-200 p-3 rounded-xl">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-medium">Grade Average</p>
                    <p className="text-2xl font-bold text-green-800">A-</p>
                  </div>
                  <div className="bg-green-200 p-3 rounded-xl">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Study Hours</p>
                    <p className="text-2xl font-bold text-orange-800">24h</p>
                  </div>
                  <div className="bg-orange-200 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2 rounded-2xl shadow-sm border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-800 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Math Assignment Submitted</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Physics Quiz - Grade A</p>
                      <p className="text-sm text-gray-600">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                    <div className="bg-purple-500 p-2 rounded-lg">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Joined Study Group</p>
                      <p className="text-sm text-gray-600">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="rounded-2xl shadow-sm border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-800">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                    <p className="font-medium text-gray-800">Chemistry Lab</p>
                    <p className="text-sm text-gray-600">Tomorrow 2:00 PM</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl border-l-4 border-red-400">
                    <p className="font-medium text-gray-800">History Essay Due</p>
                    <p className="text-sm text-gray-600">Friday 11:59 PM</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                    <p className="font-medium text-gray-800">Math Exam</p>
                    <p className="text-sm text-gray-600">Next Monday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;

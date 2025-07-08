
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GraduationCap, Bell, AlertTriangle, CheckCircle, Clock, LogOut, MessageSquare } from 'lucide-react';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [correctionReason, setCorrectionReason] = useState('');

  // Mock data
  const subjects = [
    { name: 'Computer Science', total: 45, attended: 40, percentage: 89, status: 'good' },
    { name: 'Mathematics', total: 42, attended: 28, percentage: 67, status: 'warning', needMore: 4 },
    { name: 'Physics', total: 38, attended: 25, percentage: 66, status: 'critical', unreachable: true },
    { name: 'English', total: 40, attended: 38, percentage: 95, status: 'excellent' }
  ];

  const attendanceLogs = [
    { date: '2024-01-08', subject: 'Computer Science', status: 'Present' },
    { date: '2024-01-08', subject: 'Mathematics', status: 'Absent' },
    { date: '2024-01-07', subject: 'Physics', status: 'Present' },
    { date: '2024-01-07', subject: 'English', status: 'Present' },
    { date: '2024-01-06', subject: 'Computer Science', status: 'Present' }
  ];

  const notifications = [
    { type: 'warning', message: 'Mathematics attendance below 75%' },
    { type: 'error', message: 'Face not detected in Physics class' },
    { type: 'success', message: 'Correction request approved for English' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'from-green-400 to-emerald-400';
      case 'good': return 'from-blue-400 to-cyan-400';
      case 'warning': return 'from-yellow-400 to-orange-400';
      case 'critical': return 'from-red-400 to-pink-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default: return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Student Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, John!</p>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="rounded-xl border-gray-200"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Notifications */}
        <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-blue-500" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notif, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-2xl">
                  {getNotificationIcon(notif.type)}
                  <span className="text-gray-700">{notif.message}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className={`h-2 w-full bg-gradient-to-r ${getStatusColor(subject.status)} rounded-full`} />
                <CardTitle className="text-lg">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">{subject.percentage}%</div>
                  <div className="text-sm text-gray-600">{subject.attended}/{subject.total} classes</div>
                </div>
                
                {subject.status === 'warning' && subject.needMore && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3">
                    <p className="text-sm text-yellow-800">
                      Attend {subject.needMore} more classes to reach 75%
                    </p>
                  </div>
                )}
                
                {subject.status === 'critical' && subject.unreachable && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-3">
                    <p className="text-sm text-red-800">
                      75% unreachable
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Attendance Logs */}
          <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>Recent Attendance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Date</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceLogs.map((log, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{log.date}</TableCell>
                        <TableCell>{log.subject}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            log.status === 'Present' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {log.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Request Correction */}
          <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-purple-500" />
                <span>Request Correction</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                Need to correct your attendance? Submit a request with the reason.
              </p>
              
              <Input
                placeholder="Enter reason for correction..."
                value={correctionReason}
                onChange={(e) => setCorrectionReason(e.target.value)}
                className="rounded-xl border-gray-200"
              />
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl"
                disabled={!correctionReason.trim()}
              >
                Submit Request
              </Button>
              
              <div className="text-xs text-gray-500 mt-2">
                Requests are reviewed by your subject teacher
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BookOpen, 
  Scan, 
  Users, 
  FileText, 
  LogOut, 
  Camera, 
  UserCheck, 
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';

interface TeacherDashboardProps {
  onLogout: () => void;
}

const TeacherDashboard = ({ onLogout }: TeacherDashboardProps) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isScanning, setIsScanning] = useState(false);

  // Mock data
  const todayAttendance = { present: 22, total: 30 };
  
  const lowAttendanceStudents = [
    { name: 'Alice Johnson', rollNo: 'CS001', attendance: 65, classes: '26/40' },
    { name: 'Bob Smith', rollNo: 'CS002', attendance: 72, classes: '29/40' },
    { name: 'Carol Brown', rollNo: 'CS003', attendance: 68, classes: '27/40' }
  ];

  const correctionRequests = [
    { name: 'David Wilson', rollNo: 'CS004', date: '2024-01-07', reason: 'Was in medical emergency', status: 'pending' },
    { name: 'Emma Davis', rollNo: 'CS005', date: '2024-01-06', reason: 'Technical issues with scanner', status: 'pending' }
  ];

  const startScanning = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const handleCorrectionRequest = (index: number, action: 'approve' | 'reject') => {
    console.log(`${action} request for ${correctionRequests[index].name}`);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
    { id: 'scan', label: 'Start Scan', icon: Scan },
    { id: 'requests', label: 'Requests', icon: FileText },
    { id: 'reports', label: 'Reports', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/90 backdrop-blur-sm shadow-lg border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Teacher Panel</h1>
              <p className="text-sm text-gray-600">Computer Science</p>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full rounded-2xl border-gray-200"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {activeSection === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
              <p className="text-gray-600">Computer Science - Today's Overview</p>
            </div>

            {/* Today's Attendance Summary */}
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="h-5 w-5 text-green-500" />
                  <span>Today's Attendance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">{todayAttendance.present}</div>
                    <div className="text-gray-600">Present</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500">{todayAttendance.total - todayAttendance.present}</div>
                    <div className="text-gray-600">Absent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">{todayAttendance.total}</div>
                    <div className="text-gray-600">Total Students</div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(todayAttendance.present / todayAttendance.total) * 100}%` }}
                    />
                  </div>
                  <div className="text-center mt-2 text-gray-600">
                    {Math.round((todayAttendance.present / todayAttendance.total) * 100)}% Attendance Rate
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Low Attendance Students */}
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span>Students with Low Attendance (&lt;75%)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Student Name</TableHead>
                        <TableHead>Roll No</TableHead>
                        <TableHead>Attendance %</TableHead>
                        <TableHead>Classes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lowAttendanceStudents.map((student, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.rollNo}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              {student.attendance}%
                            </span>
                          </TableCell>
                          <TableCell>{student.classes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'scan' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">AI Face Recognition</h2>
              <p className="text-gray-600">Scan student faces for automatic attendance marking</p>
            </div>

            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {!isScanning ? (
                    <>
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl">
                        <Camera className="h-12 w-12 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Scan</h3>
                        <p className="text-gray-600">Click below to start the AI-powered attendance scanning</p>
                      </div>
                      <Button
                        onClick={startScanning}
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold"
                      >
                        <Scan className="h-6 w-6 mr-2" />
                        Start Scanning
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl animate-pulse">
                        <Scan className="h-12 w-12 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Scanning in Progress...</h3>
                        <p className="text-gray-600">AI is detecting and recognizing student faces</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full animate-pulse" style={{ width: '75%' }} />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Manual Marking Option */}
            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Manual Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">For students whose faces weren't detected by AI</p>
                <Button variant="outline" className="rounded-xl">
                  Mark Manually
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'requests' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Correction Requests</h2>
              <p className="text-gray-600">Review and manage student attendance correction requests</p>
            </div>

            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {correctionRequests.map((request, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-gray-800">{request.name}</h4>
                            <span className="text-sm text-gray-500">({request.rollNo})</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Date: {request.date}</p>
                          <p className="text-gray-700">"{request.reason}"</p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button
                            onClick={() => handleCorrectionRequest(index, 'approve')}
                            size="sm"
                            className="bg-green-500 hover:bg-green-600 text-white rounded-xl"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleCorrectionRequest(index, 'reject')}
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50 rounded-xl"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'reports' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Attendance Reports</h2>
              <p className="text-gray-600">Comprehensive attendance analytics and reports</p>
            </div>

            <Card className="border-0 shadow-lg rounded-3xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center text-gray-500">
                  <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Reports section coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Frown } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <Card className="border-0 shadow-2xl rounded-3xl bg-white/95 backdrop-blur-sm max-w-md w-full">
        <CardContent className="p-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl mb-4">
            <Frown className="h-10 w-10 text-white" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl font-bold text-gray-800">Oops! Page Not Found</h2>
            <p className="text-gray-600">
              The page you're looking for seems to have wandered off. Don't worry, 
              it happens to the best of us!
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl h-12 font-semibold"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Back Home
            </Button>
            
            <p className="text-sm text-gray-500">
              Or try refreshing the page if you think this is a mistake.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              Error Code: 404 | Smart AI Attendance System
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;

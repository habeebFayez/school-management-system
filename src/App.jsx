import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';

// Teacher Pages ************************
import DashboardTeacher from './pages/Teacher/DashboardTeacher';
import StudentsList from './pages/Teacher/StudentsList';
import Schedule from './pages/Teacher/Schedule ';
import Exams from './pages/Teacher/Exams';
import Assignments from './pages/Teacher/Assignments';
import Grades from './pages/Teacher/Grades';
import Attendance from './pages/Teacher/Attendance';
import Inbox from './pages/Teacher/Inbox';
import TeacherProfile from './pages/Teacher/TeacherProfile';

// Student Pages ************************
import StudentProfile  from './pages/Student/StudentProfile';
import DashboardStudent  from './pages/Student/DashboardStudent';

import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext';
import { NotificationProvider } from './contexts/NotificationContext';
import NotFound from './pages/NotFound';
import React from 'react';



function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <NotificationProvider>
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                } 
              />
              {/* Teacher Routes */}
              <Route 
                path="/teacher/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardTeacher />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/students-list" 
                element={
                  <ProtectedRoute>
                    <StudentsList />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/schedule" 
                element={
                  <ProtectedRoute>
                    <Schedule />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/exams" 
                element={
                  <ProtectedRoute>
                    <Exams />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/assignments" 
                element={
                  <ProtectedRoute>
                    <Assignments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/grades" 
                element={
                  <ProtectedRoute>
                    <Grades />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/attendance" 
                element={
                  <ProtectedRoute>
                    <Attendance />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/teacher/inbox" 
                element={
                  <ProtectedRoute>
                    <Inbox />
                  </ProtectedRoute>
                } 
              />
               <Route 
                path="/teacher/teacher-profile" 
                element={
                  <ProtectedRoute>
                    <TeacherProfile />
                  </ProtectedRoute>
                } 
              />
               {/* Student Routes */}
               <Route 
                path="/student/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardStudent />
                  </ProtectedRoute>
                } 
              />
              
               <Route 
                path="/student/student-profile" 
                element={
                  <ProtectedRoute>
                    <StudentProfile />
                  </ProtectedRoute>
                } 
              />
              {/* Protected 404 route */}
              <Route 
                path="*" 
                element={
                  <ProtectedRoute>
                    <NotFound />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Documentation from './components/shared/Documentation';
import { useState } from 'react';

// Teacher Pages ************************
import DashboardTeacher from './pages/Teacher/DashboardTeacher';
import StudentsList from './pages/Teacher/StudentsList';
import Schedule from './pages/Teacher/Schedule ';
import Exams from './pages/Teacher/Exams';
import Assignments from './pages/Teacher/Assignments';
import GradesTeacher from './pages/Teacher/Grades';
import Attendance from './pages/Teacher/Attendance';
import Inbox from './pages/Teacher/Inbox';
import TeacherProfile from './pages/Teacher/TeacherProfile';
import StudentListPage from "./pages/Teacher/StudentListPage";

// Student Pages ************************
import StudentProfile  from './pages/Student/StudentProfile';
import DashboardStudent  from './pages/Student/DashboardStudent';
import GradesStudent from './pages/Student/Grades';
import SubjectsList from './pages/Student/SubjectsList ';
import TeachersList from './pages/Student/TeachersList ';
import SubjectFullData from './pages/Student/SubjectFullData';
import ScheduleStudent from './pages/Student/Schedule ';
import ExamsStudent from './pages/Student/Exams';
import AssignmentsStudent from './pages/Student/Assignments';
import AttendanceStudent from './pages/Student/Attendance';
import AnnouncementsStudent from './pages/Student/Announcenents';
import InboxStudent from './pages/Student/Inbox';

import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { SaveNotificationProvider } from './contexts/SaveNotificationContext';
import NotFound from './pages/NotFound';
import React from 'react';
import { ModalProvider } from './contexts/ModalProvider';
import AttendanceDaily from './pages/Teacher/AttendanceDaily';

function App() {
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(false);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <SaveNotificationProvider>
            <ModalProvider>
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
                            <StudentListPage />
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
                            <GradesTeacher />
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
                        path="/teacher/attendance-daily" 
                        element={
                          <ProtectedRoute>
                            <AttendanceDaily />
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
                        path="/teacher/teacher-profile/*" 
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
                        path="/student/student-profile/*" 
                        element={
                          <ProtectedRoute>
                            <StudentProfile />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                      path="/student/grades" 
                      element={
                        <ProtectedRoute>
                          <GradesStudent />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                      path="/student/courses-list" 
                      element={
                        <ProtectedRoute>
                          <SubjectsList />
                        </ProtectedRoute>
                      } 
                    />
                      <Route 
                      path="/student/courses/*" 
                      element={
                        <ProtectedRoute>
                          <SubjectFullData />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                    path="/student/teachers-list" 
                    element={
                      <ProtectedRoute>
                        <TeachersList />
                      </ProtectedRoute>
                    } 
                  />

                    <Route 
                      path="/student/schedule" 
                      element={
                        <ProtectedRoute>
                          <ScheduleStudent />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                      path="/student/exams" 
                      element={
                        <ProtectedRoute>
                          <ExamsStudent />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                      path="/student/assignments" 
                      element={
                        <ProtectedRoute>
                          <AssignmentsStudent />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                      path="/student/attendance" 
                      element={
                        <ProtectedRoute>
                          <AttendanceStudent />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                      path="/student/announcements" 
                      element={
                        <ProtectedRoute>
                          <AnnouncementsStudent />
                        </ProtectedRoute>
                      } 
                    />

                    <Route 
                      path="/student/inbox" 
                      element={
                        <ProtectedRoute>
                          <InboxStudent />
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
                  <Documentation 
                    isOpen={isDocumentationOpen} 
                    onClose={() => setIsDocumentationOpen(false)} 
                  />
                </NotificationProvider>
              </CourseProvider>
            </ModalProvider>
          </SaveNotificationProvider>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
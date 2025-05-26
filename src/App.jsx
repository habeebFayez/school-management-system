import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext';
import { NotificationProvider } from './contexts/NotificationContext';
import React from 'react';


function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <NotificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
               
        </Routes>
      </BrowserRouter>
        </NotificationProvider>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
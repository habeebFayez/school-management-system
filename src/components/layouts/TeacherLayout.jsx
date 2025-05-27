import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from '../shared/Sidebar';
import TopNavbar from '../shared/TopNavbar';

const TeacherLayout = ({ children ,currentPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        currentPage={currentPage} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 bg-gray-100">
        <div className="sticky top-0 ">
          <TopNavbar onMenuClick={() => setIsSidebarOpen(true)}/>
        </div>

        <main className="bg-gray-100 p-5">
          <h3 className="text-black font-semibold text-xl mb-4">{currentPage}</h3>
             <div className='container flex-1 w-full h-full'> 
            {/* Main content goes here Dont change container ... */}
            {children}

            </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout; 
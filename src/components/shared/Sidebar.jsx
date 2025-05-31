import React from 'react';
import { Home, Users, LibraryBig,Megaphone, Calendar, FileText, ClipboardList, Award, UserCheck, Mail, User, LogOut, X } from 'lucide-react';
import logo from '../../assets/image.png';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/shared/Loading';
import { DefultImage } from '../../constants/passOver.js';

const Sidebar = ({ currentPage, isOpen, onClose, }) => {
  const [activeItem, setActiveItem] = React.useState(currentPage);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const { user, logout } = useAuth();

  const menuItemsTeacher = [
    { icon: Home, label: 'Home', path: '/teacher/dashboard' },
    { icon: Users, label: 'Students', path: '/teacher/students-list' },
    { icon: Calendar, label: 'Schedule', path: '/teacher/schedule' },
    { icon: FileText, label: 'Exams', path: '/teacher/exams' },
    { icon: ClipboardList, label: 'Assignments', path: '/teacher/assignments' },
    { icon: Award, label: 'Grades', path: '/teacher/grades' },
    { icon: UserCheck, label: 'Attendance', path: '/teacher/attendance' },
    { icon: Mail, label: 'Inbox', path: '/teacher/inbox' },
  ];
  const menuItemsStudent = [
    { icon: Home, label: 'Home', path: '/student/dashboard' },
    { icon: LibraryBig, label: 'Courses', path: '/student/courses-list' },
    { icon: Calendar, label: 'Schedule', path: '/student/schedule' },
    { icon: Users, label: 'Teachers', path: '/student/teachers-list' },
    { icon: FileText, label: 'Exams', path: '/student/exams' },
    { icon: ClipboardList, label: 'Assignments', path: '/student/assignments' },
    { icon: Award, label: 'Grades', path: '/student/grades' },
    { icon: UserCheck, label: 'Attendance', path: '/student/attendance' },
    { icon: Megaphone , label: 'Announcements', path: '/student/announcements' },
    { icon: Mail, label: 'Inbox', path: '/student/inbox' },
  ];

  const handleItemClick = (label) => {
    if(label === 'Logout'){
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      logout();
        navigate('/');
      }, 1000);
    } else if(label === 'Profile') {
      setActiveItem(label);
      user?.role==='teacher'?
      navigate(`/teacher/teacher-profile/${user.name}`)
      :
      navigate(`/student/student-profile/${user.name}`);
    } else {
      const menuItem = user?.role==='teacher'?
      menuItemsTeacher.find(item => item.label === label)
      :   
      menuItemsStudent.find(item => item.label === label);
      if (menuItem) {
        setActiveItem(label);
        navigate(menuItem.path);
      }
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white min-h-screen py-4 pr-4`}>
        {/* Close button for mobile */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
        >
          <X size={24} className="text-white" />
        </button>

        <div 
         onClick={() => handleItemClick('Home')}
         className="flex items-center justify-center mb-8 cursor-pointer ">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
            <img src={logo} alt="Logo" className="object-contain w-[200px] h-[200px]" />
          </div>
          <span className="text-xl font-semibold">Titan Edu</span>
        </div>
      <div className=" sticky top-0 flex flex-col  ">
        <nav className="space-y-2">
          {(user?.role==='teacher'? menuItemsTeacher : menuItemsStudent).map((item, index) => (
            <div key={index} className='flex w-full space-x-10 items-center justify-left'>
              <div className={`relative h-12 w-2.5 ${activeItem === item.label ? 'bg-[#10062B]' : 'bg-[#e8e8eb00]'} rounded-e`} />
              <div
                onClick={() => handleItemClick(item.label)}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors w-full ${
                  activeItem === item.label ? 'bg-[#10062B] text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </nav>
        
        <div className='flex w-full space-x-10 items-center justify-left mt-14'>
          <div className={`relative h-12 w-2.5 ${activeItem === 'Profile' ? 'bg-[#10062B]' : 'bg-[#e8e8eb00]'} rounded-e`} />
          <div 
            onClick={() => handleItemClick('Profile')}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors w-full ${
              activeItem === 'Profile' ? 'bg-[#10062B] text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <User size={20} />
            <span>Profile</span>
          </div>
        </div>
        <div className='flex w-full space-x-10 items-center justify-left mt-2'>
          <div className={`relative h-12 w-2.5 ${activeItem === 'none' ? 'bg-[#10062B]' : 'bg-[#e8e8eb00]'} rounded-e`} />
          <div 
            onClick={() => handleItemClick('Logout')}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors w-full ${
              activeItem === 'none' ? 'bg-[#10062B] text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <LogOut size={20} />
            {isLoading ? <Loading/> : <span>Logout</span>}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar; 
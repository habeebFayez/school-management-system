import React from 'react';
import { Search, MessageCircleMore, Bell, Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { DefultImage } from '../../constants/passOver.js';

const TopNavbar = ({ onMenuClick }) => {
  const { user } = useAuth();

  const handleItemClick = (label) => {
  };

  return (
    <div className="flex-1 bg-white h-16 p-4">
      {/* Header */}
      <div className="sticky top-0 w-full flex items-center gap-20">
        <div className="flex items-center gap-4 flex-1 mr-8">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <div className="flex-1">
            <div className="relative w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-8 pl-10 pr-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div  
            onClick={() => handleItemClick()}
            className="w-8 h-8 cursor-pointer transition-colors bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full flex items-center justify-center">
            <Bell color='white' size={20} fill='white' />
          </div>
          <div 
            onClick={() => handleItemClick()}
            className="w-8 h-8 cursor-pointer transition-colors bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full flex items-center justify-center">
            <MessageCircleMore color='white' size={20}/>
          </div>
          <div 
            onClick={() => handleItemClick()}
            className="flex cursor-pointer transition-colors">
            <div className="text-right">
              <div className="text-sm font-medium">{user?.name || 'User'}</div>
              <div className="text-xs text-gray-500">{((user?.role) || 'Role').toUpperCase()}</div>
            </div>
            <div className="w-10 ml-2 h-10 bg-orange-400 rounded-full">
              <img 
                className='object-fill rounded-full w-10 h-10'
                src={user?.avatar || DefultImage}
                alt={user?.name || 'User'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Schedule */}
        <div className="col-span-8">

        </div>
        
        {/* Right Sidebar */}
        <div className="col-span-4 space-y-6">
       
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
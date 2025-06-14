import React from 'react';
import { Search, Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import UserDropdown from './UserDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import MessagesDropdown from './MessagesDropdown';

const TopNavbar = ({ onMenuClick, search }) => {
  const { user } = useAuth();

  return (
    <div className="flex-1 bg-white h-16 px-4 py-2">
      {/* Header */}
      <div className="sticky top-0 w-full flex items-center gap-20">
        <div className="flex items-center gap-4 flex-1 mr-8">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          {search && (
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
          )}
        </div>
        <div className="flex items-center space-x-4">
          <NotificationsDropdown />
          <MessagesDropdown />
          <UserDropdown user={user} />
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
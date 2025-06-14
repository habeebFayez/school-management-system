import React, { useState, useRef, useEffect } from 'react';
import { Bell, Check, Trash2, ChevronDown, Loader2 } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';
import { useNavigate } from 'react-router-dom';

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deletedNotification, setDeletedNotification] = useState(null);
  const dropdownRef = useRef(null);
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  // Example notifications - replace with actual data from your backend
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Assignment',
      message: 'Math homework due tomorrow',
      time: '5 minutes ago',
      read: false,
      type: 'assignment',
      link: '/student/assignments'
    },
    {
      id: 2,
      title: 'Grade Posted',
      message: 'Your Science exam grade is now available',
      time: '1 hour ago',
      read: false,
      type: 'grade',
      link: '/student/grades'
    },
    {
      id: 3,
      title: 'Class Cancelled',
      message: 'Physics class is cancelled today',
      time: '2 hours ago',
      read: true,
      type: 'announcement',
      link: '/student/schedule'
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAsRead = async (id) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setNotifications(notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      ));
      showNotification('Notification marked as read', 'success');
    } catch (error) {
      showNotification('Failed to mark notification as read', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNotification = async (id) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const notificationToDelete = notifications.find(n => n.id === id);
      setNotifications(notifications.filter(notification => notification.id !== id));
      setDeletedNotification(notificationToDelete);
      showNotification('Notification deleted', 'success');
    } catch (error) {
      showNotification('Failed to delete notification', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const undoDelete = () => {
    if (deletedNotification) {
      setNotifications(prev => [...prev, deletedNotification]);
      setDeletedNotification(null);
      showNotification('Notification restored', 'success');
    }
  };

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    if (notification.link) {
      navigate(notification.link);
    }
    setIsOpen(false);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 cursor-pointer transition-colors bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full flex items-center justify-center"
      >
        <Bell color='white' size={20} fill='white' />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
              </div>
            ) : notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {notification.time}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {!notification.read && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(notification.id);
                          }}
                          className="p-1 hover:bg-gray-100 rounded-full"
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(notification.id);
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full"
                        title="Delete notification"
                      >
                        <Trash2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-gray-500">
                No notifications
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-100">
              <button
                onClick={() => setNotifications([])}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Clear all notifications
              </button>
            </div>
          )}

          {deletedNotification && (
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Notification deleted</span>
                <button
                  onClick={undoDelete}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Undo
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown; 
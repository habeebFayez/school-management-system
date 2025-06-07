import React, { useState, useEffect } from 'react';
import { useSaveNotification } from '../../contexts/SaveNotificationContext';
import { useNotification } from '../../contexts/NotificationContext';

export const CreateStudentModal = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const { showSaveNotification, hideSaveNotification } = useSaveNotification();
  const { showNotification } = useNotification();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    class: '',
    parentPhone: '',
    address: '',
    avatar: null
  });


  useEffect(() => {
    let timeoutId;
    let intervalId;


    if (Object.values(formData).some(value => value !== '' && value !== null)) {
        // Initial delay of 10 seconds before the first notification
      timeoutId = setTimeout(() => {
        showSaveNotification();
        // Then show every 10 seconds
        intervalId = setInterval(() => {
          showSaveNotification();
        }, 10000); // 10 seconds
      }, 10000); // Initial 10 seconds delay
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isOpen,formData, showSaveNotification]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      showNotification('Name is required', 'error');
      return;
    }
    if (!formData.email.trim()) {
      showNotification('Email is required', 'error');
      return;
    }
    if (!formData.grade.trim()) {
      showNotification('Grade is required', 'error');
      return;
    }
    if (!formData.class.trim()) {
      showNotification('Class is required', 'error');
      return;
    }

    // Here you would typically make an API call to create the student
    console.log('Creating student:', formData);
    hideSaveNotification();
    onSubmit(formData);
    onClose();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, avatar: e.target.files[0] }));
    }
  };

  return (
    <div className="w-[40vw] max-w-5xl rounded-lg relative overflow-y-auto max-h-[90vh]">
      <h2 className="text-xl font-semibold text-center mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          {/* Name */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Student Name"
              className="bg-gray-300 w-full h-8 rounded-md p-2"
            />
          </div>

          {/* Email */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Student Email"
              className="bg-gray-300 w-full h-8 rounded-md p-2"
            />
          </div>

          {/* Grade */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Grade</label>
            <input
              type="text"
              value={formData.grade}
              onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
              placeholder="Student Grade"
              className="bg-gray-300 w-full h-8 rounded-md p-2"
            />
          </div>

          {/* Class */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Class</label>
            <input
              type="text"
              value={formData.class}
              onChange={(e) => setFormData(prev => ({ ...prev, class: e.target.value }))}
              placeholder="Student Class"
              className="bg-gray-300 w-full h-8 rounded-md p-2"
            />
          </div>

          {/* Parent Phone */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Parent Phone</label>
            <input
              type="tel"
              value={formData.parentPhone}
              onChange={(e) => setFormData(prev => ({ ...prev, parentPhone: e.target.value }))}
              placeholder="Parent Phone Number"
              className="bg-gray-300 w-full h-8 rounded-md p-2"
            />
          </div>

          {/* Address */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              placeholder="Student Address"
              className="bg-gray-300 w-full rounded-md min-h-[75px] p-2"
            />
          </div>

          {/* Avatar Upload */}
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Profile Picture</label>
            <div className="bg-gray-300 w-full p-4 rounded-lg border-2 border-dashed border-gray-400">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="avatar-upload"
                accept="image/*"
              />
              <label htmlFor="avatar-upload" className="cursor-pointer hover:opacity-90">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-600 text-white px-6 py-2 text-sm rounded-lg flex items-center gap-2">
                    Upload Photo
                  </div>
                </div>
              </label>
              {formData.avatar && (
                <p className="mt-2 text-sm text-gray-600">{formData.avatar.name}</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 px-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2"
          >
            Create Student
          </button>
          <button
            type="button"
            onClick={() => {
              hideSaveNotification();
              onClose();
            }}
            className="w-full bg-red-700 hover:opacity-90 rounded-lg text-white py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}; 
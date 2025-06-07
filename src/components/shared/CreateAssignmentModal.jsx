import React, { useState, useEffect } from 'react';
import { useSaveNotification } from '../../contexts/SaveNotificationContext';

export const CreateAssignmentModal = ({
  isOpen,
  onClose
}) => {
  const { showSaveNotification, hideSaveNotification } = useSaveNotification();
  const [formData, setFormData] = useState({
    class: '',
    course: '',
    title: '',
    grade: '',
    date: '',
    time: '',
    description: '',
    file: null 
  });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const classes = ['AC125', 'PH101', 'DS458', 'CS201', 'MATH301'];
  const courses = ['Computer', 'Physics', 'Data Science', 'Mathematics', 'Chemistry'];

  useEffect(() => {
    let timeoutId;
    let intervalId;


    if (isOpen) {
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
  }, [isOpen, showSaveNotification]);

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setHasUnsavedChanges(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      setHasUnsavedChanges(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating assignment:', formData);
    setHasUnsavedChanges(false);
    hideSaveNotification();
    onClose();
  };

  const handleClose = () => {
    setHasUnsavedChanges(false);
    hideSaveNotification();
    onClose();
  };

  return (
      <div className="max-w-full   max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-center">Create Assignment</h2>
        <button
          onClick={handleClose}
          className="absolute right-4 top-4"
        >
       
        </button>

        <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-2">
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Class</label>
            <select className='bg-gray-300 h-8 w-full rounded-md cursor-pointer px-2' name="class" value={formData.class} onChange={handleFormChange}>
              <option value="Select a Class ">Select a Class</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select className='bg-gray-300 w-full h-8 rounded-md cursor-pointer px-2' 
            name="course"
            value={formData.course}
             onChange={handleFormChange}>
              <option value="Select a Course">Select a Course</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2">
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Title</label>
              <input
                name="title"
                placeholder="Assignment Title"
                value={formData.title}
                onChange={handleFormChange}
                className='bg-gray-300 w-full h-8 rounded-md p-2 '    
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Grade</label>
              <input
                name="grade"
                placeholder="Assignment Title"
                value={formData.grade}
                onChange={handleFormChange}
                className='bg-gray-300 w-full h-8 rounded-md p-2' 
                              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4  px-2">
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Deadline</label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleFormChange}
                className='bg-gray-300  w-full h-8 rounded-md ' 
                              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Deadline</label>
              <input
                type="time"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleFormChange}
                className='bg-gray-300 w-full h-8 rounded-md ' 
                              />
            </div>
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleFormChange}
              className='bg-gray-300 w-full rounded-md min-h-[75] p-2 ' 
            />
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Assignment File</label>
            <div className="bg-gray-300 w-full p-4 rounded-lg border-2 border-dashed border-gray-400">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="file-upload" className="cursor-pointer hover:opacity-90">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-600 text-white px-6 py-2 text-sm rounded-lg flex items-center gap-2">
                    Upload File
                  </div>
                  {formData.file && (
                    <p className="mt-2 text-sm text-gray-600">{formData.file.name}</p>
                  )}
                </div>
              </label>
            </div>
          </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2 "
          >
            Submit
          </button>
        </form>
      </div>
  );
};

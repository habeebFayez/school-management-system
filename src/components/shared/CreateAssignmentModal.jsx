import React, { useState } from 'react';

export const CreateAssignmentModal = ({
  isOpen,
  onClose
}) => {
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

  const classes = ['AC125', 'PH101', 'DS458', 'CS201', 'MATH301'];
  const courses = ['Computer', 'Physics', 'Data Science', 'Mathematics', 'Chemistry'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating assignment:', formData);
    onClose();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  return (
      <div className="max-w-full   max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-center">Create Assignment</h2>
        <button
          onClick={onClose}
          className="absolute right-4 top-4"
        >
       
        </button>

        <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-2">
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Class</label>
            <select className='bg-gray-300 h-8 w-full rounded-md cursor-pointer px-2' value={formData.class} onChange={(e) => setFormData(prev => ({ ...prev, class: e.target.value }))}>
              <option value="Select a Class ">Select a Class</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select className='bg-gray-300 w-full h-8 rounded-md cursor-pointer px-2' 
            value={formData.course}
             onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}>
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
                placeholder="Assignment Title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md p-2 '    
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Grade</label>
              <input
                placeholder="Assignment Title"
                value={formData.grade}
                onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md p-2' 
                              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4  px-2">
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Deadline</label>
              <input
                type="date"
                placeholder="Date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className='bg-gray-300  w-full h-8 rounded-md ' 
                              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Deadline</label>
              <input
                type="time"
                placeholder="Time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md ' 
                              />
            </div>
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className='bg-gray-300 w-full rounded-md min-h-[75] p-2 ' 
            />
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Assignment File</label>
            <div className="bg-gray-300 w-full p-4 rounded-lg border-2 border-dashed border-gray-400">
              <input
                type="file"
                onChange={handleFileUpload}
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

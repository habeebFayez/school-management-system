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
    message: '',
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
    <dialog open={isOpen} onOpenChange={onClose}>
      <div className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-center">Create Assignment</h2>
        <button
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Class</label>
            <select value={formData.class} onChange={(e) => setFormData(prev => ({ ...prev, class: e.target.value }))}>
              <option value="">AC125</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select value={formData.course} onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}>
              <option value="">Computer</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Title</label>
              <input
                placeholder="Assignment Title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="bg-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Grade</label>
              <input
                placeholder="Assignment Title"
                value={formData.grade}
                onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                className="bg-gray-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Deadline</label>
              <input
                type="date"
                placeholder="Date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="bg-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assignment Deadline</label>
              <input
                type="time"
                placeholder="Time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="bg-gray-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="bg-gray-200 min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Assignment File</label>
            <div className="bg-gray-200 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l2-2m2 2l-2 2m-2-2l-2 2" />
                    </svg>
                    Upload File
                  </div>
                  {formData.file && (
                    <p className="mt-2 text-sm text-gray-600">{formData.file.name}</p>
                  )}
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 hover:bg-purple-800 text-white py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { courses } from '../../data/mockData';

export const CreateExamModal = ({
  isOpen,
  onClose,
  initialExam = null ,
  isPrevious
}) => {
  // Gather all unique classes from courses
  const allClasses = Array.from(new Set(courses.flatMap(c => c.classes)));
  const courseOptions = courses.map(c => ({ id: c.id, name: c.name }));

  const [formData, setFormData] = useState({
    class: Array.isArray(initialExam?.class)
      ? initialExam.class
      : initialExam?.class
        ? [initialExam.class]
        : [],
    course: initialExam?.course?.id || '',
    title: initialExam?.title || '',
    date: initialExam?.date || '',
    time: initialExam?.time || '',
    duration: initialExam?.duration || '',
    location: initialExam?.location || '',
    topics: initialExam?.topics || '',
    description: initialExam?.description || '',
  });

  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const classDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (classDropdownRef.current && !classDropdownRef.current.contains(event.target)) {
        setShowClassDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your create or update exam logic
    console.log('Exam data:', formData);
    onClose();
  };

  return (
    <div className="max-w-full max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-semibold text-center mb-4">{initialExam ? (isPrevious?'Create New Exam':'Edit Exam' ): 'Create New Exam'}</h2>
    
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-2">
          <div className="w-full px-2">
            <label className="block text-sm font-medium mb-2">Class</label>
            <div className="relative" ref={classDropdownRef}>
              <button
                type="button"
                className="bg-gray-300 h-8 w-full rounded-md cursor-pointer px-2 text-left"
                onClick={() => setShowClassDropdown((prev) => !prev)}
              >
                {formData.class.length === 0
                  ? 'Select Classes'
                  : formData.class.length === allClasses.length
                    ? 'All Classes Selected'
                    : formData.class.join(', ')}
              </button>
              {showClassDropdown && (
                <div className="absolute z-10 bg-white border rounded shadow w-full max-h-48 overflow-y-auto mt-1">
                  <div className="px-2 py-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.class.length === allClasses.length}
                        onChange={e => {
                          setFormData(prev => ({
                            ...prev,
                            class: e.target.checked ? allClasses : []
                          }));
                        }}
                      />
                      <span className="text-sm">All Classes</span>
                    </label>
                  </div>
                  <hr />
                  {allClasses.map(cls => (
                    <div key={cls} className="px-2 py-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.class.includes(cls)}
                          onChange={e => {
                            setFormData(prev => {
                              const selected = prev.class.includes(cls)
                                ? prev.class.filter(c => c !== cls)
                                : [...prev.class, cls];
                              return {
                                ...prev,
                                class: selected
                              };
                            });
                          }}
                        />
                        <span className="text-sm">{cls}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select className='bg-gray-300 w-full h-8 rounded-md cursor-pointer px-2' 
              value={formData.course}
              onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}>
              <option value="">Select a Course</option>
              {courseOptions.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2">
            <div>
              <label className="block text-sm font-medium mb-2">Exam Title</label>
              <input
                placeholder="Exam Title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md p-2 '
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Duration</label>
              <input
                placeholder="e.g. 90 minutes"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md p-2'
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                placeholder="Date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md'
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Time</label>
              <input
                type="time"
                placeholder="Time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className='bg-gray-300 w-full h-8 rounded-md'
              />
            </div>
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className='bg-gray-300 w-full h-8 rounded-md p-2'
            />
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Topics</label>
            <input
              placeholder="Topics"
              value={formData.topics}
              onChange={(e) => setFormData(prev => ({ ...prev, topics: e.target.value }))}
              className='bg-gray-300 w-full h-8 rounded-md p-2'
            />
          </div>
          <div className='w-full px-2'>
            <label className="block text-sm font-medium mb-2">Description (optional)</label>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className='bg-gray-300 w-full rounded-md min-h-[75px] p-2'
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2 "
        >
          {initialExam ? 'Update Exam' : 'Create Exam'}
        </button>
      </form>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { courses } from '../../data/mockData';
import OnlineExamBuilder from './OnlineExamBuilder';
import { useSaveNotification } from '../../contexts/SaveNotificationContext';

export const CreateExamModal = ({
  isOpen,
  onClose,
  initialExam = null 
}) => {
  const { showSaveNotification, hideSaveNotification } = useSaveNotification();
  // Add state for step management
  const [step, setStep] = useState('overview');
  const [examPayload, setExamPayload] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

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
    isOnline: initialExam?.isOnline || false,
    Total_Points: initialExam?.Total_Points || '',
    isRandomQuestions: initialExam?.isRandomQuestions || false,
    number_of_questions: initialExam?.number_of_questions || '',
    PassingGrade: initialExam?.PassingGrade || '',
  });

  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const classDropdownRef = useRef(null);
  
  useEffect(() => {
    let timeoutId;
    let intervalId;


    if (isOpen && hasUnsavedChanges) {
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
  }, [isOpen,hasUnsavedChanges, showSaveNotification]);
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

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setHasUnsavedChanges(true);
  };

  const handleClassChange = (cls, checked) => {
    setFormData(prev => {
      const selected = checked
        ? [...prev.class, cls]
        : prev.class.filter(c => c !== cls);
      return {
        ...prev,
        class: selected
      };
    });
    setHasUnsavedChanges(true);
  };

  const handleAllClassesChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      class: checked ? allClasses : []
    }));
    setHasUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your create or update exam logic
    console.log('Exam data:', formData);
    setHasUnsavedChanges(false);
    hideSaveNotification();
    onClose();
  };

  const handleContinueToQuestions = () => {
    // Create the exam payload
    const payload = {
      ...formData,
      course: courses.find(c => c.id === Number(formData.course)),
      questions: []
    };
    setExamPayload(payload);
    setStep('questions');
    setHasUnsavedChanges(false);
  };

  const handleClose = () => {
    setHasUnsavedChanges(false);
    hideSaveNotification();
    onClose();
  };

  return (
    <div className="max-w-full max-h-[90vh] overflow-y-auto">
      {step === 'overview' ? (
        <>
          <h2 className="text-xl font-semibold text-center mb-4">{initialExam ? 'Edit Exam' : 'Create Exam'}</h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-2">
            <label htmlFor='ExamType' className="text-sm font-medium text-gray-900">Exam Type</label>
            <div id='ExamType' className="grid grid-cols-2 px-2">
            <div  className="flex items-center gap-2">
                   <input
                     type='radio'
                     id='isOnline'
                     name='isOnline'
                     checked={formData.isOnline}
                     onChange={handleFormChange}
                     className='form-checkbox h-4 w-4 text-blue-600 rounded'
                   />
                   <label htmlFor='isOnline' className="text-sm font-medium text-gray-900">Is Online Exam</label>
                 </div>
                 <div className="flex items-center gap-2">
                   <input
                     type='radio'
                     id='FaceToFace'
                     name='isOnline'
                     checked={!formData.isOnline}
                     onChange={handleFormChange}
                     className='form-checkbox h-4 w-4 text-blue-600 rounded'
                   />
                   <label htmlFor='FaceToFace' className="text-sm font-medium text-gray-900">Face to face Exam</label>
                 </div>
               
                 
              </div>
              {/* Class Multi-Select Dropdown */}
              <div className='w-full px-2'>
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
                            onChange={e => handleAllClassesChange(e.target.checked)}
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
                              onChange={e => handleClassChange(cls, e.target.checked)}
                            />
                            <span className="text-sm">{cls}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {formData.class.length === allClasses.length
                    ? 'All Classes Selected'
                    : formData.class.join(', ')}
                </div>
              </div>

              {/* Course Select */}
              <div className='w-full px-2'>
                <label className="block text-sm font-medium mb-2">Course</label>
                <select className='bg-gray-300 w-full h-8 rounded-md cursor-pointer px-2' 
                  name="course"
                  value={formData.course}
                  onChange={handleFormChange}>
                  <option value="">Select a Course</option>
                  {courseOptions.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                  ))}
                </select>
              </div>

              {/* Exam Title and Duration */}
              <div className="grid grid-cols-2 gap-4 px-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Exam Title</label>
                  <input
                    name="title"
                    placeholder="Exam Title"
                    value={formData.title}
                    onChange={handleFormChange}
                    className='bg-gray-300 w-full h-8 rounded-md p-2 '
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (minutes)</label>
                  <input
                    type='number'
                    name="duration"
                    placeholder="e.g. 90"
                    value={formData.duration}
                    onChange={handleFormChange}
                    className='bg-gray-300 w-full h-8 rounded-md p-2 '
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4 px-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleFormChange}
                    className='bg-gray-300 w-full h-8 rounded-md'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleFormChange}
                    className='bg-gray-300 w-full h-8 rounded-md'
                  />
                </div>
              </div>

              {/* Location and Topics */}
              <div className="grid grid-cols-2 gap-4 px-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    name="location"
                    placeholder="e.g., Room 101 or Online Link"
                    value={formData.location}
                    onChange={handleFormChange}
                    className='bg-gray-300 w-full h-8 rounded-md p-2'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Topics</label>
                  <input
                    name="topics"
                    placeholder="e.g., Algebra, Geometry"
                    value={formData.topics}
                    onChange={handleFormChange}
                    className='bg-gray-300 w-full h-8 rounded-md p-2'
                  />
                </div>
              </div>

              {/* Description */}
              <div className='w-full px-2'>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  placeholder="Detailed description of the exam"
                  value={formData.description}
                  onChange={handleFormChange}
                  className='bg-gray-300 w-full rounded-md min-h-[75px] p-2'
                />
              </div>

              {/* Online Exam Specific Fields */}
              {formData.isOnline && (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4 px-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">Total Points</label>
                      <input
                        type="number"
                        name="Total_Points"
                        placeholder="e.g. 100"
                        value={formData.Total_Points}
                        onChange={handleFormChange}
                        className='bg-gray-300 w-full h-8 rounded-md p-2'
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Questions</label>
                      <input
                        type="number"
                        name="number_of_questions"
                        placeholder="e.g. 20"
                        value={formData.number_of_questions}
                        onChange={handleFormChange}
                        className='bg-gray-300 w-full h-8 rounded-md p-2'
                      />
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <label className="block text-sm font-medium mb-2">Passing Grade (%)</label>
                    <input
                      type="number"
                      name="PassingGrade"
                      placeholder="e.g. 60"
                      value={formData.PassingGrade}
                      onChange={handleFormChange}
                      className='bg-gray-300 w-full h-8 rounded-md p-2'
                    />
                  </div>
                  <div className="w-full px-2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isRandomQuestions"
                      checked={formData.isRandomQuestions}
                      onChange={handleFormChange}
                      className='form-checkbox h-4 w-4 text-blue-600 rounded'
                    />
                    <label htmlFor="isRandomQuestions" className="text-sm font-medium text-gray-900">Randomize Questions</label>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4 px-2">
              {initialExam ? (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2"
                >
                  Update Exam
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleContinueToQuestions}
                  className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2"
                >
                  Continue to Questions
                </button>
              )}

              <button
                type="button"
                onClick={handleClose}
                className="w-full bg-red-700 hover:opacity-90 rounded-lg text-white py-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <OnlineExamBuilder examPayload={examPayload} onClose={onClose} />
      )}
    </div>
  );
};

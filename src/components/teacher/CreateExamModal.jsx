import React, { useState, useRef, useEffect } from 'react';
import { courses } from '../../data/mockData';
import OnlineExamBuilder from './OnlineExamBuilder';

export const CreateExamModal = ({
  isOpen,
  onClose,
  initialExam = null 
}) => {
  // Add state for step management
  const [step, setStep] = useState('overview');
  const [examPayload, setExamPayload] = useState(null);

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

  const handleContinueToQuestions = () => {
    // Create the exam payload
    const payload = {
      ...formData,
      course: courses.find(c => c.id === Number(formData.course)),
      questions: []
    };
    setExamPayload(payload);
    setStep('questions');
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
                     checked={formData.isOnline}
                     onChange={(e) => setFormData(prev => ({ ...prev, isOnline: e.target.checked }))}
                     className='form-checkbox h-4 w-4 text-blue-600 rounded'
                   />
                   <label htmlFor='isOnline' className="text-sm font-medium text-gray-900">Is Online Exam</label>
                 </div>
                 <div className="flex items-center gap-2">
                   <input
                     type='radio'
                     id='FaceToFace'
                     checked={!formData.isOnline}
                     onChange={(e) => setFormData(prev => ({ ...prev, isOnline: false }))}
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
                  value={formData.course}
                  onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}>
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
                    placeholder="Exam Title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className='bg-gray-300 w-full h-8 rounded-md p-2 '
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (minutes)</label>
                  <input
                    type='number'
                    placeholder="e.g. 90"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: Number(e.target.value) }))}
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

              {/* Location and Topics */}
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

              {/* Online, Total Points, Random Questions, Passing Grade, Number of Questions */}
             
              <div className="grid grid-cols-3 gap-4 px-2">
                 
                 <div>
                   <label className="block text-sm font-medium mb-2">Total Points</label>
                   <input
                     type='number'
                     placeholder="e.g. 100"
                     value={formData.Total_Points}
                     onWheel={(e) => e.target.blur()} 
                     onChange={(e) => setFormData(prev => ({ ...prev, Total_Points: Number(e.target.value) }))}
                     className='bg-gray-300 w-full h-8 rounded-md p-2'
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2">Number of Questions</label>
                   <input
                     type='number'
                     placeholder="e.g. 20"
                     onWheel={(e) => e.target.blur()} 
                     value={formData.number_of_questions}
                     onChange={(e) => setFormData(prev => ({ ...prev, number_of_questions: Number(e.target.value>100?100:e.target.value) }))}
                     className='bg-gray-300 w-full h-8 rounded-md p-2'
                   />
                 </div>
                 <div className='w-full px-2'>
                 <label className="block text-sm font-medium mb-2">Passing Grade (%)</label>
                 <input
                   type='number'
                   placeholder="e.g. 70"
                     onWheel={(e) => e.target.blur()} 
                     value={formData.PassingGrade}
                   onChange={(e) => setFormData(prev => ({ ...prev, PassingGrade: Number(e.target.value) }))}
                   className='bg-gray-300 w-full h-8 rounded-md p-2'
                 />
              </div>

              </div>
              
              {/* Description */}
              <div className='w-full px-2'>
                 <label className="block text-sm font-medium mb-2">Exam Instructions (optional)</label>
                 <textarea
                   placeholder="Exam Instructions"
                   value={formData.description}
                   onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                   className='bg-gray-300 w-full rounded-md min-h-[75px] p-2'
                 />
               </div>
               <div  className="flex items-center gap-2">
                   <input
                     type='checkbox'
                     id='isRandomQuestions'
                     checked={formData.isRandomQuestions}
                     onChange={(e) => setFormData(prev => ({ ...prev, isRandomQuestions: e.target.checked }))}
                     className='form-checkbox h-4 w-4 text-blue-600 rounded'
                   />
                   <label htmlFor='isRandomQuestions' className="text-sm font-semibold text-red-500">Randomize Questions Order</label>
                 </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-2">
            {formData.isOnline ? (
            <button
              type="button"
              onClick={handleContinueToQuestions}
              className="w-full bg-blue-600 hover:opacity-90 rounded-lg text-white py-2"
            >
              Continue to Questions
            </button>
            ) : (
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2"
            >
              {initialExam ? 'Update Exam' : 'Create Exam'}
            </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-red-500 hover:opacity-90 rounded-lg text-white py-2"
            >
              Close
            </button>
        </div>

          </form>
        </>
      ) : (
        <OnlineExamBuilder
          open={true}
          onOpenChange={onClose}
          onBack={() => setStep('overview')}
          examData={examPayload}
        />
      )}
    </div>
  );
};

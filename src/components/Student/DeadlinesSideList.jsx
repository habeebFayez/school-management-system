import React, { useMemo } from 'react';
import { Bell } from 'lucide-react';
import { assignments } from '../../data/assignmentsData';

import {  exams, courses } from '../../data/mockData';
import { format, isToday, startOfToday } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const DeadlinesSideList = () => {
  const navigate = useNavigate();

  const deadlines = useMemo(() => {
    // Combine assignments and exams into a single array
    const allDeadlines = [
      // Format assignments
      ...assignments.map(assignment => {
        const course = courses.find(c => c.name === assignment.courseName);
        return {
          id: `assignment-${assignment.id}`,
          title: assignment.title,
          subject: course?.name || 'Unknown Course',
          deadline: `${format(new Date(assignment.deadline), 'HH:mm')} of ${format(new Date(assignment.deadline), 'dd/MM/yyyy')}`,
          details: assignment.description,
          mode: 'Assignment',
          date: new Date(assignment.deadline),
          type: 'assignment'
        };
      }),
      // Format exams
      ...exams.map(exam => ({
        id: `exam-${exam.id}`,
        title: exam.title,
        subject: exam.course?.name || 'Unknown Course',
        deadline: `${exam.time} of ${format(new Date(exam.date), 'dd/MM/yyyy')}`,
        details: exam.description,
        mode: exam.isOnline ? 'Online' : 'In Class',
        date: new Date(`${exam.date}T${exam.time}`),
        type: 'exam'
      }))
    ];

    // Filter out past deadlines and sort by date
    const now = new Date();
    const todayStart = startOfToday();
    return allDeadlines
      .filter(deadline => deadline.date >= todayStart)
      .sort((a, b) => a.date - b.date)
      .slice(0, 5); // Show only the 5 closest deadlines
  }, []);

  const handleViewClick = (deadline) => {
    // Navigate to the appropriate page based on the type
    const path = deadline.type === 'assignment' ? '/student/assignments' : '/student/exams';
    // Add the title as a search parameter
    navigate(`${path}?search=${encodeURIComponent(deadline.title)}`);
  };

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>
      <div className="space-y-2">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className={`p-2 rounded-lg border-l-4 ${isToday(deadline.date) ? 'border-red-500 bg-pink-100' : 'border-red-500 bg-gray-100'} hover:bg-gray-50`}
          >
            <div className="flex flex-col">
              <h4 className={`font-medium ${isToday(deadline.date) ? 'text-red-600' : 'text-gray-800'} text-sm`}>{deadline.title}</h4>
              <p className="text-xs text-gray-700">{deadline.deadline}</p>
              <p className="text-sm font-semibold text-gray-900 my-1">{deadline.subject}</p>
              <p className="text-xs text-gray-600">{deadline.details}</p>
              <p className="text-xs text-green-600">{deadline.mode}</p>
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => handleViewClick(deadline)}
                className="px-4 py-2 bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white text-xs rounded-md hover:opacity-90"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeadlinesSideList;
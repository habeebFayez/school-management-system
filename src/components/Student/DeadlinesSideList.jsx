import React from 'react';
import { Bell } from 'lucide-react';

const DeadlinesSideList = () => {
  const deadlines = [
    {
      id: 1,
      title: 'Research Paper Submission',
      subject: 'History',
      deadline: '23:59 of 20/05/2025',
      details: 'Submit via online portal',
      mode: 'Online',
    },
    {
      id: 2,
      title: 'Problem Set 3 Due',
      subject: 'Physics',
      deadline: '10:00 of 21/05/2025',
      details: 'In-class submission',
      mode: 'in Class',
    },
    {
      id: 3,
      title: 'Chapter 5 Quiz',
      subject: 'Chemistry',
      deadline: '14:00 of 22/05/2025',
      details: 'Quiz covers reactions and stoichiometry',
      mode: 'Online',
    },
    {
      id: 4,
      title: 'Presentation Slides Finalized',
      subject: 'Computer Science',
      deadline: '18:00 of 23/05/2025',
      details: 'Upload to shared drive',
      mode: 'Online',
    },
     {
      id: 5,
      title: 'Lab Report 2',
      subject: 'Biology',
      deadline: '17:00 of 24/05/2025',
      details: 'Submit hard copy to TA',
      mode: 'in Class',
    }
  ];

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
            className="p-2 rounded-lg border-l-4 border-red-500 bg-pink-100"
          >
            <div className="flex flex-col">
              <h4 className="font-medium text-red-600 text-sm">{deadline.title}</h4>
              <p className="text-xs text-gray-700 ">{deadline.deadline}</p>
              <p className="text-sm font-semibold text-gray-900 my-1">{deadline.subject}</p>
              <p className="text-xs text-gray-600 ">{deadline.details}</p>
              <p className="text-xs text-green-600 ">{deadline.mode}</p>
            </div>
            <div className="flex justify-end ">
              <button className="px-4 py-2 bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white text-xs rounded-md hover:opacity-90">
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
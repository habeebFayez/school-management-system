import React from 'react';

const FastActions = ({colorButton}) => {
  const actions = [
    { label: 'Add new student', color: colorButton },
    { label: 'New Subject', color: colorButton },
    { label: 'New Announcement', color: colorButton },
    { label: 'Add Exam', color: colorButton },
    { label: 'New Assignment', color: colorButton },
    { label: 'Upload Grades', color: colorButton },
    { label: 'New Class', color: colorButton },
  ];

  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Fast Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.slice(0, 6).map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white text-xs px-3 py-2 rounded-lg hover:opacity-90 transition-opacity`}
          >
            {action.label}
          </button>
        ))}
      </div>
      <button className={`w-full ${colorButton} text-white text-xs px-3 py-2 rounded-lg mt-3 hover:opacity-90 transition-opacity`}>
        {actions[6].label}
      </button>
    </div>
  );
};

export default FastActions;
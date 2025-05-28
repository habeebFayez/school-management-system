import React from 'react';

export const AssignmentCard = ({
  assignment,
  onCheckDetails,
  onCheckSubmissions,
  onEdit
}) => {
  return (
    <div className="card w-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="card-content p-4">
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-800">
            Assignment ID : {assignment.assignmentId}
          </div>
          <div className="text-sm text-gray-600">
            Course Name : {assignment.courseName}
          </div>
          <div className="text-sm text-gray-600">
            Assignments Title : {assignment.title}
          </div>
          <div className="text-sm text-gray-600">
            Deadline: {assignment.deadline}  Time: {assignment.time}
          </div>
          
          <div className="space-y-2">
            <button 
              onClick={() => onCheckDetails(assignment)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Check details
            </button>
            <button 
              onClick={() => onCheckSubmissions(assignment)}
              className="w-full bg-purple-900 hover:bg-purple-800 text-white"
            >
              Check Submissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
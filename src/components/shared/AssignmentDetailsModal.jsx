import React from 'react';

export const AssignmentDetailsModal = ({ isOpen, onClose, assignment }) => {
  if (!isOpen || !assignment) return null;

  return (
    <dialog open={isOpen}>
      <div className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-center">Assignment Details</h2>
          <button onClick={onClose} className="absolute right-4 top-4">Close</button>
        </div>
        <div className="mt-4 space-y-2">
          <div><span className="font-medium">Assignment ID:</span> {assignment.assignmentId}</div>
          <div><span className="font-medium">Course Name:</span> {assignment.courseName}</div>
          <div><span className="font-medium">Title:</span> {assignment.title}</div>
          <div><span className="font-medium">Deadline:</span> {assignment.deadline} <span className="font-medium">Time:</span> {assignment.time}</div>
          <div><span className="font-medium">Grade:</span> {assignment.grade}</div>
          <div><span className="font-medium">Message:</span> {assignment.message}</div>
          {/* Add more fields as needed */}
        </div>
      </div>
    </dialog>
  );
};
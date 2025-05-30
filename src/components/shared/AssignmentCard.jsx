import React from 'react';
import { useModal } from '../../contexts/ModalProvider';
import { SubmissionsModal } from '../../components/shared/SubmissionsModal';
import { AssignmentDetailsModal } from '../../components/shared/AssignmentDetailsModal';
import { submissions } from '../../data/assignmentsData';

export const AssignmentCard = ({
  assignment,
  onCheckDetails,
  onCheckSubmissions,
  onEdit
}) => {
  const { showModal ,hideModal} = useModal();

  return (
    <div className="card w-full rounded-lg min-h-64 bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="card-content p-4">
        <div className="space-y-4">
          <div className="text-md font-medium text-gray-800">
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
          <div className="text-sm text-gray-600">
            Grade: {assignment.grade}
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={() => showModal(
                <AssignmentDetailsModal
                isOpen={true}
                onClose={() => hideModal()}
                assignment={assignment}
              />
              )}
              className="w-full text-sm h-10 rounded-lg bg-blue-600 hover:opacity-90 text-white"
            >
             Edit
            </button>
            <button 
              onClick={() => showModal( 
              <SubmissionsModal
                isOpen={true}
                onClose={() => hideModal()}
                submissions={submissions}
                assignment={assignment}
              />)}
              className="w-full h-10 text-sm rounded-lg bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 text-white"
            >
              Check Submissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
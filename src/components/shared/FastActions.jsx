import React, { useState } from 'react';
import { AbsenceJustificationModal } from '../Student/AbsenceJustificationModal';
import { SendMessageModal } from './SendMessageModal';
import { SendPetitionModal } from '../Student/SendPetitionModal';
import { useModal } from '../../contexts/ModalProvider';

const FastActions = ({colorButton,user}) => {
  const actions = 
    user.role==='teacher'?[
    { label: 'Add new student', color: colorButton, action: 'add_student' },
    { label: 'New Subject', color: colorButton, action: 'new_subject' },
    { label: 'New Announcement', color: colorButton, action: 'new_announcement' },
    { label: 'Add Exam', color: colorButton, action: 'add_exam' },
    { label: 'New Assignment', color: colorButton, action: 'new_assignment' },
    { label: 'Upload Grades', color: colorButton, action: 'upload_grades' },
    { label: 'New Class', color: colorButton, action: 'new_class' },
    ] 
    :
    [{ label: 'Absence Justification', color: colorButton, action: 'absence_justification' },
    { label: 'Send Petition', color: colorButton, action: 'send_petition' },
    { label: 'Send Message', color: colorButton, action: 'send_message' },
  ];

  const { showModal, hideModal } = useModal();

  const handleActionClick = (actionType) => {
    switch (actionType) {
      case 'absence_justification':
        showModal(() => <AbsenceJustificationModal isOpen={true} onClose={hideModal} />);
        break;
      case 'send_message':
        showModal(() => <SendMessageModal onClose={hideModal} />);
        break;
      case 'send_petition':
        showModal(() => <SendPetitionModal isOpen={true} onClose={hideModal} />);
        break;
      // Add cases for other actions later
      default:
        console.log(`Action clicked: ${actionType}`);
        break;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Fast Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.slice(0, user.role === 'teacher' ? 6 : actions.length).map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white text-xs px-3 py-2 rounded-lg hover:opacity-90 transition-opacity`}
            onClick={() => handleActionClick(action.action)}
          >
            {action.label}
          </button>
        ))}
      </div>
     { user.role==='teacher'&&
      <button
        className={`w-full ${colorButton} text-white text-xs px-3 py-2 rounded-lg mt-3 hover:opacity-90 transition-opacity`}
        onClick={() => handleActionClick(actions[6].action)}
      >
        {actions[6].label}
      </button>}

      {/* Modals are now managed by the ModalProvider */}
    </div>
  );
};

export default FastActions;
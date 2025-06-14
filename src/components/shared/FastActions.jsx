import React, { useState, useEffect } from 'react';
import { AbsenceJustificationModal } from '../Student/AbsenceJustificationModal';
import { SendMessageModal } from './SendMessageModal';
import { SendPetitionModal } from '../Student/SendPetitionModal';
import { useModal } from '../../contexts/ModalProvider';
import { CreateStudentModal } from '../teacher/CreateStudentModal';
import { CreateExamModal } from '../teacher/CreateExamModal';
import { CreateAssignmentModal } from './CreateAssignmentModal';
import { Settings, X, Check } from 'lucide-react';

const FastActions = ({colorButton, user}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedActions, setSelectedActions] = useState([]);
  const { showModal, hideModal } = useModal();

  const availableActions = {
    teacher: [
      { id: 'add_student', label: 'Add new student', color: colorButton, action: 'add_student' },
      { id: 'new_subject', label: 'New Subject', color: colorButton, action: 'new_subject' },
      { id: 'new_announcement', label: 'New Announcement', color: colorButton, action: 'new_announcement' },
      { id: 'add_exam', label: 'Add Exam', color: colorButton, action: 'add_exam' },
      { id: 'new_assignment', label: 'New Assignment', color: colorButton, action: 'new_assignment' },
      { id: 'upload_grades', label: 'Upload Grades', color: colorButton, action: 'upload_grades' },
      { id: 'new_class', label: 'New Class', color: colorButton, action: 'new_class' },
    ],
    student: [
      { id: 'absence_justification', label: 'Absence Justification', color: colorButton, action: 'absence_justification' },
      { id: 'send_petition', label: 'Send Petition', color: colorButton, action: 'send_petition' },
      { id: 'send_message', label: 'Send Message', color: colorButton, action: 'send_message' },
    ]
  };

  useEffect(() => {
    // Load saved actions from localStorage
    const savedActions = localStorage.getItem(`fastActions_${user.role}`);
    if (savedActions) {
      setSelectedActions(JSON.parse(savedActions));
    } else {
      // Set default actions (first 6 for teachers, all for students)
      const defaultActions = user.role === 'teacher' 
        ? availableActions.teacher.slice(0, 6)
        : availableActions.student;
      setSelectedActions(defaultActions);
      localStorage.setItem(`fastActions_${user.role}`, JSON.stringify(defaultActions));
    }
  }, [user.role]);

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
      case 'add_student':
        showModal(() => <CreateStudentModal isOpen={true} onClose={hideModal} onSubmit={(data) => {
          console.log('New student data:', data);
          hideModal();
        }} />);
        break;
      case 'add_exam':
        showModal(() => <CreateExamModal isOpen={true} onClose={hideModal} />);
        break;
      case 'new_assignment':
        showModal(() => <CreateAssignmentModal isOpen={true} onClose={hideModal} />);
        break;
      case 'new_subject':
        // TODO: Implement new subject modal
        console.log('New subject action clicked');
        break;
      case 'new_announcement':
        // TODO: Implement new announcement modal
        console.log('New announcement action clicked');
        break;
      case 'upload_grades':
        // TODO: Implement upload grades modal
        console.log('Upload grades action clicked');
        break;
      case 'new_class':
        // TODO: Implement new class modal
        console.log('New class action clicked');
        break;
      default:
        console.log(`Action clicked: ${actionType}`);
        break;
    }
  };

  const toggleAction = (action) => {
    const isSelected = selectedActions.some(a => a.id === action.id);
    let newSelectedActions;
    
    if (isSelected) {
      newSelectedActions = selectedActions.filter(a => a.id !== action.id);
    } else {
      newSelectedActions = [...selectedActions, action];
    }
    
    setSelectedActions(newSelectedActions);
    localStorage.setItem(`fastActions_${user.role}`, JSON.stringify(newSelectedActions));
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Fast Actions</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 hover:bg-gray-100 rounded-full"
          title={isEditing ? "Save changes" : "Edit quick actions"}
        >
          {isEditing ? <Check size={20} className="text-green-500" /> : <Settings size={20} className="text-gray-500" />}
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-2">
          {availableActions[user.role].map((action) => (
            <div key={action.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <span>{action.label}</span>
              <button
                onClick={() => toggleAction(action)}
                className={`p-1 rounded ${
                  selectedActions.some(a => a.id === action.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                <Check size={16} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {selectedActions.map((action) => (
            <button
              key={action.id}
              className={`${action.color} text-white text-xs px-3 py-2 rounded-lg hover:opacity-90 transition-opacity`}
              onClick={() => handleActionClick(action.action)}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FastActions;
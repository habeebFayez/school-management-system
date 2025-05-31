import React from 'react';

export const ExamCard = ({ exam, isPrevious,onCheckDetails, onEdit }) => {
  return (
    <div className="card w-full rounded-lg min-h-64 bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="card-content p-4">
        <div className="space-y-4">
          <div className="text-md font-medium text-gray-800">
            Exam Title: {exam.title}
          </div>
          <div className="text-sm text-gray-600">
            Course: {exam.course?.name || 'N/A'}
          </div>
          <div className="text-sm text-gray-600">
            Classes: {(exam.course?.classes || []).join(', ') || 'N/A'}
          </div>
          <div className="text-sm text-gray-600">
            Date: {exam.date}  Time: {exam.time}
          </div>
          <div className="text-sm text-gray-600">
            Duration: {exam.duration}
          </div>
          <div className="text-sm text-gray-600">
            Location: {exam.location}
          </div>
          <div className="text-sm text-gray-600">
            Topics: {exam.topics}
          </div>

          {(onCheckDetails || onEdit) && (
            <div className="space-y-3">
             
              {onEdit &&(
                <button
                className="w-full text-sm h-10 rounded-lg bg-blue-600 hover:opacity-90 text-white"
                  onClick={() => onEdit(exam)}
                >
                 {isPrevious?' Renew Exam':'Edit'}
                </button>
              )}
               {onCheckDetails && isPrevious && (
                <button
                  onClick={() => onCheckDetails(exam)}
                  className="w-full text-sm h-10 rounded-lg bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 text-white"
                >
               Check Grades 

                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
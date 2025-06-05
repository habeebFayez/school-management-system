import React from 'react';

export const ExamCard = ({ exam, isPrevious,onCheckDetails, onEdit,user }) => {
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
            Location:   
            { exam.isOnline ?
            <span className="bg-green-100 text-green-700 ml-2 px-2 py-1 rounded-full text-sm font-medium">
             {exam.location}
            </span>
            :
            <span className="  ml-2 px-2 py-1 text-black  rounded-full text-sm font-medium">
             {exam.location}
            </span>
            }
          </div>
          <div className="text-sm text-gray-600">
            Topics: {exam.topics}
          </div>
          <div className="text-sm text-gray-600">
            Number of Questions: {exam.number_of_questions}
          </div>
          <div className="text-sm text-gray-600">
           Total Points: {exam.Total_Points}
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
              {onCheckDetails && !isPrevious && user.role==='student' &&(
                <button
                  onClick={() => onCheckDetails(exam)}
                  className="w-full text-sm h-10 rounded-lg bg-blue-500 hover:opacity-90 text-white"
                >
                View Exam Details 
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
import React from 'react';
import { X } from 'lucide-react';
// Assuming a CircularProgress component exists or needs to be created
// import CircularProgress from './CircularProgress'; 

const ExamResultsModalContent = ({ exam, onClose }) => {
  // Calculate percentage score (assuming exam object has score and totalPoints)
  const scorePercentage = 49;
  const correctPercentage = scorePercentage; // Assuming score is based on correct answers
  const incorrectPercentage = 100 - scorePercentage;

  return (
    <div className="bg-white rounded-lg p-6 relative">

      <div className="flex items-center mb-6">
        {/* Circular Progress Bar Placeholder */}
        <div className="w-40 h-40 mr-6 flex items-center justify-center">
          {/* Replace with actual CircularProgress component */}
          <div className="relative w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50" cy="50" r="45"
                fill="none" strokeWidth="10"
                className="stroke-gray-200"
              />
              {/* Progress circle */}
              <circle
                cx="50" cy="50" r="45"
                fill="none" strokeWidth="10"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - scorePercentage / 100)}
                strokeLinecap="round"
                className={`${scorePercentage>=50?'stroke-green-500 ':'stroke-red-500 '}transform -rotate-90 origin-center`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`${scorePercentage>=50?'text-green-600 ':'text-red-600 '}text-3xl font-bold `}>
              {Math.round(scorePercentage)}%</span>
            </div>
          </div>
        </div>

        {/* Exam Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{exam?.course?.code || 'N/A'}</h3>
          <p className="text-lg text-gray-700">{exam?.course?.name || 'N/A'}</p>
          <p className="text-gray-600 mt-2">Points:{exam?.Total_Points }</p>
          <p className="text-gray-600">Duration: {exam?.duration || 'N/A'} min</p>
        </div>
      </div>

      {/* Answers Section */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Answers</h4>
        
        {/* Correct Answers */}
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-700 mr-4 w-20">Correct</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${correctPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-700 ml-2 w-10 text-right">{Math.round(correctPercentage)}%</span>
        </div>

        {/* Incorrect Answers */}
        <div className="flex items-center">
          <span className="text-sm text-gray-700 mr-4 w-20">Incorrect</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full"
              style={{ width: `${incorrectPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-700 ml-2 w-10 text-right">{Math.round(incorrectPercentage)}%</span>
        </div>

      </div>
    </div>
  );
};

export default ExamResultsModalContent; 
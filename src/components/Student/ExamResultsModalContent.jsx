import React, { useState } from 'react';
import StudentExamTaker from './StudentExamTaker';
import ExamAnswersReview from './ExamAnswersReview';
import { ArrowLeft } from 'lucide-react';
// Assuming a CircularProgress component exists or needs to be created
// import CircularProgress from './CircularProgress'; 

const ExamResultsModalContent = ({ exam,user, onClose,hight='h-40' , width='w-40 ',textSize='text-3xl',isblue=false }) => {
  const [showExam, setShowExam] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [policiesAccepted, setPoliciesAccepted] = useState(false);
  const [studentAnswers, setStudentAnswers] = useState({});

  // Calculate percentage score (assuming exam object has score and totalPoints)
  const scorePercentage = (exam.grades.filter(grade=>grade.studentId===user.id)[0].percentage);
  const studentScore =exam.grades.filter(grade=>grade.studentId===user.id)[0];
  const correctPercentage = scorePercentage; // Assuming score is based on correct answers
  const incorrectPercentage = 100 - scorePercentage;

  // Check if exam date is today
  const isExamToday = () => {
    const today = new Date();
    const examDate = new Date(exam.date);
    return today.toDateString() === examDate.toDateString();
  };

  const handleSubmitExam = (answers) => {
    setStudentAnswers(answers);
    // Here you would typically send the answers to your backend
    onClose();
  };

  if (showExam) {
    return <StudentExamTaker exam={exam} onClose={() => setShowExam(false)} onSubmit={handleSubmitExam} />;
  }

  if (showReview) {
    return <ExamAnswersReview exam={exam} studentAnswers={studentAnswers} onClose={() => setShowReview(false)} />;
  }

  return (
    
    isblue ? 
    <div className="bg-white overflow-y-auto rounded-lg p-6 relative max-h-[90vh] max-w-2xl mx-auto">

      <div className="flex items-center mb-6">
        {/* Circular Progress Bar Placeholder */}
        <div className={`${hight} ${width}  mr-6 flex items-center justify-center`}>
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
                strokeDashoffset={2 * Math.PI * 45 * (1 - 100 / 100)}
                strokeLinecap="round"
                className={`stroke-blue-600 transform -rotate-90 origin-center`}
              />
            </svg>
           
              <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-blue-600  ${textSize} font-bold `}>
              {exam.duration}min</span>
              <span className={`text-gray-600  text-xs font-bold `}>
              Duration
             </span>
            </div>
            
            
          </div>
        </div>

        {/* Exam Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{exam?.course?.code || 'N/A'}</h3>
          <p className="text-lg text-gray-700">{exam?.course?.name || 'N/A'}</p>
          <p className="text-gray-600 mt-2"><span className="font-bold">Exam Points:</span> {exam?.Total_Points}</p>
          <p className="text-gray-600"><span className="font-bold">Duration:</span> {exam?.duration || 'N/A'} min</p>
          <p className="text-gray-600"><span className="font-bold">Number of Questions:</span> {exam?.questions.length || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-bold">Topics:</span> {exam?.topics || 'N/A'}</p>
          <p className="text-green-700"><span className="font-bold ">Location:</span> {exam?.location || 'N/A'}</p>
          <p className="text-gray-600 "><span className="font-bold">Date: </span> {exam?.date || 'N/A'}</p>
          <p className="text-gray-600 "><span className="font-bold"> Time: </span>{exam?.time || 'N/A'}</p>
        </div>
      </div>

      {/* Answers Section */}
    
       <div>
       <p className="text-gray-600 break-words">
          <span className="font-bold">Description:</span> {exam?.description || 'N/A'}
        </p>

      </div>
      
      {isExamToday() && (
        <div className="mt-10">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="policies"
              checked={policiesAccepted}
              onChange={(e) => setPoliciesAccepted(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="policies" className="ml-2 text-sm text-gray-600">
              I have read and agree to the exam policies
            </label>
          </div>
          <button
            onClick={() => setShowExam(true)}
            disabled={!policiesAccepted}
            className={`p-2 rounded-lg font-medium w-full ${
              policiesAccepted 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Start Exam
          </button>
        </div>
      )}
    </div>
    :
    <div className="bg-white rounded-lg p-6 relative max-w-2xl mx-auto">

      <div className="flex items-center mb-6">
        {/* Circular Progress Bar Placeholder */}
        <div className={`${hight} ${width}  mr-6 flex items-center justify-center`}>
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
            {studentScore.attended?
              <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`${scorePercentage>=50?'text-green-600 ':'text-red-600 '} ${textSize} font-bold `}>
              {Math.round(scorePercentage)}%</span>
              <span className={`${scorePercentage>=50?'text-green-600 ':'text-red-600 '} text-md font-bold `}>
              {Math.round((scorePercentage/100)*exam.Total_Points )+' /'+exam.Total_Points}</span>
            </div>
            :
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              
              <span className={`${scorePercentage>=50?'text-green-600 ':'text-red-600 '} text-2xl font-semibold `}>
              Absent</span>
            </div>}
            
          </div>
        </div>

        {/* Exam Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{exam?.course?.code || 'N/A'}</h3>
          <p className="text-lg text-gray-700">{exam?.course?.name || 'N/A'}</p>
          <p className="text-gray-600 mt-2"><span className="font-bold">Exam Points:</span> {exam?.Total_Points}</p>
          <p className="text-gray-600"><span className="font-bold">Duration:</span> {exam?.duration || 'N/A'} min</p>
          <p className="text-gray-600"><span className="font-bold">Topics:</span> {exam?.topics || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-bold">Number of Questions:</span> {exam?.questions.length || 'N/A'}</p>

          
        </div>
      </div>

      {/* Answers Section */}
      {studentScore.attended && (
        <>
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

          {/* Review Button */}
          <button
            onClick={() => setShowReview(true)}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
          >
            Review Answers
          </button>
        </>
      )}
    </div>
  );
};

export default ExamResultsModalContent; 
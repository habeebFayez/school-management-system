import React, { useState } from 'react';
import { CheckCircle, XCircle, FileText, X, Upload } from 'lucide-react';
import { submissionsFull } from '../../data/assignmentsData';

const AssignmentDetailsStudentModal = ({ assignment, submission, onClose, onOpenSubmit }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
        <X size={24} />
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Assignment Details</h2>
      <div className="space-y-2 text-sm">
        <div><span className="font-semibold">Assignment ID:</span> {assignment.assignmentId}</div>
        <div><span className="font-semibold">Course Name:</span> {assignment.courseName}</div>
        <div><span className="font-semibold">Title:</span> {assignment.title}</div>
        <div><span className="font-semibold">Description:</span> {assignment.description}</div>
        <div><span className="font-semibold">Deadline:</span> {assignment.deadline} <span className="ml-2 font-semibold">Time:</span> {assignment.time}</div>
        {assignment.fileName && (
          <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md">
            <div>
              <span className="font-semibold">Assignment File:</span> {(assignment.fileName).slice(0,15)+'...'} {assignment.fileSize && <span>({assignment.fileSize})</span>}
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              Download
            </button>
          </div>
        )}
        <div><span className="font-semibold">Message:</span> {assignment.message || 'You can uploud one file only'}</div>
        <hr className="my-2" />
        <div className="font-semibold text-base mb-1">Your Submission</div>
        {submission ? (
          <>
            <div className="flex items-center gap-2">
              {submission.status === 'submitted' ? (
                <><CheckCircle className="text-green-600 w-5 h-5" /><span className="text-green-700 font-semibold">Submitted</span></>
              ) : (
                <><XCircle className="text-red-600 w-5 h-5" /><span className="text-red-700 font-semibold">Not Submitted</span></>
              )}
            </div>
            {submission.fileName && (
              <div className="flex items-center gap-2 mt-1 text-green-900 text-xs">
                <FileText className="w-4 h-4" />
                {submission.fileName}
                {submission.grade && <span className="ml-2">Grade: {submission.grade}</span>}
                {submission.submissionDate && <span className="ml-2">Submitted: {submission.submissionDate}</span>}
              </div>
            )}
          </>
        ) : (
          <div className="text-gray-500">No submission found for this assignment.</div>
        )}
        {/* Show submit button for upcoming and not-submitted */}
        {(!submission || submission.status === 'not-submitted') && new Date(assignment.deadline) >= new Date() && (
          <button
            onClick={onOpenSubmit}
            className="mt-4 w-full flex items-center justify-center gap-2 h-10 rounded-lg bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white hover:opacity-90 font-semibold"
          >
            <Upload className="w-5 h-5" /> Submit Assignment
          </button>
        )}
      </div>
    </div>
  </div>
);

const AssignmentSubmitModal = ({ assignment, onClose, onSubmit }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Submit Assignment</h2>
        {/* Assignment details on top */}
        <div className="mb-4 space-y-1 text-sm">
          <div><span className="font-semibold">Assignment ID:</span> {assignment.assignmentId}</div>
          <div><span className="font-semibold">Title:</span> {assignment.title}</div>
          <div><span className="font-semibold">Deadline:</span> {assignment.deadline} <span className="ml-2 font-semibold">Time:</span> {assignment.time}</div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit({ message, file });
          }}
          className="space-y-4"
        >
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              className="w-full border rounded-md p-2 min-h-[60px]"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write a message (optional)"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Upload File</label>
            <input
              type="file"
              className="w-full"
              onChange={e => setFile(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white font-semibold hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const StudentAssignmentCard = ({
  assignment,
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);
  // Find the submission for this assignment
  const submission = submissionsFull.find(sub => String(sub.assignmentId) === String(assignment.id));
  const isPrevious = new Date(assignment.deadline) < new Date();
  const isSubmitted = submission && submission.status === 'submitted';
  const isUnsubmitted = submission && submission.status === 'not-submitted';
  const isUpcoming = !isPrevious;

  // Status display for previous assignments
  let statusSection = null;
  if (isPrevious) {
    if (isSubmitted) {
      statusSection = (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-md p-2 mb-2">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <span className="text-green-700 font-semibold text-sm">Submitted</span>
          {submission.fileName && (
            <span className="flex items-center gap-1 ml-4 text-green-900 text-xs">
              <FileText className="w-4 h-4" />
              {submission.fileName}
            </span>
          )}
        </div>
      );
    } else if (isUnsubmitted) {
      statusSection = (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-md p-2 mb-2">
          <XCircle className="text-red-600 w-5 h-5" />
          <span className="text-red-700 font-semibold text-sm">Not Submitted</span>
        </div>
      );
    }
  }

  // Status display for upcoming assignments (not as a button)
  let upcomingStatusSection = null;
  if (isUpcoming) {
    if (isSubmitted) {
      upcomingStatusSection = (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-md p-2 mb-2">
          <CheckCircle className="text-green-600 w-5 h-5" />
          <span className="text-green-700 font-semibold text-sm">Submitted</span>
          {submission.fileName && (
            <span className="flex items-center gap-1 ml-4 text-green-900 text-xs">
              <FileText className="w-4 h-4" />
              {submission.fileName}
            </span>
          )}
        </div>
      );
    } else if (isUnsubmitted) {
      upcomingStatusSection = (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-md p-2 mb-2">
          <XCircle className="text-red-600 w-5 h-5" />
          <span className="text-red-700 font-semibold text-sm">Not Submitted</span>
        </div>
      );
    }
  }

  // Button logic
  let submitButtonText = 'Submit Assignment';
  let submitButtonClass = 'bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90';
  if (isSubmitted) {
    submitButtonText = 'Submitted Successfully';
    submitButtonClass = 'bg-green-600 hover:bg-green-700';
  } else if (isUnsubmitted) {
    submitButtonText = 'Submit Assignment';
    let submitButtonClass = 'bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90';
  }

  // Handle submit in modal (no backend, just close modal)
  const handleModalSubmit = ({ message, file }) => {
    setSubmitOpen(false);
    setDetailsOpen(false);
  };

  return (
    <>
      <div className="w-full border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col gap-2 min-h-64">
        <div className="text-lg font-bold text-gray-900 mb-1">{assignment.assignmentId}</div>
        <div className="text-base text-gray-700 font-semibold mb-1">{assignment.courseName}</div>
        <div className="text-sm text-gray-600 mb-1">{assignment.title}</div>
        <div className="text-sm text-gray-700 mb-2">
          Deadline: <span className="font-bold">{assignment.deadline}</span>  Time: <span className="font-bold">{assignment.time}</span>
          </div>

        {/* Status for previous assignments */}
        {statusSection}
        {/* Status for upcoming assignments (not as a button) */}
        {upcomingStatusSection}

        {/* Always show details button */}
            <button 
          onClick={() => setDetailsOpen(true)}
          className="w-full text-sm h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white mb-2"
            >
             Check details
            </button>
            
        {/* Only show submit button for upcoming assignments that are not submitted */}
        {isUpcoming && isUnsubmitted && (
              <button 
            onClick={() =>  setSubmitOpen(true)}
                className={`w-full h-10 text-sm rounded-lg text-white ${submitButtonClass}`}
              >
                {submitButtonText}
              </button>
            )}
          </div>
      {detailsOpen && (
        <AssignmentDetailsStudentModal
          assignment={assignment}
          submission={submission}
          onClose={() => setDetailsOpen(false)}
          onOpenSubmit={() => { setDetailsOpen(false); setSubmitOpen(true); }}
        />
      )}
      {submitOpen && (
        <AssignmentSubmitModal
          assignment={assignment}
          onClose={() => setSubmitOpen(false)}
          onSubmit={handleModalSubmit}
        />
      )}
    </>
  );
}; 
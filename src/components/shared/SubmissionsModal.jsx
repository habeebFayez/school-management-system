import React from 'react';

export const SubmissionsModal = ({ isOpen, onClose, submissions }) => {
  if (!isOpen) return null;

  return (
    <dialog open={isOpen}>
      <div className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-center">Submissions</h2>
          <button onClick={onClose} className="absolute right-4 top-4">Close</button>
        </div>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissions && submissions.map(sub => (
              <tr key={sub.id}>
                <td className="px-6 py-4 whitespace-nowrap">{sub.student}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sub.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </dialog>
  );
};

import React from 'react';

export const SubmissionsModal = ({ isOpen, onClose, submissions , assignment  }) => {

  return (
    <>
      <div className="max-w-full   max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-6 mb-4 sticky top-0 bg-white ">
          <h2 className="text-xl font-semibold text-center flex-1">Assignment Submissions List</h2>
        </div>

        {/* Assignment Details */}
        <div className="mb-4  ">
          <div className="grid grid-cols-2 lg:grid-cols-3  text-sm ">
            <div>
              <span className="font-medium">Assignment ID :</span> {assignment.assignmentId}
            </div>
            <div>
              <span className="font-medium">Course Name :</span> {assignment.courseName}
            </div>
            <div>
              <span className="font-medium">Assignment Title :</span>{assignment.title}
            </div>
            <div>
              <span className="font-medium">Deadline:</span> {assignment.deadline}
            </div>
            <div>
              <span className="font-medium">Deadline Time:</span>{assignment.time}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className=" max-h-[80vh] text-sm ">
          <table className="min-w-full ">
            <thead className="bg-gray-100 rounded-lg sticky top-7 ">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Info</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">File</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Assignment Grade</th>
              </tr>
            </thead>
            <tbody>
              {submissions &&
                submissions.map((sub, index) => (
                  <tr
                    key={sub.id}
                    className={
                      sub.status === "not-submitted" ? "bg-red-50 hover:bg-blue-100" : index % 2 === 0 ? "bg-white hover:bg-blue-100" : "hover:bg-blue-100 bg-blue-50"
                    }
                  >
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white font-medium">
                          {sub.studentName
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("") || "U"}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{sub.studentName}</div>
                          <div className="text-sm text-gray-500">{sub.className || "3B"}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{sub.studentId}</td>
                    <td className="px-6 py-4">
                      {sub.fileName ? (
                        <a
                          href={sub.fileUrl}
                          className="text-blue-600 hover:text-blue-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-gray-400">----</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={
                          sub.status === "submitted" ? "text-green-600 font-medium" : "text-red-600 font-medium"
                        }
                      >
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-16 py-4 text-gray-900 font-medium ">{sub.grade || "----"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
         
        </div>
       
      </div>
      <div className='flex justify-between gap-4 mt-4 -mb-4 '>
        <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2 "
          >
            Download  List
          </button> <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2 "
          >
            Export as Grades List 
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 rounded-lg text-white py-2 "
          >
            Close
          </button>
          </div>
      </>
  )
}

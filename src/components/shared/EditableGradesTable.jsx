import React from 'react';
import AverageDisplay from "../shared/AverageDisplay";

const EditableGradesTable = ({ data, columns, handleGradeChange }) => {
    // This component will render the table with input fields for editing grades.
    // It will receive the data (presumably editableGradesData or a similar structure)
    // and the necessary columns/headers, and the change handler.

    return (
        <div className="overflow-x-auto text-sm border rounded-lg">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        {columns.map((column, index) => (
                            <th key={index} className="text-left py-3 px-4  font-medium text-gray-700">
                                {/* Assuming columns are simple strings for headers here */}
                                {/* {column} */}
                                {typeof column === 'object' ? column.Header : column}

                            </th>
                        ))}
                         {/* Assuming no Actions column in edit mode for simplicity, or handle it if needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((studentData, index) => (
                        <tr
                            key={index}
                            className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                        >
                             {/* Render Student Info cell - assuming it's always the first column */}
                            <td className="py-2 pl-4 pr-2 text-gray-700">
                                 {/* Assuming studentData has an Info property with avatar, name, description */}
                                 <div className="flex items-center space-x-3">
                                     {studentData.avatar && (
                                         <div className="flex-shrink-0">
                                             <img
                                                 className="h-8 w-8 rounded-full object-cover ring-2 ring-gray-200"
                                                 src={studentData.avatar}
                                                 alt={studentData.studentName}
                                                 onError={(e) => {
                                                     const target = e.target;
                                                     target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(studentData.studentName)}&background=6366f1&color=fff&size=32`;
                                                 }}
                                             />
                                         </div>
                                     )}
                                     <div className="min-w-0 flex-1">
                                         <p className="text-sm font-medium text-gray-900 truncate">{studentData.studentName}</p>
                                         <p className="text-xs text-gray-500 truncate">{`ID: ${studentData.studentId}, Class: ${studentData.class}`}</p>
                                     </div>
                                 </div>
                             </td>
                             {/* Render Course cell - assuming it's the second column if needed */}
                            {studentData.courseName && (
                                 <td className="py-2 pl-4 pr-2 text-gray-700">
                                     {studentData.courseName}
                                 </td>
                            )}

                            {/* Render editable grade input fields */}
                            {columns.slice(studentData.courseName ? 2 : 1, -2).map((column, colIndex) => { // Slice to get only assessment columns
                                 const assessmentType = column; // Assuming column is the assessment type string
                                 const gradeEntry = studentData.grades[assessmentType];
                                 return (
                                     <td key={colIndex} className="py-2 pl-4 pr-2 text-gray-700">
                                         <input
                                             type="number"
                                             value={gradeEntry?.percentage ?? ''} // Use percentage for input value
                                             onChange={(e) => handleGradeChange(studentData.studentId, assessmentType, e.target.value)}
                                             className="w-20 p-1 border rounded text-sm"
                                             step="1"
                                             min="0"
                                             max="100"
                                             placeholder="-"
                                         />
                                     </td>
                                 );
                            })}

                            {/* Render Average and Status cells - assuming they are the last two columns */}
                            <td className="py-2 pl-4 pr-2 text-gray-700">
                                 {studentData.average !== null ? <AverageDisplay value={studentData.average} size="md" /> : '-'}
                            </td>
                            <td className="py-2 pl-4 pr-2 text-gray-700">
                                 {studentData.status !== "N/A" ? studentData.status : '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EditableGradesTable; 
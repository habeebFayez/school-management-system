import React, { useState, useEffect } from 'react';
import { courses, exams, users } from '../../data/mockData'; // Import necessary data
import Table from '../shared/Table'; // Assuming the shared Table component
import AverageDisplay from "../shared/AverageDisplay"
import EditableGradesTable from '../shared/EditableGradesTable'; // Import the new component

// Define standard exam order and types
const STANDARD_EXAM_ORDER = [
    'First Exam',
    'Second Exam',
    'Midterm Exam',
    'Assignments',
    'Final Exam'
];

// Helper function to get all grades for a student across all their courses
const getAllStudentGrades = (studentId, allCourses, allExams) => {
    const studentCourses = allCourses.filter(course => course.students.some(s => s.id === studentId));


    const studentGradesAggregated = {}; // To store aggregated percentage grades by standard assessment type
    const assessmentTypeCounts = {}; // To count how many assessments contribute to the average for each type
    
    let totalAggregatedRawScore = 0; // To sum raw scores across all courses for the overall average

    studentCourses.forEach(course => {
        const courseExams = allExams.filter(exam => exam.course?.id === course.id);

        courseExams.forEach(exam => {
            const studentGrade = exam.grades.find(grade => grade.studentId === studentId);
            if (studentGrade && studentGrade.score !== null && exam.Total_Points > 0) { 
                // Map the exam title to the standard type
                const standardType = STANDARD_EXAM_ORDER.find(type => exam.title.includes(type)) || exam.title;
                
                // Calculate percentage for this specific assessment
                const assessmentPercentage = Math.round((studentGrade.score / exam.Total_Points) * 100);

                if (!studentGradesAggregated[standardType]) {
                    studentGradesAggregated[standardType] = 0;
                    assessmentTypeCounts[standardType] = 0;
                }
                // Sum percentages for calculating average percentage per assessment type across courses
                studentGradesAggregated[standardType] += assessmentPercentage;
                assessmentTypeCounts[standardType]++;
                
                // Add to the total raw score across all courses for the overall average
                totalAggregatedRawScore += studentGrade.score;
            }
        });
    });

    // Calculate average percentage for each standard assessment type across courses
    const aggregatedGrades = {};
    Object.keys(studentGradesAggregated).forEach(type => {
        if (assessmentTypeCounts[type] > 0) {
           aggregatedGrades[type] = Math.round(studentGradesAggregated[type] / assessmentTypeCounts[type]);
        } else {
            aggregatedGrades[type] = null;
        }
    });

    // Ensure all standard types exist in the result, even if null
    STANDARD_EXAM_ORDER.forEach(type => {
        if (!(type in aggregatedGrades)) {
            aggregatedGrades[type] = null;
        }
    });

    // Calculate the overall aggregated average as the sum of raw scores across all courses, capped at 100
    const overallAverage = totalAggregatedRawScore !== null ? Math.min(Math.round(totalAggregatedRawScore), 100) : null; // Sum of raw scores across all courses, capped at 100
    const overallStatus = overallAverage !== null ? (overallAverage >= 50 ? "Passed" : "Failed") : "N/A"; // Assuming 50% passing for overall

    aggregatedGrades.average = overallAverage;
    aggregatedGrades.status = overallStatus;
    // //console.log('allStudentGrades :',aggregatedGrades);

    return aggregatedGrades;
};

// Helper function to get grades for a student in a given course
const getStudentGrades = (studentId, courseId, allExams) => {
    const studentExams = allExams.filter(exam => exam.course?.id === courseId);
    const grades = {};
    let totalStudentScore = 0;

    STANDARD_EXAM_ORDER.forEach(type => {
        grades[type] = null;
    });

    studentExams.forEach(exam => {
        const studentGrade = exam.grades.find(grade => grade.studentId === studentId);
        const standardType = STANDARD_EXAM_ORDER.find(type => exam.title.includes(type)) || exam.title;
        if (studentGrade && studentGrade.score !== null && exam.Total_Points > 0) {
            const assessmentPercentage = Math.round((studentGrade.percentage * exam.Total_Points) / 100);
            grades[standardType] = assessmentPercentage;
            totalStudentScore += studentGrade.score;
            // console.log('studentGrade : ',studentGrade);
            // console.log('assessmentPercentage : ',assessmentPercentage);
            // console.log('totalStudentScore : ',totalStudentScore);
        }
    });

    const average = totalStudentScore !== null ? Math.min(Math.round(totalStudentScore), 100) : null;
    const status = average !== null ? (average >= 50 ? "Passed" : "Failed") : "N/A";

    // console.log('totalStudentScore : ',totalStudentScore);
    // console.log('average : ',average);
    // console.log('status : ',status);
    return { ...grades, average, status };
};

export const GradesTableTeacher = ({ selectedCourse, selectedClass, searchTerm }) => {
    const [examsData, setExamsData] = useState(exams);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [editableGradesData, setEditableGradesData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [displayedColumns, setDisplayedColumns] = useState([]);
    const [editableTableColumns, setEditableTableColumns] = useState([]); // State for columns used by EditableGradesTable

    useEffect(() => {
        let studentsToDisplay = users.filter(user => user.role === 'student');

        if (selectedClass !== 'All') {
            studentsToDisplay = studentsToDisplay.filter(student => student.class === selectedClass);
        }

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            studentsToDisplay = studentsToDisplay.filter(student =>
                student.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                String(student.id).includes(lowerCaseSearchTerm)
            );
        }

        studentsToDisplay.sort((a, b) => a.name.localeCompare(b.name));

        const transformedDataForDisplay = [];
        const gradesDataForEditing = [];

        let assessmentTypesForCourse = []; // Initialize here

        if (selectedCourse !== 'All') {
            const course = courses.find(c => c.name === selectedCourse);
            if (course) {
                studentsToDisplay = studentsToDisplay.filter(student =>
                    course.students.some(courseStudent => courseStudent.id === student.id)
                );

                const courseExams = examsData.filter(exam => exam.course?.id === course.id);
                // Dynamically get all unique assessment types for this course
                assessmentTypesForCourse = [...new Set(courseExams.map(exam => exam.title))];

                studentsToDisplay.forEach(student => {
                    // Use courseExams directly to get student grades for this course
                    const studentGrades = {}; // Initialize an empty object to store grades for display
                    const editableStudentGrades = {}; // Initialize an empty object to store grades for editing
                    let totalStudentScore = 0;

                    courseExams.forEach(exam => {
                        const studentGrade = exam.grades.find(grade => grade.studentId === student.id);
                        const assessmentType = exam.title; // Use the actual exam title as the type

                        if (studentGrade && studentGrade.score !== null && exam.Total_Points > 0) {
                            const assessmentPercentage = Math.round((studentGrade.score / exam.Total_Points) * 100);
                            studentGrades[assessmentType] = assessmentPercentage;
                            totalStudentScore += studentGrade.score; // Sum raw scores for average calculation
                        } else {
                              studentGrades[assessmentType] = null;
                         }

                         editableStudentGrades[assessmentType] = {
                             assessmentType: assessmentType,
                             percentage: studentGrade ? Math.round(studentGrade.percentage) : null,
                             score: studentGrade ? studentGrade.score : null,
                             totalPoints: exam.Total_Points,
                             assessmentId: exam.id,
                             courseId: course.id,
                             studentId: student.id
                          }; // Closing brace for editableStudentGrades object
                     });

                     // Calculate average and status based on total raw score for this course
                     const average = totalStudentScore !== null && courseExams.reduce((sum, exam) => sum + exam.Total_Points, 0) > 0
                        ? Math.min(Math.round((totalStudentScore / courseExams.reduce((sum, exam) => sum + exam.Total_Points, 0)) * 100), 100)
                        : null; // Calculate average based on total raw score / total possible points for the course
                     const status = average !== null ? (average >= 50 ? "Passed" : "Failed") : "N/A"; // Assuming 50% passing for course average

                     studentGrades.average = average;
                     studentGrades.status = status;

                     const rowData = {
                         Info: {
                             avatar: student.avatar,
                             name: student.name,
                             description: `ID: ${student.id}, Class: ${student.class}`,
                         },
                         Course: course.name,
                         // Add dynamically created assessment columns to rowData in the correct order
                         ...Object.fromEntries(assessmentTypesForCourse.map(type => [type, studentGrades[type] !== null ? <AverageDisplay value={studentGrades[type]} size="md" /> : '-'])),
                         Average: studentGrades.average !== null ? <AverageDisplay value={studentGrades.average} size="md" /> : '-',
                         Status: studentGrades.status !== "N/A" ? studentGrades.status : '-',
                     };

                     transformedDataForDisplay.push(rowData);
                     gradesDataForEditing.push({
                         studentId: student.id,
                         studentName: student.name,
                         avatar: student.avatar,
                         class: student.class,
                         grades: editableStudentGrades
                     });
                 });

             }
         } else { // selectedCourse === 'All'
             studentsToDisplay.forEach(student => {
                 const studentCourses = courses.filter(course => course.students.some(s => s.id === student.id));

                 studentCourses.forEach(course => {
                     const studentGrades = getStudentGrades(student.id, course.id, examsData);
                     const hasGradedAssessments = Object.values(studentGrades).some(grade => grade !== null && typeof grade !== 'string');

                     if (hasGradedAssessments) {
                         const rowData = {
                             Info: {
                                 avatar: student.avatar,
                                 name: student.name,
                                 description: `ID: ${student.id}, Class: ${student.class}`,
                             },
                             Course: course.name,
                         };

                         STANDARD_EXAM_ORDER.forEach(type => {
                             const grade = studentGrades[type];
                             rowData[type] = grade !== null ? <AverageDisplay value={grade} size="md" /> : '-';
                         });

                         rowData['Average'] = studentGrades.average !== null ? <AverageDisplay value={studentGrades.average} size="md" /> : '-';
                         rowData['Status'] = studentGrades.status !== "N/A" ? studentGrades.status : '-';

                         transformedDataForDisplay.push(rowData);
                     }
                 });
             });
         }

         setFilteredStudents(transformedDataForDisplay);
         setEditableGradesData(selectedCourse !== 'All' ? gradesDataForEditing : []);

         // Define the columns for the Table component inside useEffect
         const staticColumns = [
             { Header: 'Student', accessor: 'Info' },
             { Header: 'Course', accessor: 'Course' }, // Ensure Course column is always included in column definitions
         ];

         const finalStaticColumns = [
             { Header: 'Average', accessor: 'Average' },
             { Header: 'Status', accessor: 'Status' },
         ];

         // Determine which columns to show based on selectedCourse
         const currentTableColumns = selectedCourse !== 'All'
             ? [...staticColumns, ...assessmentTypesForCourse.map(type => ({ Header: type, accessor: type })), ...finalStaticColumns] // Specific course view - use objects for headers
             : [...staticColumns, ...STANDARD_EXAM_ORDER.map(type => ({ Header: type, accessor: type })), ...finalStaticColumns]; // All courses view - use objects for headers

         // Columns for the EditableGradesTable (simple strings)
         const editableCols = ['Student', 'Course', ...assessmentTypesForCourse, 'Average', 'Status'];
         setEditableTableColumns(editableCols);

         // Set the columns to be displayed in the main Table component (non-editable views)
         setDisplayedColumns(currentTableColumns);

    }, [selectedCourse, selectedClass, searchTerm, examsData, courses, editMode]); // Reverted dependencies to a cleaner set

    const handleGradeChange = (studentId, assessmentType, newValue) => {
        setEditableGradesData(prevData =>
            prevData.map(student => {
                if (student.studentId === studentId) {
                    const updatedGrades = { ...student.grades };
                    if (updatedGrades[assessmentType]) {
                        const parsedValue = parseInt(newValue);
                        const validValue = !isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100 ? parsedValue : null;

                        updatedGrades[assessmentType] = {
                            ...updatedGrades[assessmentType],
                            percentage: validValue,
                            score: validValue !== null ? Math.round((validValue / 100) * updatedGrades[assessmentType].totalPoints) : null
                        };
                    }
                    return { ...student, grades: updatedGrades };
                }
                return student;
            })
        );
    };

    const handleSaveGrades = () => {
        const updatedExamsData = [...examsData];

        editableGradesData.forEach(studentEditData => {
            Object.entries(studentEditData.grades).forEach(([assessmentType, gradeEntry]) => {
                if (gradeEntry && gradeEntry.assessmentId) {
                    const examIndex = updatedExamsData.findIndex(exam => exam.id === gradeEntry.assessmentId);
                    if (examIndex !== -1) {
                        const studentGradeIndex = updatedExamsData[examIndex].grades.findIndex(
                            g => g.studentId === studentEditData.studentId
                        );

                        if (studentGradeIndex !== -1) {
                            updatedExamsData[examIndex].grades[studentGradeIndex] = {
                                ...updatedExamsData[examIndex].grades[studentGradeIndex],
                                percentage: gradeEntry.percentage,
                                score: gradeEntry.score,
                                attended: gradeEntry.percentage !== null,
                                passed: gradeEntry.percentage !== null && gradeEntry.percentage >= updatedExamsData[examIndex].PassingGrade
                            };
                        }
                    }
                }
            });
        });

        setExamsData(updatedExamsData);
        setEditMode(false);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
    };

    return (
        <div className="mt-2 space-y-2 w-full overflow-x-auto"> {/* Added w-full overflow-x-auto */}
             {/* Add Edit/Save/Cancel buttons */}
             <div className="flex justify-end gap-4 mb-4">
                {selectedCourse !== 'All' && ( // Only allow editing when a specific course is selected
                     editMode ? (
                         <>
                             <button
                                 type="button"
                                 onClick={handleSaveGrades}
                                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                             >
                                 Save Changes
                             </button>
                             <button
                                 type="button"
                                 onClick={handleCancelEdit}
                                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                             >
                                 Cancel
                             </button>
                         </>
                     ) : (
                         <button
                             type="button"
                             onClick={() => {
                                 //console.log('Edit Grades button clicked. Setting editMode to true.');
                                 setEditMode(true);
                             }}
                             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                         >
                             Edit Grades
                         </button>
                     )
                 )}
             </div>

             {/* Always render the table, it will show no students if filters result in empty data */}
             {selectedCourse !== 'All' && editMode ? (
                 <EditableGradesTable
                     data={editableGradesData}
                     columns={editableTableColumns}
                     handleGradeChange={handleGradeChange}
                 />
             ) : (
                 <div className="overflow-x-auto">
                     <table className="w-full">
                         <thead>
                             <tr className="border-b border-gray-200">
                                 {displayedColumns.map((column, index) => (
                                     <th key={index} className="text-left py-3 px-4 font-medium text-gray-700">
                                         {/* Render header using column.Header */}
                                         {column.Header}
                                     </th>
                                 ))}
                                 {/* Add Actions column header if needed in non-editable view */}
                                 {/* <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th> */}
                             </tr>
                         </thead>
                         <tbody>
                             {filteredStudents.map((row, index) => (
                                 <tr
                                     key={index}
                                     className={`border-b border-gray-200 cursor-pointer hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                                 >
                                     {displayedColumns.map((column, cellIndex) => (
                                         <td key={cellIndex} className="py-2 pl-4 pr-2 text-gray-700">
                                             {/* Render cell using column.accessor or custom logic */}
                                             {column.accessor === 'Info' && row.Info ? (
                                                 <div className="flex items-center space-x-3">
                                                     {row.Info.avatar && (
                                                         <div className="flex-shrink-0">
                                                             <img
                                                                 className="h-8 w-8 rounded-full object-cover ring-2 ring-gray-200"
                                                                 src={row.Info.avatar}
                                                                 alt={row.Info.name}
                                                                 onError={(e) => {
                                                                     const target = e.target;
                                                                     target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(row.Info.name)}&background=6366f1&color=fff&size=32`;
                                                                 }}
                                                             />
                                                         </div>
                                                     )}
                                                     <div className="min-w-0 flex-1">
                                                         <p className="text-sm font-medium text-gray-900 truncate">{row.Info.name}</p>
                                                         <p className="text-xs text-gray-500 truncate">{row.Info.description}</p>
                                                     </div>
                                                 </div>
                                             ) : column.accessor === 'Course' && row.Course ? (
                                                 row.Course
                                             ) : column.accessor === 'Average' && row.Average ? (
                                                 row.Average
                                             ) : column.accessor === 'Status' && row.Status ? (
                                                 row.Status
                                             ) : ( /* Handle assessment columns and any other accessors */
                                                 row[column.accessor] !== undefined && row[column.accessor] !== null ? row[column.accessor] : '-'
                                             )}
                                         </td>
                                     ))}
                                     {/* Add Actions column cell if needed */}
                                     {/* <td className="py-2 px-8">...</td> */}
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
             )}
        </div>
    );
};

export default GradesTableTeacher; 
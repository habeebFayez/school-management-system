import React, { useState, useEffect } from 'react';
import { courses, exams, users } from '../../data/mockData'; // Import necessary data
import Table from '../shared/Table'; // Assuming the shared Table component
import AverageDisplay from "../shared/AverageDisplay"

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
        let dynamicAssessmentColumns = []; // Initialize here

        if (selectedCourse !== 'All') {
            const course = courses.find(c => c.name === selectedCourse);
            if (course) {
                studentsToDisplay = studentsToDisplay.filter(student =>
                    course.students.some(courseStudent => courseStudent.id === student.id)
                );

                const courseExams = examsData.filter(exam => exam.course?.id === course.id);
                // Dynamically get all unique assessment types for this course
                assessmentTypesForCourse = [...new Set(courseExams.map(exam => exam.title))];

                // Dynamically create assessment columns based on types found for the course
                dynamicAssessmentColumns = assessmentTypesForCourse.map(type => ({
                    Header: type,
                    accessor: type,
                }));

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
                     };

                     // Add dynamically created assessment columns to rowData
                     assessmentTypesForCourse.forEach(type => {
                         rowData[type] = studentGrades[type] !== null ? <AverageDisplay value={studentGrades[type]} size="md" /> : '-';
                     });

                     rowData['Average'] = studentGrades.average !== null ? <AverageDisplay value={studentGrades.average} size="md" /> : '-';
                     rowData['Status'] = studentGrades.status !== "N/A" ? studentGrades.status : '-';

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
         } else {
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
         ];

         const courseColumn = { Header: 'Course', accessor: 'Course' };

         // Use standard exam order for columns for 'All' courses view
         const assessmentColumns = STANDARD_EXAM_ORDER.map(type => ({
             Header: type,
             accessor: type,
         }));

         const finalStaticColumns = [
             { Header: 'Average', accessor: 'Average' },
             { Header: 'Status', accessor: 'Status' },
         ];

         // Determine which columns to show based on selectedCourse
         const tableColumns = selectedCourse !== 'All'
             ? [...staticColumns, ...dynamicAssessmentColumns, ...finalStaticColumns] // Specific course view using dynamically created columns
             : [...staticColumns, courseColumn, ...assessmentColumns, ...finalStaticColumns]; // All courses view with Course column

         // Modify columns for edit mode to include input fields (only in specific course view)
         const editableTableColumns = tableColumns.map(column => {
             // Check if the column accessor is one of the dynamically determined assessment types
             if (editMode && selectedCourse !== 'All' && assessmentTypesForCourse.includes(column.accessor)) {
                 return {
                     ...column,
                     Cell: ({ row }) => {
                         //console.log('Cell renderer row data:', row);
                         // Find the original student object from the filteredStudents array based on the row's Info
                         // Note: row.original provides the data object for the current row
                         const studentId = parseInt(row.Info.description.split('ID: ')[1].split(', Class:')[0]);

                         const studentEditableData = editableGradesData.find(s => s.studentId === studentId);
                         const assessmentType = column.accessor;
                         const gradeEntry = studentEditableData?.grades[assessmentType];

                         //console.log(`Rendering Cell for ${assessmentType}. Student ID: ${studentId}. Grade Entry:`, gradeEntry);

                         return (
                             <input
                                 type="number"
                                 value={gradeEntry?.percentage ?? ''}
                                 onChange={(e) => handleGradeChange(studentId, assessmentType, e.target.value)}
                                 className="w-20 p-1 border rounded text-sm"
                                 step="1"
                                 min="0"
                                 max="100"
                                 placeholder="-"
                             />
                         );
                     }
                 };
             }
             return column;
         });

         // Set the columns to be displayed in the table
         setDisplayedColumns(editMode && selectedCourse !== 'All' ? editableTableColumns : tableColumns);

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
             
                <Table
                    data={filteredStudents}
                    columns={displayedColumns} // Use the state variable for columns
                    title={selectedCourse !== 'All' ? `Grades for ${selectedCourse}` : "Grades by Course"} // Changed title for All Courses view
                />
             
        </div>
    );
};

export default GradesTableTeacher; 
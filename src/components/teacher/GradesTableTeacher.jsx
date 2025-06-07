import React, { useState, useEffect } from 'react';
import { courses, exams, users } from '../../data/mockData'; // Import necessary data
import Table from '../shared/Table'; // Assuming the shared Table component
import AverageDisplay from "../shared/AverageDisplay"
import EditableGradesTable from '../shared/EditableGradesTable'; 
import { useSaveNotification } from '../../contexts/SaveNotificationContext';

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
    const { showSaveNotification, hideSaveNotification } = useSaveNotification();
    const [examsData, setExamsData] = useState(exams);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [editableGradesData, setEditableGradesData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [displayedColumns, setDisplayedColumns] = useState([]);
    const [editableTableColumns, setEditableTableColumns] = useState([]); // State for columns used by EditableGradesTable
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false); // New state for unsaved changes


    useEffect(() => {
        let timeoutId;
        let intervalId;
    
    
        if (editMode && hasUnsavedChanges) {
            // Initial delay of 10 seconds before the first notification
          timeoutId = setTimeout(() => {
            showSaveNotification();
            // Then show every 10 seconds
            intervalId = setInterval(() => {
              showSaveNotification();
            }, 10000); // 10 seconds
          }, 10000); // Initial 10 seconds delay
        }
    
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (intervalId) {
            clearInterval(intervalId);
          }
        };
    }, [editMode, hasUnsavedChanges, showSaveNotification]);
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

                     if (!hasGradedAssessments) return; // Skip if no graded assessments for this course

                     const rowData = {
                         Info: {
                             avatar: student.avatar,
                             name: student.name,
                             description: `ID: ${student.id}, Class: ${student.class}`,
                         },
                         Course: course.name,
                         // Dynamically add columns for each assessment type present in this student's grades
                         ...Object.fromEntries(
                             STANDARD_EXAM_ORDER.map(type => [type, studentGrades[type] !== null ? <AverageDisplay value={studentGrades[type]} size="md" /> : '-'])
                         ),
                         Average: studentGrades.average !== null ? <AverageDisplay value={studentGrades.average} size="md" /> : '-',
                         Status: studentGrades.status !== "N/A" ? studentGrades.status : '-',
                     };
                     transformedDataForDisplay.push(rowData);

                     const editableStudentGrades = {};
                     STANDARD_EXAM_ORDER.forEach(type => {
                         editableStudentGrades[type] = {
                             assessmentType: type,
                             percentage: studentGrades[type],
                             // For overall grades, score and totalPoints might not be directly applicable for editing
                             score: null, 
                             totalPoints: null,
                             assessmentId: null,
                             courseId: course.id, // Associate with course even if overall
                             studentId: student.id
                         };
                     });
                     gradesDataForEditing.push({
                         studentId: student.id,
                         studentName: student.name,
                         avatar: student.avatar,
                         class: student.class,
                         grades: editableStudentGrades
                     });
                 });
             });
             assessmentTypesForCourse = STANDARD_EXAM_ORDER;
         }

        setFilteredStudents(transformedDataForDisplay);
        setEditableGradesData(gradesDataForEditing);

        // Define columns for the main Table component
        const mainTableColumns = [
            'Info',
            'Course',
            ...assessmentTypesForCourse,
            'Average',
            'Status',
            'Actions'
        ];
        setDisplayedColumns(mainTableColumns);

        // Define columns for the EditableGradesTable component
        const editableCols = [
            'Student',
            'Class',
            ...assessmentTypesForCourse.map(type => ({ Header: type, accessor: type })),
        ];
        setEditableTableColumns(editableCols);
    }, [selectedCourse, selectedClass, searchTerm, examsData]);

    const handleGradeChange = (studentId, assessmentType, newValue) => {
        setEditableGradesData(prevData =>
            prevData.map(student =>
                student.studentId === studentId
                    ? {
                        ...student,
                        grades: {
                            ...student.grades,
                            [assessmentType]: {
                                ...student.grades[assessmentType],
                                percentage: newValue,
                                hasChanged: true, // Mark as changed
                            },
                        },
                    }
                    : student
            )
        );
        setHasUnsavedChanges(true); // Mark that there are unsaved changes
    };

    const handleSaveGrades = () => {
        // Logic to save grades (e.g., API call)
        console.log('Saving grades:', editableGradesData);
        setEditMode(false);
        setHasUnsavedChanges(false); // Reset unsaved changes flag
        hideSaveNotification(); // Hide notification on save
        // Optionally, refetch data or update local state to reflect saved changes
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setHasUnsavedChanges(false); // Reset unsaved changes flag
        hideSaveNotification(); // Hide notification on cancel
        // Optionally, reset editableGradesData to original state if changes were not saved
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow p-4 mb-6">
                <h2 className="text-xl font-bold mb-4">Manage Student Grades</h2>
                <div className="flex justify-end mb-4">
                    {!editMode ? (
                        <button
                            onClick={() => setEditMode(true)}
                            className="px-4 py-2 bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white rounded-lg hover:opacity-90"
                        >
                            Edit Grades
                        </button>
                    ) : (
                        <div className="flex gap-2">
                            <button
                                onClick={handleSaveGrades}
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handleCancelEdit}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Cancel Edit
                            </button>
                        </div>
                    )}
                </div>
                <EditableGradesTable
                    data={filteredStudents}
                    columns={displayedColumns}
                    onGradeChange={handleGradeChange}
                    editMode={editMode}
                />
            </div>

            <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-xl font-bold mb-4">Overall Grades View</h2>
                <Table
                    data={filteredStudents}
                    columns={displayedColumns}
                    title="All Student Grades"
                    isActions={false} // No actions in this view
                    user={{ role: 'teacher' }}
                />
            </div>
        </div>
    );
};

export default GradesTableTeacher; 
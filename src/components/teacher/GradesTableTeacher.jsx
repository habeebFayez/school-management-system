import React, { useState, useEffect } from 'react';
import { courses, exams, users } from '../../data/mockData'; // Import necessary data
import AverageDisplay from "../shared/AverageDisplay"
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

    const [editMode, setEditMode] = useState(false);

    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false); // New state for unsaved changes
    const [gradesData, setGradesData] = useState([]);

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
        // Filter students
        let students = users.filter(user => user.role === 'student');
        
        if (selectedClass !== 'All') {
            students = students.filter(student => student.class === selectedClass);
        }

        if (selectedCourse !== 'All') {
            const course = courses.find(c => c.name === selectedCourse);
            if (course) {
                students = students.filter(student => 
                    course.students.some(s => s.id === student.id)
                );
            }
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            students = students.filter(student =>
                student.name.toLowerCase().includes(term) ||
                String(student.id).includes(term)
            );
        }

        // Sort by name
        students.sort((a, b) => a.name.localeCompare(b.name));

        // Get grades for each student
        const data = students.map(student => {
            const grades = {};

            // Get relevant exams once (either all or specific to course)
            const relevantExams = selectedCourse === 'All' 
                ? exams 
                : exams.filter(exam => exam.course?.name === selectedCourse);

            STANDARD_EXAM_ORDER.forEach(standardExamTitle => {
                const exam = relevantExams.find(e => e.title === standardExamTitle);
                
                if (exam) {
                    const gradeEntry = exam.grades.find(g => g.studentId === student.id);
                    if (gradeEntry && exam.Total_Points > 0) {
                        const percentage = Math.round((gradeEntry.score / exam.Total_Points) * 100);
                        grades[standardExamTitle] = percentage;
                    } else {
                        grades[standardExamTitle] = null; // No grade or invalid points
                    }
                } else {
                    grades[standardExamTitle] = null; // Exam for this standard type doesn't exist
                }
            });

            // Calculate average from the grades object, which only contains STANDARD_EXAM_ORDER items
            const validGrades = Object.values(grades).filter(g => g !== null);
            const average = validGrades.length > 0 
                ? Math.round(validGrades.reduce((sum, current) => sum + current, 0) / validGrades.length) 
                : null;

            return {
                studentId: student.id,
                studentName: student.name,
                avatar: student.avatar,
                courseName: selectedCourse === 'All' ? 
                courses.find(course => course.students.some(s => s.id === student.id))?.name || 'N/A' : 
                selectedCourse,
                class: student.class,
                grades, // This contains percentages for STANDARD_EXAM_ORDER
                average,
                status: average !== null ? (average >= 50 ? "Passed" : "Failed") : "N/A"
            };
        });

        setGradesData(data);
    }, [selectedCourse, selectedClass, searchTerm]);

    const handleGradeChange = (studentId, examTitle, newValue) => {
        setGradesData(prevData => 
            prevData.map(student => {
                if (student.studentId === studentId) {
                    // Ensure the value is between 0 and 100
                    const newGrade = Math.min(Math.max(parseInt(newValue) || 0, 0), 100);
                    const updatedGrades = { ...student.grades, [examTitle]: newGrade };
                    
                    // Recalculate average directly from percentages
                    const validGrades = Object.values(updatedGrades).filter(g => g !== null);
                    const newAverage = validGrades.length > 0 
                        ? Math.round(validGrades.reduce((a, b) => a + b, 0) / validGrades.length) 
                        : null;

                    return {
                        ...student,
                        grades: updatedGrades,
                        average: newAverage,
                        status: newAverage !== null ? (newAverage >= 50 ? "Passed" : "Failed") : "N/A"
                    };
                }
                return student;
            })
        );
    };

   
    return (
        <div className="overflow-x-auto text-sm border rounded-lg">
            <div className="flex justify-end p-4">
                
                <button
                    onClick={() => setEditMode(!editMode)}
                    className={!editMode ?"px-4 py-2 bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 text-white rounded-md "
                                :"px-4 py-2 bg-green-600 hover:opacity-90 text-white rounded-md " }>
                    {editMode ? 'Save Changes' : 'Edit Grades'}
                </button>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Course</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Class</th>
                        {STANDARD_EXAM_ORDER.map((exam, index) => (
                            <th key={index} className="text-left py-3 px-4 font-medium text-gray-700">
                                {exam}
                            </th>
                        ))}
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Average</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {gradesData.map((student, index) => (
                        <tr key={student.studentId} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                            <td className="py-2 pl-4 pr-2">
                                <div className="flex items-center space-x-3">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={student.avatar}
                                        alt={student.studentName}
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.studentName)}&background=6366f1&color=fff&size=32`;
                                        }}
                                    />
                                    <div>
                                        <p className="font-medium">{student.studentName}</p>
                                        <p className="text-xs text-gray-500">ID: {student.studentId}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-2 pl-4 pr-2 text-gray-700">{student.courseName}</td>
                            <td className="py-2 pl-4 pr-2">{student.class}</td>
                            {STANDARD_EXAM_ORDER.map((exam, examIndex) => (
                                <td key={examIndex} className="py-2 pl-4 pr-2">
                                    {editMode ? (
                                        <input
                                            type="number"
                                            value={student.grades[exam] ?? ''}
                                            onChange={(e) => handleGradeChange(student.studentId, exam, e.target.value)}
                                            className="w-20 p-1 border rounded"
                                            min="0"
                                            max="100"
                                            placeholder="-"
                                            onKeyPress={(e) => {
                                                // Prevent non-numeric input
                                                if (!/[0-9]/.test(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        />
                                    ) : (
                                        student.grades[exam] !== null ? 
                                            <AverageDisplay value={student.grades[exam]} size="md" /> : 
                                            '-'
                                    )}
                                </td>
                            ))}
                            <td className="py-2 pl-4 pr-2">
                                {student.average !== null ? <AverageDisplay value={student.average} size="md" /> : '-'}
                            </td>
                            <td className="py-2 pl-4 pr-2">{student.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GradesTableTeacher; 
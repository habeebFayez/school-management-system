import React, { useState, useEffect } from 'react'
import Layout from '../../components/layouts/Layout';
import { courses, exams } from '../../data/mockData';
import AverageDisplay from "../../components/shared/AverageDisplay"
import { useAuth } from '../../contexts/AuthContext';

// Define standard exam order and types (re-defined locally for self-containment)
const STANDARD_EXAM_ORDER = [
    'First Exam',
    'Second Exam',
    'Midterm Exam',
    'Assignments',
    'Final Exam'
];

// Helper function to get grades for a student in a given course (re-defined locally)
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
            const assessmentPercentage = Math.round((studentGrade.score / exam.Total_Points) * 100);
            grades[standardType] = assessmentPercentage;
            totalStudentScore += studentGrade.score;
        }
    });

    // Calculate average based on total raw score for this course
    const courseExamsWithPoints = studentExams.filter(exam => exam.Total_Points > 0);
    const totalCoursePoints = courseExamsWithPoints.reduce((sum, exam) => sum + exam.Total_Points, 0);

    const average = totalCoursePoints > 0 ? Math.min(Math.round((totalStudentScore / totalCoursePoints) * 100), 100) : null;
    const status = average !== null ? (average >= 50 ? "Passed" : "Failed") : "N/A";

    return { ...grades, average, status };
};

const Grades = () => {
  const { user : authUser } = useAuth();
  const [studentGradesData, setStudentGradesData] = useState([]);

  useEffect(() => {
    if (!authUser) return;

    const currentStudentId = authUser.id;

    const studentCourses = courses.filter(course => course.students.some(s => s.id === currentStudentId));

    const gradesDataForDisplay = [];

    studentCourses.forEach(course => {
      const studentGrades = getStudentGrades(currentStudentId, course.id, exams);
    
      const rowData = {
        Course: course.name,
        ...Object.fromEntries([
            ...Object.keys(studentGrades)
            .filter(key => !['average', 'status'].includes(key))
            .map(type => {
                if (type === 'Assignments') {
                    // Generate random data for Assignments (between 0 and 100)
                    const randomGrade = Math.floor(Math.random() * 101);
                    return [type, <AverageDisplay value={randomGrade} size="md" />];
                } else {
                    // Use actual data for other assessment types
                    return [type, studentGrades[type] !== null ? <AverageDisplay value={studentGrades[type]} size="md" /> : '-'];
                }
            }),
            ['Midterm Exam', studentGrades['Midterm Exam'] !== null ? <AverageDisplay value={studentGrades['Midterm Exam']} size="md" /> : '-'],
        ]),
        Average: studentGrades.average !== null ? <AverageDisplay value={studentGrades.average} size="md" /> : '-',
        Status: studentGrades.status !== "N/A" ? studentGrades.status : '-',
      };

      gradesDataForDisplay.push(rowData);
    });

    setStudentGradesData(gradesDataForDisplay);

  }, [authUser, courses, exams]);

  return (
    <Layout currentPage={'Grades'}>
      <div className='px-12 bg-white ' >
        <div className=" px-0">

          <div className="mt-2 space-y-4 ">
          <h1 className="text-2xl font-semibold text-black m-6">Grades</h1>

             {studentGradesData.map((courseData, index) => {
                 const courseColumns = [
                     ...Object.keys(courseData).filter(key => !['Course', 'Average', 'Status'].includes(key)),
                     'Average',
                     'Status',
                 ];

                 return (
                    <div key={index} className="overflow-x-auto border text-sm rounded-lg p-4 shadow-md">
                         <h4 className="text-md font-semibold mb-2">{`${courseData.Course}`}</h4>
                         <table className="w-full">
                             <thead>
                                 <tr className="border-b border-gray-200 bg-gray-100">
                                     {courseColumns.map((column, colIndex) => (
                                         <th key={colIndex} className="text-left py-2 px-3 font-medium text-gray-700">
                                             {column}
                                         </th>
                                     ))}
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     {courseColumns.map((column, colIndex) => (
                                         <td key={colIndex} className="py-2 px-3 text-gray-700">
                                             {courseData[column]}
                                         </td>
                                     ))}
                                 </tr>
                             </tbody>
                         </table>
                    </div>
                 );
            })}
          </div>
        </div>
      </div>


    </Layout>
  )
}
export default Grades;

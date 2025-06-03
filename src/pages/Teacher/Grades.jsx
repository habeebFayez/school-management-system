import React, { useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import { courses, users } from '../../data/mockData'; // Import courses and users for filters
import { GradesTableTeacher } from '../../components/teacher/GradesTableTeacher'; // Import the new grades table component

const Grades = () => {
  // State for Filters and Search (similar to Attendance page)
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // State for available classes based on selected course
  const [availableClasses, setAvailableClasses] = useState([]);

  // Effect to update available classes when a course is selected
  useEffect(() => {
    if (selectedCourse && selectedCourse !== 'All') {
      const course = courses.find(c => c.name === selectedCourse);
      if (course) {
        // Get unique classes for the selected course
        const courseClasses = [...new Set(course.classes)];
        setAvailableClasses(['All', ...courseClasses]);
      } else {
        setAvailableClasses(['All']); // Should not happen if course exists
      }
    } else {
      // If no course or "All" is selected, get all unique classes from all courses
      const allUniqueClasses = [...new Set(courses.flatMap(course => course.classes || []))];
      setAvailableClasses(['All', ...allUniqueClasses]);
    }
    setSelectedClass('All'); // Reset class selection when course changes
  }, [selectedCourse]);


  return (
    <Layout currentPage={'Grades'}>
      <div className='px-12 w-full' >
        <h1 className="text-2xl font-bold text-black mb-6">Student Grades</h1>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex flex-wrap items-center gap-4">
                 {/* Search Input */}
                <div className="flex-grow max-w-xs">
                    <label htmlFor="search" className="sr-only">Search Students</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                        placeholder="Search by Name or ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Course Filter */}
                <div className="flex-grow max-w-xs">
                   <label htmlFor="courseFilter" className="sr-only">Filter by Course</label>
                   <select
                      id="courseFilter"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                   >
                      <option value="All">All Courses</option>
                      {courses.map(course => (
                          <option key={course.id} value={course.name}>{course.name}</option>
                      ))}
                   </select>
                </div>

                {/* Class Filter */}
                 <div className="flex-grow max-w-xs">
                    <label htmlFor="classFilter" className="sr-only">Filter by Class</label>
                    <select
                      id="classFilter"
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                    >
                       <option value="All">All Classes</option>
                       {availableClasses.map((className) => (
                          <option key={className} value={className}>
                            {className}
                          </option>
                        ))}
                    </select>
                 </div>
            </div>
        </div>

        {/* Grades Table */}
        <GradesTableTeacher 
            selectedCourse={selectedCourse} 
            selectedClass={selectedClass} 
            searchTerm={searchTerm}
        />

      </div>
    </Layout>
  )
};

export default Grades;

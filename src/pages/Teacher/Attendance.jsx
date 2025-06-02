import React, { useState, useEffect } from 'react'
import Layout from '../../components/layouts/Layout';
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { attendanceRecords, courses } from '../../data/mockData'; // Import mock data
import AttendanceDaily from './AttendanceDaily'; // Import the existing AttendanceDaily page
import WeeklyAttendanceTable from '../../components/shared/WeeklyAttendanceTable'; // Import the new weekly table component

// Assuming AttendanceDaily.jsx had these imports and state
import { format } from 'date-fns';
import { useModal } from '../../contexts/ModalProvider';
import CreateNewAttendanceList from '../../components/teacher/CreateNewAttendanceList';


const Attendance = () => {
  // Existing state from provided Attendance.jsx
  // const [activeTab, setActiveTab] = useState("3A") // Keep for now, but might need adjustment
  // const [attendanceStatus, setAttendanceStatus] = useState( // This state structure is not used with mockData
  //   Array(6).fill().map(() => Array(10).fill(0))
  // )
  // const [selectedWeek, setSelectedWeek] = useState("Week 1,2") // Not directly used with the new structure
  // const [currentDate, setCurrentDate] = useState(new Date(2024, 4)) // Used for month navigation, maybe keep for context?
  // const [currentPage, setCurrentPage] = useState(1) // Not used with the new table approach

  // State for view selection (Day/Week)
  const [viewType, setViewType] = useState('day'); // 'day' or 'week'

  // State for Daily View (from previous AttendanceDaily.jsx logic)
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedCurrentDate = format(currentDate, 'yyyy-MM-dd'); // Format for input and filtering

  // State for Weekly View (new)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // State for Filters and Search (from previous AttendanceDaily.jsx logic)
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // State for available classes based on selected course (from previous AttendanceDaily.jsx logic)
  const [availableClasses, setAvailableClasses] = useState([]);

  // Modal state for creating new attendance list
  const {  showModal, hideModal } = useModal();

  // Effect to update available classes when a course is selected (from previous AttendanceDaily.jsx logic)
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

  // Check if the current day (for daily view) is a weekend
  const isWeekend = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // Sunday is 0, Saturday is 6
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  // Load students for the Daily Attendance Table based on current filters and date
  const loadDailyStudents = () => {
      const filteredByDate = attendanceRecords.filter(record => record.date === formattedCurrentDate);

      const filteredByCourse = selectedCourse === 'All'
          ? filteredByDate
          : filteredByDate.filter(record => record.courseName === selectedCourse);

      const filteredByClass = selectedClass === 'All'
          ? filteredByCourse
          : filteredByCourse.filter(record => record.className === selectedClass);

      const filteredBySearch = searchTerm
          ? filteredByClass.filter(record =>
              record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              String(record.studentId).includes(searchTerm)
            )
          : filteredByClass;

      // Deduplicate students, keeping one record per student for the date
      const uniqueStudentsMap = new Map();
      filteredBySearch.forEach(record => {
           // Prioritize 'attended' if multiple records exist for a student on the same day (shouldn't happen with current mock structure but good for robustness)
          if (!uniqueStudentsMap.has(record.studentId) || record.status === 'attended') {
             uniqueStudentsMap.set(record.studentId, record);
          }
      });

      const uniqueStudents = Array.from(uniqueStudentsMap.values());


      // Sort students by name A-Z
      const sortedStudents = uniqueStudents.sort((a, b) => a.studentName.localeCompare(b.studentName));

      return sortedStudents;
  };

   // Load students for the Weekly Attendance Table based on current filters and date range
   const loadWeeklyStudents = () => {
       if (!startDate || !endDate) return [];

       const start = new Date(startDate);
       const end = new Date(endDate);

       // Filter records by date range
       const filteredByDateRange = attendanceRecords.filter(record => {
           const recordDate = new Date(record.date);
           return recordDate >= start && recordDate <= end;
       });

       const filteredByCourse = selectedCourse === 'All'
           ? filteredByDateRange
           : filteredByDateRange.filter(record => record.courseName === selectedCourse);

       const filteredByClass = selectedClass === 'All'
           ? filteredByCourse
           : filteredByCourse.filter(record => record.className === selectedClass);

       const filteredBySearch = searchTerm
           ? filteredByClass.filter(record =>
               record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
               String(record.studentId).includes(searchTerm)
             )
           : filteredByClass;

       // Group attendance records by student and date for weekly view
       const weeklyData = {};
       filteredBySearch.forEach(record => {
           if (!weeklyData[record.studentId]) {
               weeklyData[record.studentId] = {
                   studentId: record.studentId,
                   studentName: record.studentName,
                   avatar: record.avatar,
                   courseName: record.courseName, // Keep course/class for display/filtering
                   className: record.className,
                   attendanceByDate: {}
               };
           }
           weeklyData[record.studentId].attendanceByDate[record.date] = record;
       });

       const studentsForWeeklyView = Object.values(weeklyData);

        // Sort students by name A-Z
        const sortedStudents = studentsForWeeklyView.sort((a, b) => a.studentName.localeCompare(b.studentName));


       return sortedStudents;
   };


  // Handler for saving a new attendance list from the modal
  const handleSaveNewAttendanceList = (newRecords) => {
      console.log("Attempting to save new attendance list:", newRecords);

      hideModal(); // Close the modal after saving
  };




  return (
    <Layout currentPage={'Attendance'}>
      <div className="min-h-screen bg-white w-full px-6 py-2">
      {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Attendance</h1> {/* Changed title slightly */}
       
         {/* View Type Selection (Day/Week) */}
         <div className="flex gap-4 mb-6">
        
           <button
                className={`px-4 py-1 rounded ${viewType === 'day' ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setViewType('day')}
            >
                Daily View
            </button>
            <button
                className={`px-4 py-1 rounded ${viewType === 'week' ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setViewType('week')}
            >
                Weekly View
            </button>
        </div>
        </div>

        {/* Attendance Table Container */}
        <div className="bg-white rounded-lg">
           {viewType === 'day' ? (
               isWeekend(formattedCurrentDate) ? (
                   <div className="p-6 text-center text-xl text-gray-600">It's the weekend! No attendance data for {formattedCurrentDate}.</div>
               ) : (
                   <AttendanceDaily 
                       attendanceData={loadDailyStudents()} 
                       selectedDate={formattedCurrentDate}
                       searchTerm={searchTerm}
                       selectedCourse={selectedCourse}
                       selectedClass={selectedClass}
                   />
               )
           ) : (
            <>
            
             {/* Filters and Date Selection */}
        <div className="bg-white rounded-lg p-2 mb-6">
            <div className="flex flex-wrap items-center gap-4 mb-6">
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

                 {/* Date Selection based on View Type */}
                 {viewType === 'day' ? (
                      <div className="flex-grow max-w-xs">
                           <label htmlFor="dailyDate" className="sr-only">Select Date</label>
                           <input
                               type="date"
                               id="dailyDate"
                               value={formattedCurrentDate}
                               onChange={(e) => setCurrentDate(new Date(e.target.value))}
                               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                           />
                      </div>
                 ) : (
                      <div className="flex items-center gap-4 flex-grow max-w-sm">
                           <div>
                               <label htmlFor="startDate" className="sr-only">From Date</label>
                               <input
                                   type="date"
                                   id="startDate"
                                   value={startDate}
                                   onChange={(e) => setStartDate(e.target.value)}
                                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                               />
                           </div>
                           <span>to</span>
                           <div>
                                <label htmlFor="endDate" className="sr-only">To Date</label>
                                <input
                                   type="date"
                                   id="endDate"
                                   value={endDate}
                                   onChange={(e) => setEndDate(e.target.value)}
                                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                                />
                           </div>
                      </div>
                 )}

            </div>
        </div>
        </>
           )}
        </div>

      </div>



    </Layout>
  )
}

export default Attendance;

// Keeping ClassTab component for now, but review its usage later
const ClassTab = ({ label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 font-medium rounded-[5px] transition-all duration-200 ${
      active
        ? "bg-[#10062B] text-white"
        : "text-[#565656] hover:text-white hover:bg-[#4F0129]"
    }`}
  >
    {label}
  </button>
)
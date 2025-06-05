import Layout from '../../components/layouts/Layout';
import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import ExamCard from '../../components/shared/ExamCard';
import { exams , courses } from '../../data/mockData';
import { useModal } from '../../contexts/ModalProvider';
import { ExamGradesTable } from '../../components/shared/ExamGradesTable';
import { useAuth } from '../../contexts/AuthContext';
import ExamResultsModalContent from '../../components/student/ExamResultsModalContent';

export const Exams  = () => {
  const { showModal, hideModal } = useModal();
  const { user } = useAuth();

  // Exams state

  const studentCourses = courses.filter(course=>course.students.some(st=>st.id===user.id))
  const StudentExams =exams.filter(exam => exam.course.students.some(st=>st.id===user.id));


  
  // State for search/filter controls
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [activeTab, setActiveTab] = useState('previous');

  // Get unique courses and classes for filter dropdowns
  const coursesList = [ ...Array.from(new Set(exams.map(e => e.course?.name).filter(Boolean)))];
  

  // Filter exams based on search, course, class, and tab (previous/upcoming)
  const filteredExams = StudentExams.filter(exam => {
    const matchesSearch =
    (exam.title!=='Assignment') &&
      (exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (exam.course?.name || '').toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCourse = selectedCourse === 'All' || exam.course?.name === selectedCourse;
    const matchesClass = selectedClass === 'All' || (exam.course?.classes || []).includes(selectedClass);

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Midnight of today

    const examDate = new Date(exam.date);

    const isPrevious = examDate < todayStart;
    const isUpcoming = examDate >= todayStart;

    return matchesSearch && matchesCourse && matchesClass &&
      (activeTab === 'previous' ? isPrevious : isUpcoming);
  });

  // Handler for details (optional, can be expanded)
  const handleCheckDetails = (exam) => {
    showModal(
      <ExamResultsModalContent exam={exam} onClose={hideModal} />
    )
  };





  return (
    <Layout currentPage={'Exams'}>
      
      <div className="bg-white rounded-lg p-6 text-sm">
        <div className="max-w-7xl mx-auto">
          {/* Header with page title and create button */}
          <div className="flex items-center justify-between mb-6 ">
            <h1 className="text-3xl font-bold text-gray-900">Exams List</h1>
          </div>

          {/* Search and Filters Section */}
          <div className="flex gap-10 mb-6 justify-end items-center">
            <div className="flex-1">
              <div className="relative w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-8 pl-10 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
           
            {/* Select Course Dropdown */}
            <div className='flex gap-4 h-fit items-center '>
              <label className=" text-md font-semibold">Courses :</label>
              <select className='bg-gray-200 h-8 rounded-md cursor-pointer' value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                <option value="All">All</option>
                {studentCourses.map(course => (
                  <option key={course.id} value={course.name}>{course.name}</option>
                ))}
              </select>
            </div>
             {/* Select Class Dropdown */}
             <div className='flex gap-4 h-fit items-center '>
              <label className=" text-md font-semibold">Classes :</label>
              <select  className='bg-white h-8 min-w-36 rounded-md  border cursor-pointer' value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                <option value="All">{user.class}</option>
                
              </select>
            </div>
          </div>

          {/* Tabs for Previous and Upcoming Exams */}
          <div className="flex gap-4 mb-8   ">
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-8 py-2 rounded-lg font-medium w-1/2 ${
                activeTab === 'previous'
                  ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white'
                  : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-100'
              }`}
            >
              Previous Exams
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-2 rounded-lg font-medium w-1/2 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white'
                  : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-100'
              }`}
            >
              Upcoming Exams
            </button>
          </div>

          {/* Exams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => (
              <ExamCard
                key={exam.id}
                exam={exam}
                isPrevious={activeTab === 'previous'}
                onCheckDetails={handleCheckDetails}
                user={user}
              />
            ))}
          </div>

          {/* Message if no exams match the filters */}
          {filteredExams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No Exams found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      
    </Layout>
  )
}
export default Exams;

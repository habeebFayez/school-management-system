import React, { useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import { Search } from 'lucide-react';
import { assignments } from '../../data/assignmentsData';
import { useModal } from '../../contexts/ModalProvider';
import { AssignmentDetailsModal } from '../../components/shared/AssignmentDetailsModal';
import { StudentAssignmentCard } from '../../components/Student/StudentAssignmentCard';
import { useAuth } from '../../contexts/AuthContext';
import { useSearchParams } from 'react-router-dom';

const Assignments = () => {
  const { user } = useAuth();
  const { showModal, hideModal } = useModal();
  const [searchParams] = useSearchParams();

  // State for search/filter controls
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // Handle search parameter from URL
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
      // Set tab to upcoming if the assignment is in the future
      const assignment = assignments.find(a => 
        a.title.toLowerCase() === searchFromUrl.toLowerCase()
      );
      if (assignment) {
        const deadline = new Date(assignment.deadline);
        const now = new Date();
        setActiveTab(deadline >= now ? 'upcoming' : 'previous');
      }
    }
  }, [searchParams]);

  // Get unique courses and class for filter dropdowns
  const courses = assignments
  .map(assignment => assignment.course)
  .filter(course => course && course.classes && course.classes.includes(user.class))
  .map(course => course.name);


  // This Week Assignments: assignments with deadline in next 7 days
  const now = new Date();
  const weekFromNow = new Date(now);
  weekFromNow.setDate(now.getDate() + 7);
  const thisWeekAssignments = assignments.filter(a => {
    const deadline = new Date(a.deadline);
    return deadline >= now && deadline <= weekFromNow;
  });

  // Filter assignments based on search, course, class, and tab (previous/upcoming)
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.assignmentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'All' || assignment.courseName === selectedCourse;
    const matchesClass = selectedClass === 'All' || assignment.classId === selectedClass;
    
    const now = new Date();
    const deadline = new Date(assignment.deadline);
    const isPrevious = deadline < now;
    const isUpcoming = deadline >= now;
    
    return matchesSearch && matchesCourse && matchesClass && 
           (activeTab === 'previous' ? isPrevious : isUpcoming);
  });

  // Handlers for opening modals with the selected assignment
  const handleCheckDetails = (assignment) => {
    setSelectedAssignment(assignment);
    showModal(
      <AssignmentDetailsModal
        isOpen={true}
        onClose={hideModal}
        assignment={assignment}
      />
    );
  };

  const handleSubmitAssignment = (assignment) => {
 setSelectedAssignment(assignment);
    showModal(
      <AssignmentDetailsModal
        isOpen={true}
        onClose={hideModal}
        assignment={assignment}
      />
    );  };

  return (
    <Layout search={false} currentPage={'Assignments'}>
      <div className="bg-gray-50 p-6 text-sm">
        <div className="max-w-7xl mx-auto">
          {/* Header with page title */}
          <div className="flex items-center justify-between mb-6 ">
            <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          </div>

          {/* This Week Assignments Section */}
          <div className="mb-8">
            <div className="text-lg font-semibold mb-2">This Week Assignments:</div>
            <div className="flex gap-6 overflow-x-auto py-2">
              {thisWeekAssignments.length > 0 ? (
                thisWeekAssignments.map((assignment) => (
                  <div key={assignment.id} className="min-w-[320px] max-w-xs flex-shrink-0">
                    <StudentAssignmentCard
                      assignment={assignment}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No assignments due this week.</div>
              )}
            </div>
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
            {/* Select Class Dropdown */}
            <div className='flex gap-4 h-fit items-center '>
              <label className=" text-md font-semibold">Classes :</label>
              <select className='bg-gray-300 h-8 rounded-md cursor-pointer' value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>                
                  <option key={user.class} value={user.class}>{user.class}</option>
                
              </select>
            </div>
            {/* Select Course Dropdown */}
            <div className='flex gap-4 h-fit items-center '>
              <label className=" text-md font-semibold">Courses :</label>
              <select className='bg-gray-300 h-8 rounded-md cursor-pointer' value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                <option value="All">All</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs for Previous and Upcoming Assignments */}
          <div className="flex gap-4 mb-8   ">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-2 rounded-lg font-medium w-1/2 ${activeTab === 'upcoming' ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-100'}`}
            >
              Upcoming Assignment's
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-8 py-2 rounded-lg font-medium w-1/2 ${activeTab === 'previous' ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-100'}`}
            >
              Previous Assignment's
            </button>
          </div>

          {/* Assignments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssignments.map((assignment) => (
              <StudentAssignmentCard
                key={assignment.id}
                assignment={assignment}
                onCheckDetails={handleCheckDetails}
                onSubmitAssignment={handleSubmitAssignment}
              />
            ))}
          </div>

          {/* Message if no assignments match the filters */}
          {filteredAssignments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No assignments found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Assignments;
import Layout from '../../components/layouts/Layout';
import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';

import { AssignmentCard } from '../../components/shared/AssignmentCard';
import { CreateAssignmentModal } from '../../components/shared/CreateAssignmentModal';
import { assignments } from '../../data/assignmentsData';
import { useModal } from '../../contexts/ModalProvider';

const Assignments = () => {
  const { showModal ,hideModal} = useModal();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [activeTab, setActiveTab] = useState('previous');
  
  // Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSubmissionsModalOpen, setIsSubmissionsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // Get unique courses and classes
  const courses = [ ...Array.from(new Set(assignments.map(a => a.courseName)))];
  const classes = [ ...Array.from(new Set(assignments.map(a => a.classId)))];

  // Filter assignments
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

  const handleCheckDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setIsDetailsModalOpen(true);
  };

  const handleCheckSubmissions = (assignment) => {
    setSelectedAssignment(assignment);
    setIsSubmissionsModalOpen(true);
  };

  const handleEditAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setIsEditModalOpen(true);
  };

  return (
    <Layout search={false} currentPage={'Assignments'}>
      <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 ">
          <h1 className="text-3xl font-bold text-gray-900">Assignment's</h1>
          <div className="flex items-center gap-4">
            <button 
             onClick={() =>
              showModal(
                <CreateAssignmentModal
                  isOpen={true}
                  onClose={hideModal}
                  />
              )
            }
            className="text-white flex bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 px-4 py-2 rounded-lg">
              <Plus className="w-6 h-6 mr-2" />
              Create Assignment
            </button>
            {/* <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <Search className="w-5 h-5 text-gray-500" />
            </div> */}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-10 mb-6 justify-end items-center">
        <div className="flex-1">
            <div className="relative w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" size={20} />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full  h-8 pl-10 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Select Class */}
          <div className='flex gap-4 h-fit items-center '>
          <label className=" text-md font-semibold">Classes :</label>
          <select className='bg-gray-300 h-8 rounded-md cursor-pointer' value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option   value="All">All</option>
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          </div>
          <div className='flex gap-4 h-fit items-center '>
          <label className=" text-md font-semibold">Courses :</label>
          <select  className='bg-gray-300 h-8 rounded-md cursor-pointer' value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="All">All</option>
            {courses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8   ">
          <button
            onClick={() => setActiveTab('previous')}
            className={`px-8 py-2 rounded-lg font-medium w-1/2 ${
              activeTab === 'previous'
                ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white'
                : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-100'
            }`}
          >
            Previous Assignment's
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-2 rounded-lg font-medium w-1/2 ${
              activeTab === 'upcoming'
                ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white'
                : 'bg-white text-gray-700 border border-gray-500 hover:bg-gray-100'
            }`}
          >
            Upcoming Assignment's
          </button>
        </div>

        {/* Assignments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onCheckDetails={handleCheckDetails}
              onCheckSubmissions={handleCheckSubmissions}
              onEdit={handleEditAssignment}
            />
          ))}
        </div>

        {filteredAssignments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No assignments found matching your criteria.</p>
          </div>
        )}
      </div>
    


     

     
    </div>
      
    </Layout>
  )
}

export default Assignments;

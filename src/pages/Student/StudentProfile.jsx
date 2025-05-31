import React, { useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import StatsCard from "../../components/shared/StatsCard";
import ProfileHeader from "../../components/student/ProfileHeader";
import { useAuth } from '../../contexts/AuthContext';
import Table from '../../components/shared/Table';
import AverageDisplay from "../../components/shared/AverageDisplay"
import {mockGrades} from '../../data/mockData';

import { useLocation } from 'react-router-dom';

import { Monitor, ChartNoAxesCombined,MessageCircleMore, LibraryBig, Award, Eye } from 'lucide-react';

 const StudentProfile  = () => {
  const location = useLocation();
  const { user: authUser } = useAuth();
  const user = location.state?.student || authUser;
 
  const stats = [
    {
      value: '95%',
      title: 'Grade Average Point',
      icon: <Award size={50} />,
    },
    {
      value: '05',
      title: 'Courses',
      icon: <LibraryBig size={50} />,
    },
    {
      value: '89%',
      title: 'Attendance Average  ',
      icon: <Monitor size={50} />,
    },
    {
      value: '95%',
      title: 'Performance',
      icon: <ChartNoAxesCombined  size={50} />,
    }
  ];
  
  const courses = [
    {
      course: "Calculus",
      attended: 85,
      absence: 10,
      approvedAbsence: 3,
      teacher: {
        name: 'Zehra Özkan',
        avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
      },
      status: "Normal"
    },
    {
      course: "Calculus",
      attended: 85,
      absence: 10,
      approvedAbsence: 3,
      teacher: {
        name: 'Zehra Özkan',
        avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
      },      
      status: "Normal"
    },
    {
      course: "Calculus",
      attended: 67,
      absence: 28,
      approvedAbsence: 0,
      teacher: {
        name: 'Zehra Özkan',
        avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
      },      
      status: "Under Average"
    },
    {
      course: "Calculus",
      attended: 85,
      absence: 10,
      approvedAbsence: 3,
      teacher: {
        name: 'Zehra Özkan',
        avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
      },      
      status: "Normal"
    },
    {
      course: "Calculus",
      attended: 85,
      absence: 10,
      approvedAbsence: 3,
      teacher: {
        name: 'Zehra Özkan',
        avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
      },
      status: "Normal"
    },
  ];
  const coursesColumns = ['Course', 'Attended', 'Absence', 'Approved Absence', 'Teacher', 'Status'];
  const parents = [
    {
      name: "Parent Name",
      contactNumber: "+905070406000",
      email: "email@example.com",
      preferredContact: "Phone Call",
      occupation: "Teacher",
      status: "Active"
    },
    {
      name: "Parent Name",
      contactNumber: "+905070406000",
      email: "email@example.com",
      preferredContact: "Phone Call",
      occupation: "NA",
      status: "NA"
    }
  ];
  const parentsColumns = ['Name', 'Contact Number', 'Email', 'Preferred Contact By ', 'Occupation', 'Status'];
  const columns = ['Course', '1st', '2nd','Assignments' ,'Final', 'Average', 'Status'];
  
  const transformedData = mockGrades.map(grade => ({
    Course: grade.course,
    '1st': grade.first ? <AverageDisplay value={grade.first} size="md" /> : <AverageDisplay value={null} size="md" />,
    '2nd': grade.second ? <AverageDisplay value={grade.second} size="md" /> : <AverageDisplay value={null} size="md" />,
    'Assignments': grade.assignment ? <AverageDisplay value={grade.assignment} size="md" /> : <AverageDisplay value={null} size="md" />,
    Final: grade.final ? <AverageDisplay value={grade.final} size="md" /> : <AverageDisplay value={null} size="md" />,
    Average: grade.average ? <AverageDisplay value={grade.average} size="md" /> : <AverageDisplay value={null} size="md" />,
    Status: grade.status
  }));
  const actionComponent = (
    <button className="p-2 hover:bg-gray-100 -ml-4 rounded-full transition-colors">
      <div className="bg-gradient-to-br from-[#10062B] to-[#4F0129] flex justify-center items-center h-8 w-8 rounded-full hover:opacity-90">
        <Eye size={16} color="white" />
      </div>
    </button>
  );

  return (
    <Layout currentPage={'StudentProfile'}>
      <div className='w-full px-12 ' >
      <ProfileHeader user={user}/>
      {/* Status Cards */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 h-fit gap-2 my-4">   
      {stats.map((stat, index) => (
        <div key={index} >
        <StatsCard
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color="bg-gradient-to-br from-[#10062B] to-[#4F0129] min-h-32"
        />
        </div>
      ))}
        </div>
      {/* Tables  */}
      <div className=" px-0">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 ">
         {/*   Schedule Table  */}
         <Table data={parents} title={'Parents'} columns={parentsColumns} user={user} 
         actionChil={
                    <div 
                        className="w-7 h-7 cursor-pointer transition-colors bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full flex items-center justify-center hover:opacity-80">
                        <MessageCircleMore color='white' size={19}/>
                     </div>
                  }
         />
         {/* Courses Table */}
         <Table data={courses} title={'Courses '} columns={coursesColumns} user={user}/>
        
        </div>
         {/* Grades Table */}
        <div className="mt-2 space-y-2  ">
      <Table 
          data={transformedData}
          title="Grades"
          columns={columns}
          user={{ role: 'student' }}
        />
          </div>
         
        
        
      </div>
      </div>
    </Layout>
  )
}
export default StudentProfile ;
import React from 'react';
import Layout from '../../components/layouts/Layout';
import StatsCard from "../../components/shared/StatsCard";
import ProfileHeader from "../../components/student/ProfileHeader";
import { useAuth } from '../../contexts/AuthContext';
import Table from '../../components/shared/Table';
import AnnouncementCard from "../../components/teacher/AnnouncementCard";


import { Monitor, ChartNoAxesCombined,MessageCircleMore, LibraryBig, Award } from 'lucide-react';

 const StudentProfile  = () => {
  const { user } = useAuth();

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

  return (
    <Layout currentPage={'StudentProfile'}>
      <div className='px-12 ' >
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
        
        <div className="mt-4 space-y-2 ">

          <AnnouncementCard 
            title="CO301 | Exam Hall List Updated"
            content="Dear Students, The attached list contains information about the exam hall where you will take the exam. Each student must take the exam in the hall specified in the list. Do not forget to bring your pencils (not pen) and erasers along with your student ID cards when you come to the exam."
            fileName="CO301-Midterm Exam Hall Information1.pdf"
            fileSize="169.5 KB"
            dateAdded="2025-04-10"
            lastUpdate="2025-04-10 19:38:52"
            isUpdated={true}
            user={user}

          />
          
          <AnnouncementCard 
            title="CO301 | Exam Hall List"
            content="Dear Students, The attached list contains information about the exam hall where you will take the exam. Each student must take the exam in the hall specified in the list. Do not forget to bring your pencils (not pen) and erasers along with your student ID cards when you come to the exam."
            dateAdded="2025-04-10"
            lastUpdate="2025-04-10"
            isUpdated={false}
            user={user}
          />
           {user?.role === 'teacher'&& 
          <div className="mt-2 flex justify-center">
          <button className=" w-full bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 ">
            Send New Announcement
          </button>
        </div>}
          </div>
         
        
        
      </div>
      </div>
    </Layout>
  )
}
export default StudentProfile ;
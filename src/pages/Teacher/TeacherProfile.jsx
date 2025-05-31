import React from 'react';
import Layout from '../../components/layouts/Layout';
import StatsCard from "../../components/shared/StatsCard";
import ProfileHeader from "../../components/teacher/ProfileHeader";
import { useAuth } from '../../contexts/AuthContext';
import Table from '../../components/shared/Table';
import AnnouncementCard from "../../components/teacher/AnnouncementCard";


import { Monitor, ListChecks, LibraryBig, ChartNoAxesCombined } from 'lucide-react';
import { useLocation } from 'react-router-dom';

 const TeacherProfile  = () => {
const location = useLocation();
const { user: authUser } = useAuth();
const user = location.state?.teacher || authUser;

  const stats = [
    {
      value: '120',
      title: 'Students',
      icon: <ListChecks  size={50} />,
    },
    {
      value: '05',
      title: 'Courses',
      icon: <LibraryBig size={50} />,
    },
    {
      value: '500',
      title: 'Total given Lessons',
      icon: <Monitor size={50} />,
    },
    {
      value: '95%',
      title: 'Performance',
      icon: <ChartNoAxesCombined size={50} />,
    }
  ];
  const courses = [
    { no: '01', title: 'Course', type: 'Online', resources: 'Link' },
    { no: '02', title: 'Course', type: 'F2F', resources: 'Link' },
    { no: '03', title: 'Course', type: 'F2F', resources: 'Link' },
    { no: '04', title: 'Course', type: 'Online', resources: 'Link' },
    { no: '05', title: 'Course', type: 'Online', resources: 'Link' },
    { no: '06', title: 'Course', type: 'Online', resources: 'Link' },
    { no: '07', title: 'Course', type: 'Online', resources: 'Link' }
  ];
  const coursesColumns = ['No', 'Title', 'Type', 'Resources'];
  const schedule = [
    { day: 'Mon', from: '11:00', to: '14:00' },
    { day: 'Tue', from: '11:00', to: '14:00' },
    { day: 'Wed', from: '11:00', to: '14:00' },
    { day: 'Thu', from: '11:00', to: '14:00' },
    { day: 'Fri', from: '11:00', to: '14:00' },
    { day: 'Sat', from: 'NA', to: 'NA' },
    { day: 'Sun', from: 'NA', to: 'NA' }
  ];
  const scheduleColumns = ['Day', 'From', 'To'];

  return (
    <Layout currentPage={'UserProfile'}>
      <div className='px-12 w-full ' >
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
          {/* Courses Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <Table isActions={false} data={courses} title={'Classes Exams Performance'} columns={coursesColumns} user={user}/>
        
         {/*   Schedule Table  */}
          <Table isActions={false}  data={schedule} title={'Free Time Schedule'} columns={scheduleColumns} user={user}/>
      
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
export default TeacherProfile;

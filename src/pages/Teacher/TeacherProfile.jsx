import React from 'react';
import TeacherLayout from '../../components/layouts/TeacherLayout';
import StatsCard from "../../components/shared/StatsCard";
import ProfileHeader from "../../components/shared/ProfileHeader";
import { useAuth } from '../../contexts/AuthContext';

import { Users, BookOpen, FileText, ClipboardCheck } from 'lucide-react';

 const TeacherProfile  = () => {
const { user } = useAuth();

  const stats = [
    {
      value: '120',
      title: 'Students',
      icon: <ClipboardCheck size={50} />,
    },
    {
      value: '05',
      title: 'Courses',
      icon: <ClipboardCheck size={50} />,
    },
    {
      value: '500',
      title: 'Total given Lessons',
      icon: <ClipboardCheck size={50} />,
    },
    {
      value: '95%',
      title: 'Performance',
      icon: <ClipboardCheck size={50} />,
    }
  ];

  return (
    <TeacherLayout currentPage={'USer NAme'}>
        <div className="h-screen ">
        
      <ProfileHeader user={user}/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 h-fit gap-2 mx-2 my-4">   
      {stats.map((stat, index) => (
        <div key={index} >
        <StatsCard
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
        />
        </div>
      ))}
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* <CoursesTable />
          <ScheduleTable /> */}
        </div>
        
        <div className="mt-8 space-y-6">
          {/* <AnnouncementCard 
            title="CO301 | Exam Hall List Updated"
            content="Dear Students, The attached list contains information about the exam hall where you will take the exam. Each student must take the exam in the hall specified in the list. Do not forget to bring your pencils (not pen) and erasers along with your student ID cards when you come to the exam."
            fileName="CO301-Midterm Exam Hall Information1.pdf"
            fileSize="169.5 KB"
            dateAdded="2025-04-10"
            lastUpdate="2025-04-10 19:38:52"
            isUpdated={true}
          />
          
          <AnnouncementCard 
            title="CO301 | Exam Hall List"
            content="Dear Students, The attached list contains information about the exam hall where you will take the exam. Each student must take the exam in the hall specified in the list. Do not forget to bring your pencils (not pen) and erasers along with your student ID cards when you come to the exam."
            dateAdded="2025-04-10"
            lastUpdate="2025-04-10"
            isUpdated={false}
          /> */}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-purple-900 to-purple-700 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-800 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Send New Announcement
          </button>
        </div>
      </div>
    </div>
    </TeacherLayout>
  )
}
export default TeacherProfile;

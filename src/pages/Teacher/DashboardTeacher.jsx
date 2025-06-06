import React from 'react';
import Layout from '../../components/layouts/Layout';
import StatsCard from "../../components/shared/StatsCard";
import { Users, BookOpen, FileText, ClipboardCheck } from 'lucide-react';
import FastActions from '../../components/shared/FastActions';
import PerformanceCard from '../../components/teacher/PerformanceCard';
import StudentAttendanceChart from '../../components/teacher/StudentAttendanceChart';
import StudentsInteractionChart from '../../components/teacher/StudentsInteractionChart';
import SchoolCalendar from '../../components/teacher/SchoolCalendar';
import { useAuth } from '../../contexts/AuthContext';

import AnnouncementsSideList from '../../components/teacher/AnnouncementsSideList';
import Table from '../../components/shared/Table';

export default function DashboardTeacher() {
  const { user } = useAuth();

  const examData = [
    { course: 'Calculus', id: '123456789', performance: '90%', exam: 'Final' },
    { course: 'Calculus', id: ' 123456789', performance: '90%', exam: 'Final' },
    { course: 'Calculus', id: ' 123456789', performance: '90%', exam: 'Final' },
    { course: 'Calculus', id: ' 123456789', performance: '90%', exam: 'First' },
    { course: 'Calculus', id: ' 123456789', performance: '90%', exam: 'Quiz' },
    { course: 'Calculus', id: ' 123456789', performance: '90%', exam: 'Final' },
  ];

  const columns = ['Course', 'ID', 'Performance', 'Exam'];

  return (
    <Layout currentPage={'Dashboard'}>
     <div className="flex justify-between gap-2 ">
      <div>
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 h-fit gap-2 mx-2 mb-2">   
         <StatsCard
          title="Students"
          value="84"
          icon={<Users size={50} />}
          color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
        />
        <StatsCard
          title="Lessons"
          value="84"
          icon={<BookOpen size={50} />}
          color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
        />
        <StatsCard
          title="Unmarked Exams"
          value="26"
          icon={<FileText size={50} />}
          color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
        />
        <StatsCard
          title="Unchecked Assignment"
          value="42"
          icon={<ClipboardCheck size={50} />}
          color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
        />
     </div>
        {/* Analytics Section */}
        <div className="grid grid-cols-12 gap-2 mb-2 ">
        {/* Student Weekly Attendance - Full Width */}
        <div className="col-span-12 bg-white rounded-xl">
          <StudentAttendanceChart />
        </div>
        
        {/* Calendar and Students Interaction */}
        <div className="col-span-12 md:col-span-6 bg-white rounded-xl">
        <SchoolCalendar />
        </div>
        <div className="col-span-12 md:col-span-6 bg-white rounded-xl">
        <StudentsInteractionChart />
        </div>
      

        {/* Table */}
        <div className="col-span-12 md:col-span-12 bg-white rounded-xl ">
        <Table data={examData} title={'Classes Exams Performance'} columns={columns}/>
        </div>
        
      </div>
 

        </div>
         {/* Right Sidebar */}
  <div className="col-span-2 space-y-2 w-2/5 ">
          <FastActions user={user} colorButton={'bg-gradient-to-br from-[#10062B] to-[#4F0129]'} />
          <PerformanceCard />
          <AnnouncementsSideList />
        </div>
        </div>
    </Layout>
  );
}

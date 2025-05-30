// DashboardStudent.jsx
// This page is the main dashboard for students, showing stats, charts, calendar, and announcements.
// It provides a quick overview of the student's academic status and recent activity.

import React from 'react';
import Layout from '../../components/layouts/Layout';
import StatsCard from "../../components/shared/StatsCard";
import { Users, BookOpen, FileText, ClipboardCheck } from 'lucide-react';
import FastActions from '../../components/shared/FastActions';
import StudentAttendanceChart from '../../components/teacher/StudentAttendanceChart';
import StudentsInteractionChart from '../../components/teacher/StudentsInteractionChart';
import SchoolCalendar from '../../components/teacher/SchoolCalendar';
import AnnouncementsSideList from '../../components/student/AnnouncementsSideList';
import Table from '../../components/shared/Table';

export default function DashboardStudent() {
  // Example data for the recent exams table
  const examData = [
    { course: 'Calculus', id: '123456789', performance: '90%', exam: 'Final' },
    { course: 'Physics', id: '123456789', performance: '85%', exam: 'Midterm' },
    { course: 'Chemistry', id: '123456789', performance: '95%', exam: 'Quiz' },
  ];

  const columns = ['Course', 'ID', 'Performance', 'Exam'];

  return (
    <Layout currentPage={'Dashboard'}>
      <div className="flex justify-between gap-2">
        <div>
          {/* Status Cards: Show quick stats for the student */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 h-fit gap-2 mx-2 mb-2">
            <StatsCard
              title="Courses"
              value="6"
              icon={<BookOpen size={50} />}
              color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
            />
            <StatsCard
              title="Assignments"
              value="12"
              icon={<FileText size={50} />}
              color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
            />
            <StatsCard
              title="Exams"
              value="4"
              icon={<ClipboardCheck size={50} />}
              color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
            />
            <StatsCard
              title="Attendance"
              value="95%"
              icon={<Users size={50} />}
              color="bg-gradient-to-br from-[#10062B] to-[#4F0129]"
            />
          </div>

          {/* Analytics Section: Attendance chart, calendar, and interaction chart */}
          <div className="grid grid-cols-12 gap-2 mb-2">
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

            {/* Table of recent exams */}
            <div className="col-span-12 md:col-span-12 bg-white rounded-xl">
              <Table data={examData} title={'Recent Exams Performance'} columns={columns}/>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Fast actions and announcements */}
        <div className="col-span-2 space-y-2 w-2/5">
          <FastActions colorButton={'bg-gradient-to-br from-[#10062B] to-[#4F0129]'} />
          <AnnouncementsSideList />
        </div>
      </div>
    </Layout>
  );
}

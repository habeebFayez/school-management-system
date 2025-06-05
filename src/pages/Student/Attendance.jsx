import React, { useMemo } from 'react';
import Layout from '../../components/layouts/Layout';
import { attendanceRecords, courses } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';
import { Eye } from 'lucide-react';
import AverageDisplay from '../../components/shared/AverageDisplay';

const getStatus = (percent) => {
  if (percent >= 0.85) return { label: 'Good', color: 'bg-green-100 text-green-700' };
  if (percent >= 0.7) return { label: 'Warning', color: 'bg-yellow-100 text-yellow-700' };
  return { label: 'Critical', color: 'bg-red-100 text-red-700' };
};

const Attendance = () => {
  const { user } = useAuth();

  // Aggregate attendance for the logged-in student
  const attendanceByCourse = useMemo(() => {
    const result = {};
    attendanceRecords.forEach(record => {
      record.classes.forEach(cls => {
        cls.students.forEach(stu => {
          if (stu.studentId === user.id) {
            if (!result[record.courseId]) {
              result[record.courseId] = {
                course: courses.find(c => c.id === record.courseId),
                attended: 0,
                absence: 0,
                approvedAbsence: 0, // Placeholder, can be improved if data available
                total: 0,
              };
            }
            result[record.courseId].total++;
            if (stu.status === 'attended') result[record.courseId].attended++;
            if (stu.status === 'absent') result[record.courseId].absence++;
            // If you have approvedAbsence status, add logic here
          }
        });
      });
    });
    return Object.values(result);
  }, [user]);

  // Calculate overall stats
  const overall = useMemo(() => {
    let attended = 0, absence = 0, total = 0;
    attendanceByCourse.forEach(c => {
      attended += c.attended;
      absence += c.absence;
      total += c.total;
    });
    return {
      attended,
      absence,
      total,
      percent: total > 0 ? Math.round((attended / total) * 100) : 0,
    };
  }, [attendanceByCourse]);

  return (
    <Layout currentPage={'Attendance'}>
      <div className="max-w-7xl w-full mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">My Attendance</h1>
      
        {/* Attendance Table */}
        <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-center">Attended</th>
                <th className="py-3 px-4 text-center">Absence</th>
                <th className="py-3 px-4 text-center">Approved Absence</th>
                <th className="py-3 px-4 text-center">Overall</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceByCourse.map((c, idx) => {
                const percent = c.total > 0 ? c.attended / c.total : 0;
                const status = getStatus(percent);
                return (
                  <tr key={c.course.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium flex items-center gap-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">{c.course.code}</span>
                      {c.course.name}
                    </td>
                    <td className="py-3 px-4 text-center text-green-700 font-bold">{c.attended}</td>
                    <td className="py-3 px-4 text-center text-red-600 font-bold">{c.absence}</td>
                    <td className="py-3 px-4 text-center text-yellow-600 font-bold">0</td>
                    <td className="py-3 px-4 text-center">
                      <AverageDisplay value={Math.round((c.attended / c.total) * 100)} size={'md'} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status.color}`}>{status.label}</span>
                    </td>
                   
                  </tr>
                );
              })}
              {attendanceByCourse.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">No attendance records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Attendance;

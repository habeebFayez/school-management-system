import React from 'react';
import { format, eachDayOfInterval, isSameDay } from 'date-fns';

export const WeeklyAttendanceTable = ({ attendanceData, startDate, endDate }) => {
  if (!startDate || !endDate || attendanceData.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        {startDate && endDate ? "No students found for the selected filters and date range." : "Please select a date range to view weekly attendance."}
      </div>
    );
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Generate array of dates for the table headers
  const datesInWeek = eachDayOfInterval({ start, end });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 rounded-lg sticky top-0">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 sticky left-0 bg-gray-100 z-10">Student</th>
            {datesInWeek.map(date => (
              <th key={format(date, 'yyyy-MM-dd')} className="px-3 py-3 text-center text-sm font-medium text-gray-600">
                {format(date, 'MMM dd')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student) => (
            <tr key={student.studentId} className="border-t border-gray-200 hover:bg-blue-50">
              <td className="px-4 py-4 whitespace-nowrap sticky left-0 bg-white flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-medium text-xs">
                          {student.avatar ? (
                          <img
                            src={student.avatar || "/placeholder.svg"}
                            alt={student.studentName}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-medium text-xs">
                            {student.studentName
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("") || "U"}
                          </div>
                        )}
                    </div>
                <div>
                    <div className="font-medium text-gray-900 text-sm">{student.studentName}</div>
                     <div className="text-xs text-gray-500">ID: {student.studentId}</div>
                </div>
              </td>
              {datesInWeek.map(date => {
                  const formattedDate = format(date, 'yyyy-MM-dd');
                  const attendanceRecord = student.attendanceByDate[formattedDate];
                  const status = attendanceRecord ? attendanceRecord.status : 'N/A'; // N/A for dates with no record

                  let statusIndicator = '-'; // Default for no record
                  let bgColor = '';

                  if (status === 'attended') {
                    statusIndicator = '✔';
                    bgColor = 'bg-green-500 text-white';
                  } else if (status === 'absent') {
                    statusIndicator = '✖';
                    bgColor = 'bg-red-500 text-white';
                  }

                  return (
                    <td key={formattedDate} className="px-3 py-4 text-center whitespace-nowrap">
                        <span className={`inline-flex items-center justify-center h-6 w-6 rounded text-xs font-medium ${bgColor}`}>
                            {statusIndicator}
                        </span>
                    </td>
                  );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyAttendanceTable; 
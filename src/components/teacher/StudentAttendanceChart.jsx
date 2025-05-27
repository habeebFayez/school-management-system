import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const StudentAttendanceChart = () => {
  const data = [
    { week: '01', attendance: 60 },
    { week: '02', attendance: 75 },
    { week: '03', attendance: 85 },
    { week: '04', attendance: 78 },
    { week: '05', attendance: 72 },
    { week: '06', attendance: 95 },
    { week: '07', attendance: 98 },
    { week: '08', attendance: 85 },
    { week: '09', attendance: 65 },
    { week: '10', attendance: 82 },
    { week: '11', attendance: 88 },
    { week: '12', attendance: 55 },
  ];

  return (
    <div className="bg-white rounded-xl py-6 pl-0 pr-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Student Weekly Attendance</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#10062B] rounded-full"></div>
          <span className="text-sm text-gray-600">Highest Week</span>
          <span className="text-lg font-bold">07</span>
        </div>
      </div>
      <div className="h-64 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#10062B' }}
            />
            <YAxis 
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#10062B' }}
            />
            <Line 
              type="monotone" 
              dataKey="attendance" 
              stroke="#10062B" 
              strokeWidth={3}
              dot={{ fill: '#7c3aed', strokeWidth: 2, r: 4 }}
              fill="url(#colorGradient)"
              fillOpacity={0.3}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentAttendanceChart;
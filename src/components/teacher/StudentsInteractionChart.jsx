import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const StudentsInteractionChart = () => {
  const data = [
    { day: 'Mon', thisWeek: 75, lastWeek: 95 },
    { day: 'Tue', thisWeek: 95, lastWeek: 55 },
    { day: 'Wed', thisWeek: 65, lastWeek: 55 },
    { day: 'Thu', thisWeek: 45, lastWeek: 80 },
    { day: 'Fri', thisWeek: 25, lastWeek: 15 },
    { day: 'Sat', thisWeek: 25, lastWeek: 0 },
    { day: 'Sun', thisWeek: 0, lastWeek: 0 },
  ];

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Students Interaction</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-sm">This Week</span>
            <span className="font-bold">96%</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm">Last Week</span>
            <span className="font-bold">86%</span>
          </div>
        </div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Bar dataKey="thisWeek" fill="#fb923c" radius={[2, 2, 0, 0]} />
            <Bar dataKey="lastWeek" fill="#7c3aed" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentsInteractionChart;
import React from 'react';
import Layout from '../../components/layouts/Layout';

const WeeklySchedule = () => {
  const days = ['Monday 15/05', 'Tuesday 16/05', 'Wednesday 17/05', 'Thursday 18/05', 'Friday 19/05'];
  const timeSlots = Array.from({ length: 8 }, (_, i) => `0${i + 1}:00 AM - 0${i + 1}:30 AM`);

  const renderCellContent = (dayIndex, slotIndex) => {
    if (dayIndex === 0 && slotIndex === 0) {
      return (
        <div className="bg-pink-200/50 h-28 flex flex-col justify-between p-2 rounded">
          <div className="text-xs font-bold">Exam</div>
          <div className="text-xs">00:00 AM - 00:00 AM</div>
          <div className="text-xs font-semibold">Subject Name</div>
          <div className="text-xs">Online</div>
          <button className="mt-1 px-2 py-1 bg-purple-900 text-white text-xs rounded hover:bg-purple-700 hover:scale-105 transition duration-200">View</button>
        </div>
      );
    } else if (dayIndex === 0 && slotIndex === 1) {
      return (
        <div className="bg-pink-200/50 h-28 flex flex-col justify-between p-2 rounded">
          <div className="text-xs font-bold">Exam</div>
          <div className="text-xs">00:00 AM - 00:00 AM</div>
          <div className="text-xs font-semibold">Subject Name</div>
          <div className="text-xs">In Class</div>
          <button className="mt-1 px-2 py-1 bg-purple-900 text-white text-xs rounded hover:bg-purple-700 hover:scale-105 transition duration-200">View</button>
        </div>
      );
    } else if (dayIndex === 2 && slotIndex === 2) {
      return (
        <div className="bg-pink-200/50 h-28 flex flex-col justify-between p-2 rounded">
          <div className="text-xs font-bold">Exam</div>
          <div className="text-xs">00:00 AM - 00:00 AM</div>
          <div className="text-xs font-semibold">Subject Name</div>
          <div className="text-xs">Online</div>
          <button className="mt-1 px-2 py-1 bg-purple-900 text-white text-xs rounded hover:bg-purple-700 hover:scale-105 transition duration-200">View</button>
        </div>
      );
    
    }

    return (
      <div className="bg-green-600/50 h-28 flex flex-col justify-between p-2 rounded text-black">
        <div className="text-xs font-bold" >Lecture</div>
        <div className="text-xs">00:00 AM - 00:00 AM</div>
        <div className="text-xs">Subject Name</div>
        <div className="text-xs">In Class</div>
      </div>
    );
  };

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-black">Schedule</h2>
      <table className="min-w-full border border-grey-300 table-fixed bg-white">
        <thead>
          <tr>
            <th className="border px-2 py-2 w-1/6 bg-[#FFE7CC] text-xs text-black"></th>
            {days.map((day) => (
              <th key={day} className="border px-2 py-2 w-1/6 bg-[#FFE7CC] text-xs text-black">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, slotIndex) => (
            <tr key={slotIndex}>
              <td className="border px-2 py-2 text-xs text-center bg-transparent text-black">{slot}</td>
              {days.map((_, dayIndex) => (
                <td key={dayIndex} className="border px-2 py-2 bg-transparent text-black">
                  {renderCellContent(dayIndex, slotIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Schedule = () => {
  return (
    <Layout currentPage={'Schedule'}>
      <WeeklySchedule />
    </Layout>
  );
};

export default Schedule;

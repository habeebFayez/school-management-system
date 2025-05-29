import React from 'react';
import Layout from '../../components/layouts/Layout';

const days = ['Monday 26/05', 'Tuesday 27/05', 'Wednesday 28/05', 'Thursday 29/05', 'Friday 30/05'];
const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM'];

const scheduleData = {
  '08:00 AM': [
    { day: 0, type: 'Lecture', subject: 'Biology', mode: 'Online' },
    { day: 1, type: 'Lecture', subject: 'Physics', mode: 'in Class' },
    { day: 2, type: 'Lecture', subject: 'History', mode: 'Online', join: true },
    { day: 3, type: 'Lecture', subject: 'Biology', mode: 'in Class' },
    { day: 4, type: 'Exam', subject: 'Math', mode: 'Online', details: true }
  ],
  '09:00 AM': [
    { day: 0, type: 'Exam', subject: 'Chemistry', mode: 'in Class', details: true },
    { day: 1, type: 'Exam', subject: 'Computer', mode: 'in Class', details: true },
    { day: 2, type: 'Lecture', subject: 'Physics', mode: 'Online', join: true },
    { day: 3, type: 'Lecture', subject: 'Physics', mode: 'in Class' },
    { day: 4, type: 'Lecture', subject: 'Physics', mode: 'in Class' }
  ],
  '10:00 AM': [
    { day: 0, type: 'Lecture', subject: 'History', mode: 'Online', join: true },
    { day: 1, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 2, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 3, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 4, type: 'Lecture', subject: 'Biology', mode: 'Online', join: true }
  ],
  '11:00 AM': [
    { day: 0, type: 'Exam', subject: 'Physics', mode: 'Online', time: '12:00 PM - 01:00 PM' },
    { day: 1, type: 'Lecture', subject: 'Physics', mode: 'Online' },
    { day: 2, type: 'Lecture', subject: 'Math', mode: 'in Class' },
    { day: 3, type: 'Lecture', subject: 'Physics', mode: 'in Class' },
    { day: 4, type: 'Lecture', subject: 'English', mode: 'in Class' }
  ]
};

const Schedule = () => {
  return (
    <Layout currentPage={'Schedule'}>
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#2c3e50',
      }}>
        Schedule
      </h2>
   <div className="p-4 bg-white">
  <div className="flex items-center mb-4">
    {/* Week Dropdown (Left-aligned) */}
    <select className="border rounded px-2 py-1">
      <option>Week</option>
    </select>

    {/* Centered Date Header with Arrows */}
<div className="flex-1 flex justify-center items-center gap-4">
   <button className="text-gray-700 hover:text-gray-800 text-2xl focus:outline-none bg-transparent px-4 py-2">
    &lt;
  </button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-8 w-8"
  fill="none"
  viewBox="0 0 24 24"
  stroke="url(#grad1)"
  strokeWidth={2}
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#10062B" />
      <stop offset="100%" stopColor="#4F0129" />
    </linearGradient>
  </defs>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8 7V3M16 7V3M3 11h18M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
  />
</svg>

  <span className="text-gray-700 font-semibold text-lg">May 2024</span>
 <button className="text-gray-700 hover:text-gray-800 text-2xl focus:outline-none bg-transparent px-4 py-2">
    &gt;
  </button>
</div>

  </div>



        <div className="grid grid-cols-[100px_repeat(5,1fr)] border rounded overflow-hidden ">
          <div className="bg-white"></div>
          {days.map((day, idx) => (
            <div
              key={idx}
             className={`p-2 text-center font-semibold bg-white ${idx === 4 ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-gray-100'}`}
            >
              {day}
            </div>
          ))}

          {times.map((time) => (
            <React.Fragment key={time}>
              <div className="border-t p-2 text-sm font-semibold">{time}</div>
              {Array(5).fill(0).map((_, dayIdx) => {
                const slot = scheduleData[time]?.find((s) => s.day === dayIdx);
                return (
                  <div key={dayIdx} className="border-t p-2 text-sm h-24">
                    {slot ? (
                     <div className={`rounded p-2 h-full text-white flex flex-col justify-between ${slot.type === 'Exam' ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129]' : 'bg-gray-900'}`}>
                        <div>
                          <div className="font-bold text-xs">{slot.type}</div>
                          <div className="text-xs">{slot.time || `${time} - ${addHour(time)}`}</div>
                          <div className="text-sm font-semibold">{slot.subject}</div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-400">{slot.mode}</span>
                          {slot.details && <button className="bg-white text-black px-1 rounded">Details</button>}
                          {slot.join && <button className="bg-white text-black px-1 rounded">Join</button>}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const addHour = (time) => {
  const [h, m] = time.split(' ')[0].split(':').map(Number);
  let isPM = time.includes('PM');
  let newHour = h + 1;
  if (newHour === 12) isPM = !isPM;
  if (newHour > 12) newHour -= 12;
  return `${String(newHour).padStart(2, '0')}:${m.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
};

export default Schedule; 


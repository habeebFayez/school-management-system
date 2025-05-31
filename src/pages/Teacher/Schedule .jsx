import React from 'react';
import Layout from '../../components/layouts/Layout';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import { format, startOfWeek, addDays, isToday } from 'date-fns';

// const days = ['Monday 26/05', 'Tuesday 27/05', 'Wednesday 28/05', 'Thursday 29/05', 'Friday 30/05'];
const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM','12:00 AM','13:00 AM'];
const today = format(new Date(), 'MMMM yyyy');
const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); // 1 = Monday
const days = Array.from({ length: 5 }).map((_, i) => {
  const date = addDays(weekStart, i);
  return {
    label: format(date, 'EEEE dd/MM'), 
    date,
    isToday: isToday(date)
  };
});
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
  ],
  '12:00 AM': [
    { day: 0, type: 'Exam', subject: 'Chemistry', mode: 'in Class', details: true },
    { day: 1, type: 'Exam', subject: 'Computer', mode: 'in Class', details: true },
    { day: 2, type: 'Lecture', subject: 'Physics', mode: 'in Class'  },
    { day: 3, type: 'Lecture', subject: 'Physics', mode: 'Online', join: true },
    { day: 4, type: 'Lecture', subject: 'Physics', mode: 'in Class' }
  ],
  '13:00 AM': [
    { day: 0, type: 'Lecture', subject: 'History', mode: 'Online', join: true },
    { day: 1, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 2, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 3, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 4, type: 'Lecture', subject: 'Biology', mode: 'Online', join: true }
  ]
};

const Schedule = () => {
  return (
    <Layout currentPage={'Schedule'}>
        <div className="bg-gray-50 w-full text-sm">
        <div className="flex flex-col max-w-7xl  ">
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#2c3e50',
        backgroundColor:'white',
        padding:15,
      }}>
        Schedule
      </h2>
   <div className="p-4 bg-white text-sm">
  <div className="flex items-center mb-4">
    {/* Week Dropdown (Left-aligned) */}
    <select className="border bg-gray-200 rounded-md px-2 py-1">
      <option>Week</option>
      <option>Today</option>
    </select>

    {/* Centered Date Header with Arrows */}
<div className="flex-1 flex justify-center items-center gap-4">
   
{/* <ChevronLeft /> */}
  <span className="text-gray-900 font-semibold text-xl">{today}</span>
  {/* <ChevronRight /> */}
</div>

  </div>



        <div className="grid grid-cols-[100px_repeat(5,1fr)] border rounded overflow-hidden ">
          <div className="bg-white"></div>
          {days.map((day) => (
            <div
              key={day.label}
             className={`p-2 text-center font-semibold bg-white ${day.isToday  ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-gray-100'}`}
            >
              {day.label}
            </div>
          ))}

          {times.map((time) => (
            <React.Fragment key={time}>
              <div className="border-t p-2 text-sm font-semibold ">{time}</div>
              {Array(5).fill(0).map((_, dayIdx) => {
                const slot = scheduleData[time]?.find((s) => s.day === dayIdx);
                return (
                  <div key={dayIdx} className="border-t p-2 text-sm h-full">
                    {slot ? ( 
                     <div className={`rounded-md p-2 h-full text-white flex flex-col gap-5 justify-between ${slot.type === 'Exam' ? 'bg-[#4F0129] hover:bg-[#4f0129ef]' : 'bg-[#10062B] hover:bg-[#10062bef]'}`}>
                        <div>
                          <div className="font-bold text-xs">{slot.type}</div>
                          <div className="text-xs">{slot.time || `${time} - ${addHour(time)}`}</div>
                          <div className="text-sm font-semibold">{slot.subject}</div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-400">{slot.mode}</span>
                          {slot.details && <button className="bg-white text-black font-semibold py-1 w-2/6 hover:bg-gray-200  rounded">Details</button>}
                          {slot.join && <button className="bg-white text-black font-semibold py-1 w-2/6 hover:bg-gray-200 rounded">Join</button>}
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


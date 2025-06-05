import React, { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import { format, startOfWeek, addDays, isToday } from 'date-fns';
import ScheduleCard from '../../components/shared/ScheduleCard';

const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'];

const today = format(new Date(), 'EEEE dd MMMM yyyy');
const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); 

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
    { day: 0, type: 'Exam', subject: 'Physics', mode: 'Online' },
    { day: 1, type: 'Lecture', subject: 'Physics', mode: 'Online' },
    { day: 2, type: 'Lecture', subject: 'Math', mode: 'in Class' },
    { day: 3, type: 'Lecture', subject: 'Physics', mode: 'in Class' },
    { day: 4, type: 'Lecture', subject: 'English', mode: 'in Class' }
  ],
  '01:00 PM': [
    { day: 0, type: 'Exam', subject: 'Chemistry', mode: 'in Class', details: true },
    { day: 1, type: 'Exam', subject: 'Computer', mode: 'in Class', details: true },
    { day: 2, type: 'Lecture', subject: 'Physics', mode: 'in Class' },
    { day: 3, type: 'Lecture', subject: 'Physics', mode: 'Online', join: true },
    { day: 4, type: 'Lecture', subject: 'Physics', mode: 'in Class' }
  ],
  '02:00 PM': [
    { day: 0, type: 'Lecture', subject: 'History', mode: 'Online', join: true },
    { day: 1, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 2, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 3, type: 'Lecture', subject: 'Chemistry', mode: 'in Class' },
    { day: 4, type: 'Lecture', subject: 'Biology', mode: 'Online', join: true }
  ]
};

const Schedule = () => {
  const [view, setView] = useState('Week');
  const todayDayIndex = new Date().getDay() - 1; // Convert Sunday (0) to -1, Monday (1) to 0, etc.
  const adjustedDayIndex = todayDayIndex === -1 ? 4 : todayDayIndex; // Handle Sunday case

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
          <select
            className="border bg-gray-200 rounded-md px-2 py-1"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <option value="Week">Week</option>
            <option value="Day">Day</option>
          </select>

          <div className="flex-1 flex justify-center items-center gap-4">
            <span className="text-gray-900 font-semibold text-xl">{today}</span>
          </div>
        </div>

        {view === 'Week' ? (
          <div className="grid grid-cols-[100px_repeat(5,1fr)] border rounded overflow-hidden">
            <div className="bg-white"></div>
            {days.map((day) => (
              <div
                key={day.label}
                className={`p-2 text-center font-semibold bg-white ${day.isToday ? 'bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white' : 'bg-gray-100'}`}
              >
                {day.label}
              </div>
            ))}
            {times.map((time) => (
              <React.Fragment key={time}>
                <div className="border-t p-2 text-sm font-semibold">{time}</div>
                {Array(5).fill(0).map((_, dayIdx) => {
                  const slot = scheduleData[time]?.find((s) => s.day === dayIdx);
                  return (
                    <div key={dayIdx} className="border-t p-2 text-sm h-full">
                      {slot ? (
                        <ScheduleCard slot={slot} time={time} />
                      ) : null}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-[100px_1fr] border rounded overflow-hidden">
            <div className="bg-white"></div>
            <div className="p-2 text-center font-semibold bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white">
              {today}
            </div>

            {(today.slice(0,3).toLocaleLowerCase()!=='sat' && today.slice(0,3).toLocaleLowerCase()!=='sun') 
            ?
            (times.map((time) => {
              const slot = scheduleData[time]?.find((s) => s.day === adjustedDayIndex);
              const defaultHeight = 130;

              return (
                <React.Fragment key={time}>
                  <div className="border-t p-2 text-sm font-semibold">{time}</div>
                  <div className="border-t p-2 text-sm flex items-center w-full" style={{ height: defaultHeight }}>
                    {slot ? <ScheduleCard slot={slot} time={time} /> : null}
                  </div>

                  {time === '11:00 AM' && (
                    <>
                      <div className="border-t p-2 text-sm font-semibold"></div>
                      <div className="border-t p-2 text-sm h-[50px] bg-green-500 text-white flex flex-col justify-center items-center font-semibold">
                        <span>Lunch Break</span>
                        <span className="text-xs font-normal">12:00 PM - 01:00 PM</span>
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            }
            ))
          :(
            <>
            <div className="border-t p-2 font-semibold"></div>
            <div className="border-t p-2 text-xl h-screen bg-red-200 text-gray-600 flex flex-col justify-center items-center font-semibold">
              <span>Weekend</span>
            </div>
          </>
          )}
          </div>
        )}
      </div>
      </div>
      </div>
    </Layout>
  );
};




export default Schedule;
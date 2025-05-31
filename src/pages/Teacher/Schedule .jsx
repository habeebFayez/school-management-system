import React, { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import { format, startOfWeek, addDays, isToday } from 'date-fns';

const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'];

const today = format(new Date(), 'MMMM yyyy');
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

  const todayDate = new Date();
  let todayDayIndex = todayDate.getDay() - 1;
  if (todayDayIndex < 0 || todayDayIndex > 4) todayDayIndex = 0;

  return (
    <Layout currentPage={'Schedule'}>
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#2c3e50',
        backgroundColor:'white',
        paddingTop:10,
        paddingLeft:10,
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
              {days[todayDayIndex].label}
            </div>

            {times.map((time) => {
            
              const slot = scheduleData[time]?.find((s) => s.day === todayDayIndex);
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
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

const ScheduleCard = ({ slot, time }) => {
  return (
    <div className={`w-full rounded-md p-2 h-full text-white flex flex-col gap-5 justify-between ${slot.type === 'Exam' ? 'bg-[#4F0129] hover:bg-[#4f0129ef]' : 'bg-[#10062B] hover:bg-[#10062bef]'}`}>
      <div>
        <div className="font-bold text-xs">{slot.type}</div>
        <div className="text-xs">{slot.time || `${time} - ${addHour(time)}`}</div>
        <div className="text-sm font-semibold">{slot.subject}</div>
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-green-400">{slot.mode}</span>
        {slot.details && <button className="bg-white text-black font-semibold py-1 w-2/6 hover:bg-gray-200 rounded">Details</button>}
        {slot.join && <button className="bg-white text-black font-semibold py-1 w-2/6 hover:bg-gray-200 rounded">Join</button>}
      </div>
    </div>
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
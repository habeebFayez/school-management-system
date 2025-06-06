import React, { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import { format, startOfWeek, addDays, isToday } from 'date-fns';
import ScheduleCard from '../../components/shared/ScheduleCard';
import { lectures, exams } from '../../data/mockData';
import { randomInt } from '../../utils/randomInt';
import { useModal } from '../../contexts/ModalProvider';
import { useAuth } from '../../contexts/AuthContext';
import ExamResultsModalContent from '../../components/student/ExamResultsModalContent';

const times = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00'];

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

// Helper to get day index (0=Monday, 4=Friday)
const getDayIdx = (date) => {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
};

const Schedule = () => {
  const [view, setView] = useState('Week');
  const todayDayIndex = new Date().getDay() - 1; // Convert Sunday (0) to -1, Monday (1) to 0, etc.
  const adjustedDayIndex = todayDayIndex === -1 ? 4 : todayDayIndex; // Handle Sunday case
  const { showModal, hideModal } = useModal();
  const { user } = useAuth();

  // Helper to get schedule slot for a given day and time (now has access to user)
  const getSlot = (dayIdx, time, dateObj) => {
    // Find exam for this day/time
    const exam = exams.find(e => {
      const examDate = new Date(e.date);

      return (
        format(examDate, 'yyyy-MM-dd') === format(dateObj, 'yyyy-MM-dd') &&
        e.time === time
      );
    });

    if (exam) {
      return {
        type: 'Exam',
        course: exam.course,
        subject: exam.course.name,
        mode: exam.isOnline ? 'Online' : 'in Class',
        details: true,
        exam,
      };
    }
    // Find lecture for this day/time
    const lecture = lectures.find(l => l.dayOfWeek === dayIdx + 1 && l.time === time);
    if (lecture) {
      return {
        type: 'Lecture',
        subject: lecture.subject,
        mode: lecture.mode,
        teacher: lecture.teacher,
        lecture,
      };
    }
    // If no lecture or exam is found, create a slot using an existing exam with updated date and time
    // Select a random exam from the existing exams array
    if (exams.length === 0) {
      // Should not happen if mockData is populated, but good to be safe
      return null;
    }
    const randomExamIndex = randomInt(0, exams.length - 1);
    const baseExam = exams[randomExamIndex];

    // Create a new exam object with adapted date and time
    const adaptedExam = {
      ...baseExam,
      // Override date and time to match the current slot
      date: format(dateObj, 'yyyy-MM-dd'),
      time: time,
      // Ensure grades array exists and includes the current user with default data
      grades: baseExam.grades ? [...baseExam.grades] : [],
    };
    
    // Add or update grade for the current user in the adapted exam
    const userGradeIndex = adaptedExam.grades.findIndex(grade => grade.studentId === user.id);
    if (userGradeIndex === -1) {
        adaptedExam.grades.push({
            studentId: user.id,
            percentage: 0,
            score: 0,
            attended: false,
            passed: false
        });
    } else {
        // Optionally reset grade data for the user in this adapted slot
        adaptedExam.grades[userGradeIndex] = {
            studentId: user.id,
            percentage: 0,
            score: 0,
            attended: false,
            passed: false
        };
    }

    return {
      type: 'Exam',
      // Use the course name from the base exam
      subject: baseExam.course?.name || 'N/A',
      // Use the mode from the base exam or default
      mode: baseExam.isOnline ? 'Online' : 'in Class',
      details: true,
      // Pass the adapted exam object
      exam: adaptedExam,
    };
  };

  // Handler for exam details button
  const handleExamDetailsClick = (exam) => {
    
    showModal(
      <ExamResultsModalContent user={user} exam={exam} onClose={hideModal} isblue={true} />
    );
  };

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
                {times.map((time, timeIdx) => (
                  <React.Fragment key={time}>
                    <div className="border-t p-2 text-sm font-semibold">{time}</div>
                    {days.map((day, dayIdx) => {
                      const slot = getSlot(dayIdx, time, day.date);
                      return (
                        <div key={dayIdx} className="border-t p-2 text-sm h-full">
                          {slot ? (
                            <ScheduleCard slot={slot} time={time} onExamDetailsClick={handleExamDetailsClick} />
                          ) : null}
                        </div>
                      );
                    })}
                    {/* Insert lunch break after 11:00 AM */}
                    {time === '11:00' && (
                      <>
                        <div className="col-span-6 border-t p-2 text-sm h-[50px] bg-green-500 text-white flex flex-col justify-center items-center font-semibold" style={{ gridColumn: '1 / span 6' }}>
                          <span>Lunch Break</span>
                          <span className="text-xs font-normal">12:00 - 13:00</span>
                        </div>
                      </>
                    )}
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
                  const slot = getSlot(adjustedDayIndex, time, days[adjustedDayIndex].date);
                  const defaultHeight = 130;

                  return (
                    <React.Fragment key={time}>
                      <div className="border-t p-2 text-sm font-semibold">{time}</div>
                      <div className="border-t p-2 text-sm flex items-center w-full" style={{ height: defaultHeight }}>
                        {slot ? <ScheduleCard slot={slot} time={time} onExamDetailsClick={handleExamDetailsClick} /> : null}
                      </div>

                      {time === '11:00' && (
                        <>
                          <div className="border-t p-2 text-sm font-semibold"></div>
                          <div className="border-t p-2 text-sm h-[50px] bg-green-500 text-white flex flex-col justify-center items-center font-semibold">
                            <span>Lunch Break</span>
                            <span className="text-xs font-normal">12:00 - 13:00</span>
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
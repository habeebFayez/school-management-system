
import React from 'react';

const ScheduleCard = ({ slot, time }) => {
    const addHour = (time) => {
        const [h, m] = time.split(' ')[0].split(':').map(Number);
        let isPM = time.includes('PM');
        let newHour = h + 1;
        if (newHour === 12) isPM = !isPM;
        if (newHour > 12) newHour -= 12;
        return `${String(newHour).padStart(2, '0')}:${m.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
      };
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
  export default ScheduleCard;
import React from 'react';


const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className={`${color}  rounded-xl p-6 text-white relative overflow-hidden`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white/80 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="opacity-45 absolute right-3 top-1/2">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
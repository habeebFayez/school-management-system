import React from 'react';

const AnnouncementsSideList = () => {
  const announcements = [
    {
      type: 'Math',
      topic: 'Upcoming Algebra Quiz',
      content: 'Dear students, Please review the formulas from Chapter 5 before our next class. The upcoming quiz will cover algebraic expressions and problem-solving. Be ready!',
      action: 'Details'
    },
    {
      type: 'Physics',
      topic: 'Motion Lab Preparation',
      content: '',
      action: 'Details'
    },
    {
      type: 'Physics',
      topic: 'Motion Lab Preparation',
      content: '',
      action: 'Details'
    },
    {
      type: 'Physics',
      topic: 'Motion Lab Preparation',
      content: '',
      action: 'Details'
    },
    {
      type: 'Physics',
      topic: 'Motion Lab Preparation',
      content: '',
      action: 'Details'
    },
    {
      type: 'Physics',
      topic: 'Motion Lab Preparation',
      content: '',
      action: 'Details'
    },
    {
      type: 'Physics',
      topic: 'Motion Lab Preparation',
      content: '',
      action: 'Details'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Announcement's</h3>
        <button className="text-gray-400 ">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="4" r="1.5"/>
            <circle cx="10" cy="10" r="1.5"/>
            <circle cx="10" cy="16" r="1.5"/>
          </svg>
        </button>
      </div>
      
      <div className="max-w-2xl max-h-lvh overflow-hidden mx-auto space-y-2">
      {announcements.map((announcement, index) => (
        <div key={index} className="flex">
          <div className="bg-red-800 w-1.5 flex-shrink-0 rounded-l-lg"></div>
          <div className="bg-gray-200 rounded-r-lg p-4 text-gray-900 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-red-700 text-sm">Announcement</span>
                <div className="font-medium">{announcement.type}</div>
                <div className="text-sm opacity-80">Topic: {announcement.topic}</div>
              </div>
              <button className="bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white px-3 py-1 rounded text-sm hover:opacity-90">
                {announcement.action}
              </button>
            </div>
            {announcement.content && <p className="text-sm opacity-80 mt-2">{announcement.content}</p>}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex justify-center">
          <button className="bg-gradient-to-br from-[#10062B] to-[#4F0129] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 ">
            View All Announcement
          </button>
        </div>
    </div>
  );
};

export default AnnouncementsSideList;

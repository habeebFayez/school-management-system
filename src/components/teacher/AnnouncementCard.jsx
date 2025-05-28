
import React from 'react';
import { Pencil } from 'lucide-react';


const AnnouncementCard = ({
  title,
  content,
  fileName,
  fileSize,
  dateAdded,
  lastUpdate,
  isUpdated,
  user
}) => {
  return (
    <div className=" bg-white rounded-xl shadow-lg p-4 border-l-4 border-red-900">
   
      <div className="flex items-start justify-between ">
    
        <div className="flex items-center gap-2">
          <span className="text-2xl mr-3">📢</span>
          <h3 className="text-md font-bold text-gray-800">{title}</h3>
          {isUpdated && (
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
            Updated
          </span>
        )}
        </div>
        
         {user?.role==='teacher'&&
    <div className=' flex  justify-end items-end mb-2'>
       <div className='bg-gradient-to-br from-[#10062B] to-[#4F0129] flex justify-center items-center h-9 w-9 rounded-full hover:opacity-90 cursor-pointer' >
      <Pencil size={19} color='white' />
      </div>
      </div>}
      </div>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{content}</p>
      
      {fileName && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center">
          <div className="bg-red-100 p-2 rounded-lg mr-3">
            <span className="text-red-600">📄</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-md text-gray-800">{fileName}</p>
            <p className="text-sm text-gray-500">{fileSize}</p>
          </div>
          <button className="text-purple-600 hover:text-purple-800 font-medium">
            Download
          </button>
        </div>
      )}
      
      <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
        <span>Date of addition: {dateAdded}</span>
        <span>Date of last update: {lastUpdate}</span>
      </div>
    </div>
  );
};

export default AnnouncementCard;
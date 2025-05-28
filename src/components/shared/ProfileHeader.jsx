import React from 'react';
import { Phone, Mail, MapPin, MessageCircleMore } from 'lucide-react';
import { DefultImage } from '../../constants/passOver.js';

const ProfileHeader = ({user}) => {
  return (
    <div className="relative h-max bg-white rounded-t-xl overflow-hidden">

    <div className="h-44 relative bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-t-xl overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-32 right-64 w-52 h-52 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full "></div>
      <div className="absolute top-64 right-60 w-72 h-72 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full transform translate-x-48 -translate-y-48 "></div>
    </div>
   
          <div className="absolute top-20 left-10 flex items-center space-x-6">
            <div className="relative">
              <img 
                src={user?.avatar || DefultImage}
                alt="Deniz Yaldiz"
                className="w-35 h-35 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>
          
          <div className="flex items-center mx-6 justify-end  pt-10">
          <button className="text-gray-400 hover:text-gray-600">
          <svg   width="20" height="32" viewBox="0 0 25 32" fill="currentColor">
            <circle cx="10" cy="8" r="3" />
            <circle cx="10" cy="20" r="3" />
            <circle cx="10" cy="32" r="3" />
          </svg>
        </button>
        </div>
    <div className="flex items-center mx-6 justify-between pb-6 pt-10">
    <div className="text-gray-700  items-center  px-4 py-1">
              <h1 className="text-3xl text-blue-900 font-bold mb-1 capitalize">{user?.name || 'Name'}</h1>
              <p className="text-blue-900 text-lg font-bold capitalize">{user?.role || 'User'}</p>
              <p className="text-gray-500 text-md mt-4 flex items-center">
                <MapPin  className="mr-2"/>
                Istanbul - Uskudar
              </p>
            </div>
        
          <div className="flex items-center gap-4  px-4 py-1 text-gray-700">
         {user?.role ==='teacher'?
              <div className='cursor-pointer flex gap-4 ' >
          <div className=" flex justify-center items-center w-12 h-12 bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full ">
              <Phone className=" w-6 h-6 text-white" />
              </div>

              <div>
                <p className="text-sm text-gray-700">Phone</p>
                <p className="text-blue-900 text-lg font-bold hover:text-blue-700">+905070406000</p>
              </div>
              </div> 
              :
              <div className='cursor-pointer flex gap-4 ' >
          <div className=" flex justify-center items-center w-12 h-12 bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full ">
          <MessageCircleMore className=" w-8 h-8 text-white"/>
          </div>
              <div>
              <p className="text-sm text-gray-700">Contact</p>
                <p className="text-blue-900 text-lg font-bold hover:text-blue-700">Send a Message</p>
              </div>
              </div>}
            </div>

            <div className="flex items-center gap-4  px-4 py-1 text-gray-700 cursor-pointer">
          <div className=" flex justify-center items-center w-12 h-12 bg-gradient-to-br from-[#10062B] to-[#4F0129] rounded-full ">
              <Mail className="w-6 h-6 text-white" />
              </div>
              
              <div>
                <p className="text-sm text-gray-700">Email</p>
                <p className="text-blue-900 text-lg font-bold hover:text-blue-700">{user?.email || 'Email'}</p>
              </div>
            </div>
    </div>
    
    </div>
  );
};
export default ProfileHeader ;
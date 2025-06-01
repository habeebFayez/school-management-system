import React from "react";

const StudentAddPage = () => {
  return (
    <div className="min-h-screen bg-white rounded-[32px] flex flex-col px-8 py-8 md:px-24 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Add Student</h1>
      <form className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Student Number</label>
              <input type="text" placeholder="Student Number" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Frist Name</label>
              <input type="text" placeholder="Student First Name" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">Date of Birth</label>
                <input type="text" placeholder="Student  Date of Birth" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">Place of Birth</label>
                <input type="text" placeholder="Student  Place of Birth" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Student Phone Number</label>
              <input type="text" placeholder="Student Phone Number" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Note About Student</label>
              <textarea placeholder="Note About Student" rows={4} className="w-full rounded-2xl border border-gray-400 px-6 py-2 focus:outline-none resize-none" />
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Student Class</label>
              <input type="text" placeholder="A01254" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Last Name</label>
              <input type="text" placeholder="Student Last Name" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Student Address</label>
              <input type="text" placeholder="Student Address" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Student Email</label>
              <input type="email" placeholder="Student Email" className="w-full rounded-full border border-gray-400 px-6 py-2 focus:outline-none" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button type="submit" className="rounded-full px-8 py-2 bg-gradient-to-r from-[#2D002E] to-[#4F0129] text-white font-medium text-lg shadow-md hover:opacity-90 transition-all">
            Continue to Parent Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentAddPage; 
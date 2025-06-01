import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'

const AttendanceDaily = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics")
  const [selectedClass, setSelectedClass] = useState("3A")
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 18))

  const subjects = ["Physics", "Chemistry", "Computer"]
  const classes = ["3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C"]
  const students = [
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Absence", approved: "View", isAbsent: true },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Absence", approved: "NA", isAbsent: true },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Absence", approved: "Approved", isAbsent: true, isApproved: true },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
    { id: "AS1254878", name: "Name Surname", status: "Attended", approved: "----" },
  ]

  const formatDate = (date) => date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 1)
    if (newDate >= new Date(2024, 4, 11)) setCurrentDate(newDate)
  }

  const goToNextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 1)
    if (newDate <= new Date(2024, 4, 25)) setCurrentDate(newDate)
  }

  return (
    <Layout currentPage={'AttendanceDaily'}>
      <div className="min-h-screen bg-white w-full px-6 py-6">
        <h1 className="text-2xl font-bold text-black mb-6">Attendance</h1>

        <div className="flex gap-2 mb-4">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded ${selectedSubject === subject ? 'bg-[#10062B] text-white' : 'border border-gray-300 text-[#636363]'}`}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-2 rounded ${selectedClass === cls ? 'bg-[#10062B] text-white' : 'border border-gray-300 text-[#636363]'}`}
            >
              {cls}
            </button>
          ))}
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-gray-100">
            <h2 className="text-lg font-semibold text-black">All Students</h2>
            <div className="flex items-center gap-2">
              <button onClick={goToPreviousDay} className="text-sm">&#8592;</button>
              <span className="text-sm text-[#636363] min-w-[100px] text-center">{formatDate(currentDate)}</span>
              <button onClick={goToNextDay} className="text-sm">&#8594;</button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 p-4 border-b bg-[#f8f8f8] text-sm font-medium text-[#636363]">
            <div>INFO</div>
            <div>Student Number</div>
            <div>Date</div>
            <div>Status</div>
            <div>Approved Absence</div>
          </div>

          <div className="divide-y">
            {students.map((student, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-4 p-4 items-center ${student.isAbsent ? 'bg-red-100' : ''}`}
              >
                <div className="text-sm text-black">{student.name}</div>
                <div className="text-sm text-[#636363]">{student.id}</div>
                <div className="text-sm text-[#636363]">{formatDate(currentDate)}</div>
                <div className="text-sm text-black">{student.status}</div>
                <div className="text-sm">
                  {student.approved === "View" ? (
                    <button className="text-blue-500 underline text-sm">View</button>
                  ) : student.isApproved ? (
                    <span className="text-green-600">{student.approved}</span>
                  ) : (
                    <span className="text-[#636363]">{student.approved}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AttendanceDaily

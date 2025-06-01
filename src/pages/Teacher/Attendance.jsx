import React, { useState } from 'react'
import Layout from '../../components/layouts/Layout'
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const Attendance = () => {
  const [activeTab, setActiveTab] = useState("3A")
  const [attendanceStatus, setAttendanceStatus] = useState(
    Array(6).fill().map(() => Array(10).fill(0))
  )
  const [selectedWeek, setSelectedWeek] = useState("Week 1,2")
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4))
  const [currentPage, setCurrentPage] = useState(1)

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const goToPreviousMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() - 1)
      return newDate
    })
  }

  const goToNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + 1)
      return newDate
    })
  }

  const toggleAttendance = (studentIndex, dateIndex) => {
    const newStatus = [...attendanceStatus]
    newStatus[studentIndex][dateIndex] = (newStatus[studentIndex][dateIndex] + 1) % 3
    setAttendanceStatus(newStatus)
  }

  return (
    <Layout currentPage="Attendance">
      <div className="min-h-screen bg-[#ebebed] w-full px-6 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Attendance by Class</h1>
          <div className="flex gap-4">
            <button className="bg-[#4F0129] text-white px-4 py-2 rounded">Absent Requests</button>
            <button className="bg-[#4F0129] text-white px-4 py-2 rounded">Upload List</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#e8e8e8] gap-2">
          {["3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C"].map((tab) => (
            <ClassTab key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg mt-6 p-6">
          {/* Filters */}
          < div className="flex justify-between items-center mb-6">
          <select
  className="bg-white text-black border border-white-300 rounded px-3 py-2"
  value={selectedWeek}
  onChange={(e) => setSelectedWeek(e.target.value)}
>

              <option value="Week 1,2">Week 1,2</option>
              <option value="Week 3,4">Week 3,4</option>
            </select>

            <div className="flex items-center gap-4">
              <button onClick={goToPreviousMonth}>
                <ChevronLeft size={20} className="text-black" />
              </button>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-black" />
                <span className="text-lg font-medium">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
              </div>
              <button onClick={goToNextMonth}>
                <ChevronRight size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4 font-medium">ID</th>
                  <th className="pb-4 font-medium">Name</th>
                  {[...Array(10)].map((_, i) => (
                    <th key={i} className="pb-4 font-medium text-center">
                      <div>May {19 + i}</div>
                      <div className="text-sm text-[#565656]">Day</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 1, 2, 3].map((id, studentIndex) => (
                  <tr key={studentIndex} className="border-t border-[#f1f1f1]">
                    <td className="py-4 font-medium">{id}</td>
                    <td className="py-4">Emir Yılmaz Deniz</td>
                    {[...Array(10)].map((_, dateIndex) => (
                      <td key={dateIndex} className="py-4">
                        <div className="flex justify-center">
                          <button
                            onClick={() => toggleAttendance(studentIndex, dateIndex)}
                            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                              attendanceStatus[studentIndex][dateIndex] === 0
                                ? "border border-[#e8e8e8] bg-white"
                                : attendanceStatus[studentIndex][dateIndex] === 1
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          >
                            {attendanceStatus[studentIndex][dateIndex] === 1 && "✔"}
                            {attendanceStatus[studentIndex][dateIndex] === 2 && "✖"}
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm ${
                  page === currentPage
                    ? "bg-[#10062B] text-white"
                    : "bg-white border border-gray-300 text-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

const ClassTab = ({ label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 font-medium rounded-[5px] transition-all duration-200 ${
      active
        ? "bg-[#10062B] text-white"
        : "text-[#565656] hover:text-white hover:bg-[#4F0129]"
    }`}
  >
    {label}
  </button>
)

export default Attendance

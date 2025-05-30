import Layout from '../../components/layouts/Layout';
import React, { useState } from 'react';
import { ArrowLeft, Clock, User, BookOpen, Calendar, AlertCircle, Download, Play, Plus, Edit3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


  
export const SubjectFullData   = () => {
  const location = useLocation();
  const course = location.state?.cours;
  const { user } = useAuth();
    const [userRole, setUserRole] = useState(user.role);
 
    const courseData = {
      name:course.name + " : " + course.code,
      about: "This course covers advanced mathematical concepts including calculus, linear algebra, and statistical analysis. Students will develop problem-solving skills and mathematical reasoning abilities.",
      teacher: course.teacher,
      totalLessons: 24,
      rules: [
        "Attendance is mandatory for all sessions",
        "Submit assignments before the deadline", 
        "Respect classroom environment and peers",
        "Use of mobile phones is prohibited during lectures"
      ],
      schedule: [
        { day: "Monday", from: "12:15", to: "13:00" },
        { day: "Tuesday", from: "12:15", to: "13:00" },
        { day: "Wednesday", from: "12:15", to: "13:00" },
        { day: "Thursday", from: "12:15", to: "13:00" },
        { day: "Friday", from: "12:15", to: "13:00" }
      ],
      chapters: [
        {
          id: 1,
          title: "Introduction to Calculus",
          lessons: [
            { id: 1, title: "Limits and Continuity", duration: "45 min", completed: true, downloadUrl: "/files/lesson1.pdf" },
            { id: 2, title: "Derivatives", duration: "60 min", completed: true, downloadUrl: "/files/lesson2.pdf" },
            { id: 3, title: "Applications of Derivatives", duration: "50 min", completed: false, downloadUrl: "/files/lesson3.pdf" }
          ]
        },
        {
          id: 2,
          title: "Linear Algebra Fundamentals",
          lessons: [
            { id: 4, title: "Vectors and Vector Spaces", duration: "55 min", completed: false, downloadUrl: "/files/lesson4.pdf" },
            { id: 5, title: "Matrix Operations", duration: "40 min", completed: false, downloadUrl: "/files/lesson5.pdf" },
            { id: 6, title: "Eigenvalues and Eigenvectors", duration: "65 min", completed: false, downloadUrl: "/files/lesson6.pdf" }
          ]
        },
        {
          id: 3,
          title: "Statistical Analysis",
          lessons: [
            { id: 7, title: "Probability Distributions", duration: "45 min", completed: false, downloadUrl: "/files/lesson7.pdf" },
            { id: 8, title: "Hypothesis Testing", duration: "50 min", completed: false, downloadUrl: "/files/lesson8.pdf" }
          ]
        }
      ]
    };
  
    const handleDownload = (url, title) => {
      // Mock download functionality
      console.log(`Downloading: ${title} from ${url}`);
    };
  
  
  return (
    <Layout currentPage={'SubjectFullData'}>
      
    <div className="min-h-screen bg-gray-50 p-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button and role toggle */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{courseData.name}</h1>
              <p className="text-gray-600 mt-1">Course Information & Schedule</p>
            </div>
          </div>
        </div>
        {/* Course Overview Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-600" />
                Course Overview
              </h2>
              <div className="space-y-4 ">
                <div>
                  <label className="text-sm font-medium text-gray-700">About Subject</label>
                  <p className="mt-1 text-gray-600 leading-relaxed">{courseData.about}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User size={16} />
                      Teacher Assigned
                    </label>
                    <p className="mt-1 text-gray-900 font-medium">{courseData.teacher}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <BookOpen size={16} />
                      Total Lessons Planned
                    </label>
                    <p className="mt-1 text-gray-900 font-medium">{courseData.totalLessons} lessons</p>
                  </div>
                </div>
              </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          
          {/* Main Content  */}
          <div className="lg:col-span-2 space-y-2">
            
           {/* Schedule Card */}
         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-green-600" />
                Weekly Schedule
              </h2>
              
              <div className="space-y-3">
                {courseData.schedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-900 text-sm">{item.day}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={14} />
                      <span className="text-xs font-medium">
                        {item.from} - {item.to}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-orange-600" />
                Important Rules
              </h2>
              
              <div className="space-y-3">
                {courseData.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Please ensure you follow all course rules to maintain a productive learning environment.
                </p>
              </div>
            </div>
           
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-2">
             {/* Lessons & Chapters */}
             <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Play size={20} className="text-purple-600" />
                  Course Chapters & Lessons
                </h2>
                {userRole === 'teacher' && (
                  <button 
                  className="flex items-center text-sm rounded-lg min-w-36 text-white p-2 gap-2 bg-green-600 hover:opacity-90 ">
                    <Plus size={16} className="mr-2" />
                    Add Chapter
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {courseData.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4 ">
                      <h3 className="text-md font-semibold text-gray-900">
                        Chapter {chapterIndex + 1}: {chapter.title}
                      </h3>
                      {userRole === 'teacher' && (
                        <div className="flex gap-2 text-sm ">
                          <button
                              className="flex items-center text-gray-900 rounded-lg p-2 bg-gray-300 hover:bg-gray-400 "
                          >
                            <Edit3 size={14} className="mr-2" />
                            Edit
                          </button>
                          <button 
                              className="flex items-center min-w-32  text-sm rounded-lg text-white px-2 bg-green-600 hover:opacity-90 "
                             >
                            <Plus size={14} className="mr-2" />
                            Add Lesson
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 text-sm">
                      {chapter.lessons.map((lesson, lessonIndex) => (
                        <div 
                          key={lesson.id} 
                          className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                            lesson.completed 
                              ? 'bg-green-50 border-green-200' 
                              : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              lesson.completed 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-300 text-gray-600'
                            }`}>
                              {lessonIndex + 1}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Clock size={14} />
                                  {lesson.duration}
                                </span>
                                {lesson.completed && (
                                  <span className="text-green-600 font-medium">Completed</span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {userRole === 'teacher' && (
                              <button 
                              className="rounded-lg text-white p-2 bg-gray-300 hover:bg-gray-400 ">
                                <Edit3 color='black' size={18} />
                              </button>
                            )}
                            <button
                              onClick={() => handleDownload(lesson.downloadUrl, lesson.title)}
                              
                              className="flex items-center text-sm rounded-lg text-white p-2 gap-2 bg-gradient-to-br from-[#10062B] to-[#4F0129] hover:opacity-90 "
                            >
                              <Download size={14} />
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
export default SubjectFullData;

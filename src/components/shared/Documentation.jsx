import React, { useState } from 'react';
import { 
  Book, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Users,
  FileText,
  MessageSquare,
  Calendar,
  BarChart
} from 'lucide-react';

const Documentation = ({ isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      content: [
        {
          title: 'Welcome to School Management System',
          content: 'This comprehensive guide will help you navigate through the system and make the most of its features. Whether youre a teacher or student, youll find everything you need to know here.',
          icon: <Star className="text-yellow-500" size={20} />
        },
        {
          title: 'Quick Start Guide',
          content: `1. Login with your credentials (e.g., teacher@school.com / student@school.com)
2. Access your dashboard from the sidebar
3. Navigate to your courses using the "Courses" tab
4. Check your schedule in the "Schedule" section
5. View announcements in the "Announcements" tab`,
          icon: <Clock className="text-blue-500" size={20} />
        },
        {
          title: 'System Requirements',
          content: `Required:
• Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
• Stable internet connection (minimum 5Mbps)
• Screen resolution: 1024x768 or higher
• JavaScript enabled
• Cookies enabled

Recommended:
• 8GB RAM or more
• 4-core processor or better
• 1080p display or higher`,
          icon: <CheckCircle className="text-green-500" size={20} />
        }
      ]
    },
    'teacher-guide': {
      title: 'Teacher Guide',
      content: [
        {
          title: 'Managing Classes',
          content: `Step-by-Step Class Management:
1. Go to "Students List" in the sidebar
2. Click "Create New Class" button
3. Fill in class details:
   - Class Name (e.g., "Mathematics 101")
   - Grade Level
   - Schedule
   - Maximum Capacity
4. Add students using the "Add Students" button
5. Save and publish the class

Quick Actions:
• View class roster
• Track attendance
• Manage grades
• Send announcements`,
          icon: <Users className="text-purple-500" size={20} />
        },
        {
          title: 'Creating Assignments',
          content: `How to Create an Assignment:
1. Navigate to "Assignments" in the sidebar
2. Click "Create New Assignment"
3. Fill in the details:
   - Title (e.g., "Week 3: Algebra Problems")
   - Description
   - Due Date and Time
   - Attach Files (PDF, DOC, etc.)
   - Grade Weight
4. Select target classes
5. Preview and publish

Assignment Types:
• Regular Homework
• Quiz
• Project
• Exam
• Extra Credit`,
          icon: <FileText className="text-green-500" size={20} />
        },
        {
          title: 'Grade Management',
          content: `Grading Process:
1. Access "Grades" from the sidebar
2. Select class and assignment
3. Input grades:
   - Numerical scores
   - Letter grades
   - Comments
4. Calculate averages automatically
5. Generate reports

Grade Categories:
• Assignments (30%)
• Quizzes (20%)
• Projects (25%)
• Exams (25%)

Report Types:
• Individual student reports
• Class performance reports
• Progress tracking reports`,
          icon: <BarChart className="text-yellow-500" size={20} />
        },
        {
          title: 'Attendance Tracking',
          content: `Daily Attendance Process:
1. Go to "Attendance" in the sidebar
2. Select class and date
3. Mark attendance:
   - Present
   - Absent
   - Late
   - Excused
4. Add notes if needed
5. Save attendance

Reports Available:
• Daily attendance sheets
• Monthly summaries
• Student attendance history
• Absence patterns
• Excuse documentation`,
          icon: <Calendar className="text-blue-500" size={20} />
        }
      ]
    },
    'student-guide': {
      title: 'Student Guide',
      content: [
        {
          title: 'Accessing Courses',
          content: `Course Navigation:
1. Login to your account
2. Go to "Courses" in the sidebar
3. View your enrolled courses:
   - Course name
   - Teacher
   - Schedule
   - Progress
4. Click on a course to access:
   - Course materials
   - Assignments
   - Grades
   - Announcements

Course Features:
• Course calendar
• Resource library
• Discussion board
• Progress tracking`,
          icon: <Book className="text-purple-500" size={20} />
        },
        {
          title: 'Submitting Work',
          content: `Assignment Submission Steps:
1. Go to "Assignments" tab
2. Find the assignment
3. Click "Submit Work"
4. Upload files:
   - Supported formats: PDF, DOC, DOCX, TXT, ZIP
   - Maximum size: 10MB
5. Add comments if needed
6. Submit before deadline

Submission Status:
• Draft (saved but not submitted)
• Submitted
• Graded
• Late submission
• Returned for revision`,
          icon: <FileText className="text-green-500" size={20} />
        },
        {
          title: 'Viewing Grades',
          content: `Accessing Your Grades:
1. Click "Grades" in the sidebar
2. View grades by:
   - Course
   - Assignment type
   - Date
3. Check:
   - Individual grades
   - Course average
   - Overall GPA
   - Grade history

Grade Notifications:
• New grade alerts
• Grade change notifications
• Missing assignment reminders
• Progress reports`,
          icon: <BarChart className="text-yellow-500" size={20} />
        },
        {
          title: 'Communication',
          content: `Messaging System:
1. Access "Inbox" from sidebar
2. Compose new message:
   - Select recipient
   - Choose course (if applicable)
   - Write message
   - Attach files
3. View message history
4. Check notifications

Communication Features:
• Direct messaging
• Course announcements
• Group messages
• File sharing
• Read receipts
• Message search`,
          icon: <MessageSquare className="text-orange-500" size={20} />
        }
      ]
    },
    'troubleshooting': {
      title: 'Troubleshooting',
      content: [
        {
          title: 'Common Issues',
          content: `Frequently Encountered Problems:

1. Login Issues:
   • Clear browser cache
   • Reset password
   • Check internet connection

2. File Upload Problems:
   • Check file size (max 10MB)
   • Verify file format
   • Try different browser

3. Grade Display Issues:
   • Refresh page
   • Clear browser cache
   • Check internet connection

4. System Performance:
   • Close other applications
   • Clear browser cache
   • Update browser`,
          icon: <AlertTriangle className="text-red-500" size={20} />
        },
        {
          title: 'Technical Support',
          content: `Support Channels:

1. Email Support:
   • support@schoolsystem.com
   • Response within 24 hours

2. Phone Support:
   • (555) 123-4567
   • Monday-Friday, 8AM-6PM

3. Live Chat:
   • Available 24/7
   • Click "Help" button

4. Knowledge Base:
   • FAQ section
   • Video tutorials
   • Step-by-step guides`,
          icon: <CheckCircle className="text-green-500" size={20} />
        }
      ]
    }
  };

  const filteredSections = Object.entries(sections).reduce((acc, [key, section]) => {
    const filteredContent = section.content.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredContent.length > 0) {
      acc[key] = { ...section, content: filteredContent };
    }
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="px-4 py-6 bg-gray-50 sm:px-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <Book className="h-6 w-6 text-gray-900" />
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">
                    Documentation
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="flex-1 px-4 py-4 space-y-1">
                {Object.entries(filteredSections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setCurrentSection(key)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      currentSection === key
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="px-4 py-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {sections[currentSection].title}
                </h3>
                <div className="space-y-6">
                  {sections[currentSection].content.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-4">
                      <div className="flex items-center mb-2">
                        {item.icon}
                        <h4 className="text-md font-medium text-gray-900 ml-2">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200">
              <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 
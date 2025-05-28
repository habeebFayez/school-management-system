// Mock data for the School Management System

export const users = [
  {
    id: 1,
    name: 'Fatma Kaya',
    role: 'teacher',
    email: 'admin@titan.edu.tr',
    avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg'
  },
  {
    id: 2,
    name: 'Zehra Özkan',
    role: 'teacher',
    email: 'teacher@titan.edu.tr',
    avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
    subjects: [1, 3, 5]
  },
  {
    id: 3,
    name: 'Yusuf Arslan',
    role: 'student',
    email: 'student@titan.edu.tr',
    avatar: 'https://cdn.pixabay.com/photo/2022/08/11/08/08/books-7378902_1280.jpg',
    grade: '10th',
    enrolledCourses: [1, 2, 3, 4, 5]
  }
];

export const courses = [
  {
    id: 1,
    name: "Mathematics",
    code: "MATH101",
    teacher: "Zehra Özkan",
    grade: "B+",
    attendance: "95%",
    description: "Introduction to basic algebra and calculus concepts",
    credits: 4,
    assignments: [1, 2]
  },
  {
    id: 2,
    name: "Physics",
    code: "PHYS101",
    teacher: "Ali Yılmaz",
    grade: "A-",
    attendance: "92%",
    description: "Fundamental physics principles and mechanics",
    credits: 4,
    assignments: [3]
  },
  {
    id: 3,
    name: "Chemistry",
    code: "CHEM101",
    teacher: "Zehra Özkan",
    grade: "B",
    attendance: "88%",
    description: "Introduction to chemistry and laboratory practices",
    credits: 3,
    assignments: [4]
  },
  {
    id: 4,
    name: "Turkish Literature",
    code: "LIT201",
    teacher: "Mehmet Can",
    grade: "A",
    attendance: "98%",
    description: "Overview of classical and modern Turkish literature",
    credits: 3,
    assignments: [5]
  },
  {
    id: 5,
    name: "History",
    code: "HIST101",
    teacher: "Zehra Özkan",
    grade: "B+",
    attendance: "93%",
    description: "World history from ancient civilizations to modern times",
    credits: 3,
    assignments: [6]
  }
];

export const assignments = [
  {
    id: 1,
    courseId: 1,
    title: "Algebra Basics",
    description: "Complete exercises 1-10 in Chapter 3",
    deadline: "2023-11-20",
    status: "submitted",
    grade: "95/100"
  },
  {
    id: 2,
    courseId: 1,
    title: "Calculus Introduction",
    description: "Solve the derivative problems on page 45",
    deadline: "2023-12-05",
    status: "pending",
    grade: null
  },
  {
    id: 3,
    courseId: 2,
    title: "Newton's Laws Lab Report",
    description: "Write a report on the experiment conducted in class",
    deadline: "2023-11-25",
    status: "graded",
    grade: "88/100"
  },
  {
    id: 4,
    courseId: 3,
    title: "Periodic Table Quiz",
    description: "Prepare for the quiz on the first 20 elements",
    deadline: "2023-11-15",
    status: "graded",
    grade: "92/100"
  },
  {
    id: 5,
    courseId: 4,
    title: "Poetry Analysis",
    description: "Analyze the poem discussed in class and write a 500-word essay",
    deadline: "2023-12-10",
    status: "pending",
    grade: null
  },
  {
    id: 6,
    courseId: 5,
    title: "Historical Timeline",
    description: "Create a timeline of major events from 1900-1950",
    deadline: "2023-12-01",
    status: "pending",
    grade: null
  }
];

export const exams = [
  {
    id: 1,
    courseId: 1,
    title: "Midterm Exam",
    date: "2023-11-30",
    duration: "90 minutes",
    topics: "Chapters 1-5",
    location: "Room 201"
  },
  {
    id: 2,
    courseId: 2,
    title: "Final Exam",
    date: "2024-01-15",
    duration: "120 minutes",
    topics: "Comprehensive",
    location: "Main Hall"
  },
  {
    id: 3,
    courseId: 3,
    title: "Lab Practical",
    date: "2023-12-08",
    duration: "60 minutes",
    topics: "Lab techniques and safety",
    location: "Chemistry Lab"
  }
];

export const attendance = [
  {
    studentId: 3,
    courseId: 1,
    records: [
      { date: "2023-10-01", status: "present" },
      { date: "2023-10-03", status: "present" },
      { date: "2023-10-08", status: "absent" },
      { date: "2023-10-10", status: "present" },
      { date: "2023-10-15", status: "present" }
    ]
  },
  {
    studentId: 3,
    courseId: 2,
    records: [
      { date: "2023-10-02", status: "present" },
      { date: "2023-10-04", status: "present" },
      { date: "2023-10-09", status: "present" },
      { date: "2023-10-11", status: "late" },
      { date: "2023-10-16", status: "present" }
    ]
  }
];

export const notifications = [
  {
    id: 1,
    userId: 3,
    title: "New Assignment",
    message: "You have a new assignment in Mathematics due on November 20th",
    date: "2023-11-05",
    read: false
  },
  {
    id: 2,
    userId: 3,
    title: "Grade Posted",
    message: "Your grade for Chemistry quiz has been posted",
    date: "2023-11-03",
    read: true
  },
  {
    id: 3,
    userId: 3,
    title: "Upcoming Exam",
    message: "Reminder: Mathematics midterm exam on November 30th",
    date: "2023-11-01",
    read: false
  },
  {
    id: 4,
    userId: 2,
    title: "Staff Meeting",
    message: "Staff meeting scheduled for November 15th at 3 PM",
    date: "2023-11-10",
    read: false
  }
];

export const announcements = [
  {
    id: 1,
    title: "School Holiday",
    content: "School will be closed on November 29th for Republic Day",
    date: "2023-11-01",
    author: "Administration"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    content: "Parent-teacher meetings will be held on December 5th from 3 PM to 6 PM",
    date: "2023-11-10",
    author: "Administration"
  },
  {
    id: 3,
    title: "Science Fair",
    content: "Annual science fair will be held on December 15th. Prepare your projects!",
    date: "2023-11-12",
    author: "Science Department"
  }
];

export const schedules = {
  student: [
    { day: "Monday", periods: [
      { time: "09:00 - 09:50", subject: "Mathematics", room: "201" },
      { time: "10:00 - 10:50", subject: "Physics", room: "301" },
      { time: "11:00 - 11:50", subject: "Chemistry", room: "Lab 1" },
      { time: "13:00 - 13:50", subject: "Turkish Literature", room: "102" }
    ]},
    { day: "Tuesday", periods: [
      { time: "09:00 - 09:50", subject: "History", room: "105" },
      { time: "10:00 - 10:50", subject: "Mathematics", room: "201" },
      { time: "11:00 - 11:50", subject: "Physics", room: "301" }
    ]},
    { day: "Wednesday", periods: [
      { time: "09:00 - 09:50", subject: "Chemistry", room: "Lab 1" },
      { time: "10:00 - 10:50", subject: "Turkish Literature", room: "102" },
      { time: "11:00 - 11:50", subject: "History", room: "105" }
    ]}
  ],
  teacher: [
    { day: "Monday", periods: [
      { time: "09:00 - 09:50", subject: "Mathematics - 10A", room: "201" },
      { time: "10:00 - 10:50", subject: "Mathematics - 11B", room: "202" },
      { time: "13:00 - 13:50", subject: "Mathematics - 9C", room: "203" }
    ]},
    { day: "Tuesday", periods: [
      { time: "10:00 - 10:50", subject: "Mathematics - 10A", room: "201" },
      { time: "11:00 - 11:50", subject: "Office Hours", room: "Teachers' Lounge" }
    ]},
    { day: "Wednesday", periods: [
      { time: "09:00 - 09:50", subject: "Mathematics - 11B", room: "202" },
      { time: "10:00 - 10:50", subject: "Mathematics - 9C", room: "203" }
    ]}
  ]
};

export const grades = {
  student: [
    { courseId: 1, assignments: 92, midterm: 88, final: 90, overall: "B+" },
    { courseId: 2, assignments: 95, midterm: 94, final: null, overall: "A-" },
    { courseId: 3, assignments: 87, midterm: 82, final: null, overall: "B" },
    { courseId: 4, assignments: 98, midterm: 96, final: null, overall: "A" },
    { courseId: 5, assignments: 90, midterm: 92, final: null, overall: "B+" }
  ]
};

export const dashboardStats = {
  admin: {
    totalStudents: 842,
    totalTeachers: 45,
    totalCourses: 32,
    averageAttendance: "94%",
    recentIncidents: 3,
    pendingApprovals: 12
  },
  teacher: {
    totalStudents: 124,
    coursesTeaching: 5,
    assignmentsPending: 35,
    averageGrade: "B",
    attendanceRate: "92%"
  },
  student: {
    coursesEnrolled: 5,
    assignmentsDue: 3,
    upcomingExams: 2,
    averageGrade: "B+",
    attendanceRate: "95%"
  }
};

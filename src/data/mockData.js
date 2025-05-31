// Mock data for the School Management System

export const users = [
  {
    id: 1,
    name: 'Zack Kaya',
    role: 'teacher',
    email: 'admin@titan.edu.tr',
    status:'Active',
    avatar: 'https://gsep.pepperdine.edu/blog/images/how-much-could-a-masters-degree-increase-your-teaching-salary.png',
  },
  {
    id: 2,
    name: 'Zehra Özkan',
    role: 'teacher',
    status:'Onleave',
    email: 'teacher@titan.edu.tr',
    avatar: 'https://cdn.pixabay.com/photo/2023/12/15/17/13/woman-8451051_1280.jpg',
  },
  {
    id: 3,
    name: 'Yusuf Arslan',
    role: 'student',
    email: 'student@titan.edu.tr',
    avatar: 'https://cdn.pixabay.com/photo/2022/08/11/08/08/books-7378902_1280.jpg',
    grade: '10th',
  },
  {
    id: 4,
    name: 'Ayşe Demir',
    status:'Onleave',
    status:'Active',
    role: 'teacher',
    email: 'ayse.demir@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 5,
    name: 'Mehmet Yılmaz',
    status:'Active',
    role: 'teacher',
    email: 'mehmet.yilmaz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 6,
    name: 'Elif Kaya',
    status:'Active',
    role: 'teacher',
    email: 'elif.kaya@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    id: 7,
    name: 'Ali Can',
    status:'Active',
    role: 'teacher',
    email: 'ali.can@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    id: 8,
    name: 'Fatma Aksoy',
    status:'Onleave',
    role: 'teacher',
    email: 'fatma.aksoy@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
  },
  {
    id: 9,
    name: 'Deniz Yıldız',
    status:'Active',
    role: 'teacher',
    email: 'deniz.yildiz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
  },
  {
    id: 10,
    name: 'Burcu Şahin',
    status:'Onleave',
    role: 'teacher',
    email: 'burcu.sahin@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    id: 11,
    name: 'Murat Polat',
    status:'Active',
    role: 'teacher',
    email: 'murat.polat@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    id: 12,
    name: 'Gül Özdemir',
    status:'Active',
    role: 'teacher',
    email: 'gul.ozdemir@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    id: 13,
    name: 'Serkan Aydın',
    status:'Active',
    role: 'teacher',
    email: 'serkan.aydin@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
  {
    id: 14,
    name: 'Ahmet Korkmaz',
    role: 'student',
    email: 'ahmet.korkmaz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    grade: '11th',
  },
  {
    id: 15,
    name: 'Selin Yılmaz',
    role: 'student',
    email: 'selin.yilmaz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    grade: '10th',
  },
  {
    id: 16,
    name: 'Emre Demir',
    role: 'student',
    email: 'emre.demir@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    grade: '12th',
  },
  {
    id: 17,
    name: 'Zeynep Şahin',
    role: 'student',
    email: 'zeynep.sahin@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    grade: '11th',
  },
  {
    id: 18,
    name: 'Kerem Polat',
    role: 'student',
    email: 'kerem.polat@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
    grade: '10th',
  },
  {
    id: 19,
    name: 'Derya Yıldız',
    role: 'student',
    email: 'derya.yildiz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/59.jpg',
    grade: '12th',
  },
  {
    id: 20,
    name: 'Baran Aydın',
    role: 'student',
    email: 'baran.aydin@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
    grade: '11th',
  },
  {
    id: 21,
    name: 'Ece Özdemir',
    role: 'student',
    email: 'ece.ozdemir@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    grade: '10th',
  },
  {
    id: 22,
    name: 'Mert Can',
    role: 'student',
    email: 'mert.can@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    grade: '12th',
  },
  {
    id: 23,
    name: 'Buse Aksoy',
    role: 'student',
    email: 'buse.aksoy@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    grade: '11th',
  }
];

export const courses = [
  {
    id: 1,
    name: "Mathematics",
    code: "MATH101",
    teacher: users[0],
    grade: "B+",
    attendance: "95%",
    description: "Introduction to basic algebra and calculus concepts",
    credits: 4,
    assignments: [1, 2],
    students: [ users[13], users[14], users[15], users[16], users[17], users[18], users[19]],
    classes: ["3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "6A", "6B"]
  },
  {
    id: 2,
    name: "Physics",
    code: "PHYS101",
    teacher: users[1],
    grade: "A-",
    attendance: "92%",
    description: "Fundamental physics principles and mechanics",
    credits: 4,
    assignments: [3],
    students: [users[13], users[14], users[15], users[16], users[17], users[18], users[19]],
    classes: ["3A", "3B", "4A", "4B", "5A", "5B", "6A"]
  },
  {
    id: 3,
    name: "Chemistry",
    code: "CHEM101",
    teacher: users[1],
    grade: "B",
    attendance: "88%",
    description: "Introduction to chemistry and laboratory practices",
    credits: 3,
    assignments: [4],
    students: [users[2], users[13], users[14], users[15], users[16], users[17], users[18], users[19]],
    classes: ["3A", "3B", "3C", "4A", "4B", "5A"]
  },
  {
    id: 4,
    name: "Turkish Literature",
    code: "LIT201",
    teacher: users[0],
    grade: "A",
    attendance: "98%",
    description: "Overview of classical and modern Turkish literature",
    credits: 3,
    assignments: [5],
    students: [users[2], users[13], users[14], users[15], users[16], users[17], users[18], users[19]],
    classes: ["3A", "3B", "4A", "4B", "5A", "5B", "6A", "6B"]
  },
  {
    id: 5,
    name: "History",
    code: "HIST101",
    teacher: users[3],
    grade: "B+",
    attendance: "93%",
    description: "World history from ancient civilizations to modern times",
    credits: 3,
    assignments: [6],
    students: [users[2], users[13], users[14], users[15], users[16], users[17], users[18], users[19], users[20], users[21], users[22]],
    classes: ["3A", "3B", "3C", "4A", "4B", "5A", "5B", "6A", "6B", "7A"]
  },
  {
    id: 6,
    name: "Biology",
    code: "BIO101",
    teacher: users[4],
    grade: "A-",
    attendance: "97%",
    description: "Introduction to cell biology, genetics, and evolution.",
    credits: 4,
    assignments: [7, 8],
    students: [users[2], users[13], users[18], users[19], users[20], users[21], users[22]],
    classes: ["3A", "3B", "4A", "4B", "5A", "5B"]
  },
  {
    id: 7,
    name: "Computer Science",
    code: "CS101",
    teacher: users[5],
    grade: "A",
    attendance: "99%",
    description: "Fundamentals of programming and algorithms.",
    credits: 4,
    assignments: [9, 10],
    students: [users[2], users[13], users[18], users[19], users[20], users[21], users[22]],
    classes: ["3A", "3B", "3C", "4A", "4B", "5A", "5B", "6A"]
  },
  {
    id: 8,
    name: "Art",
    code: "ART101",
    teacher: users[6],
    grade: "B",
    attendance: "90%",
    description: "Exploration of visual arts and creative expression.",
    credits: 2,
    assignments: [11],
    students: [ users[13], users[18], users[19], users[20], users[21], users[22]],
    classes: ["3A", "3B", "4A", "4B", "5A"]
  },
  {
    id: 9,
    name: "Physical Education",
    code: "PE101",
    teacher: users[6],
    grade: "A",
    attendance: "100%",
    description: "Physical fitness, sports, and healthy living.",
    credits: 1,
    assignments: [12],
    students: [users[2], users[13], users[18], users[19], users[20], users[21], users[22]],
    classes: ["3A", "3B", "3C", "4A", "4B", "5A", "5B"]
  },
  {
    id: 10,
    name: "Philosophy",
    code: "PHIL101",
    teacher: users[7],
    grade: "B+",
    attendance: "92%",
    description: "Introduction to philosophical thinking and major philosophers.",
    credits: 3,
    assignments: [13],
    students: [users[2], users[13], users[18], users[19], users[20], users[21], users[22]],
    classes: ["3A", "3B", "4A", "4B", "5A", "5B", "6A", "6B", "7A"]
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


export const mockGrades = [
  {
    id: '1',
    course: 'Calculus',
    first: 80,
    second: 60,
    assignment: 100,
    final: null,
    average: null,
    status: 'NA'
  },
  {
    id: '2',
    course: 'Physics',
    first: 80,
    second: 60,
    assignment: 80,
    final: null,
    average: null,
    status: 'NA'
  },
  {
    id: '3',
    course: 'Chemistry',
    first: 25,
    second: 40,
    assignment: 55,
    final: null,
    average: null,
    status: 'NA'
  },
  {
    id: '4',
    course: 'Biology',
    first: 80,
    second: 60,
    assignment: 88,
    final: null,
    average: null,
    status: 'NA'
  },
  {
    id: '5',
    course: 'English',
    first: 90,
    assignment: '0',
    second: 60,
    final: null,
    average: null,
    status: 'NA'
  },
  {
    id: '6',
    course: 'History',
    first: 85,
    second: 75,
    assignment: 100,
    final: null,
    average: null,
    status: 'NA'
  },
  {
    id: '7',
    course: 'Geography',
    first: 70,
    second: 80,
    final: null,
    assignment: 100,
    average: null,
    status: 'NA'
  },
  {
    id: '8',
    course: 'Computer Science',
    first: 95,
    second: 90,
    assignment: 100,
    final: null,
    average: null,
    status: 'NA'
  }
];


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

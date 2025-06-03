
export const mockStudents = [
    { id: '1', name: 'Yusuf Arslan', email: 'alice@example.com' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com' },
    { id: '3', name: 'Carol Williams', email: 'carol@example.com' },
    { id: '4', name: 'David Brown', email: 'david@example.com' },
    { id: '5', name: 'Emma Davis', email: 'emma@example.com' },
    { id: '6', name: 'Frank Miller', email: 'frank@example.com' },
    { id: '7', name: 'Grace Wilson', email: 'grace@example.com' },
    { id: '8', name: 'Henry Moore', email: 'henry@example.com' },
  ];
  
  export const mockCourses = [
    {
      id: '1',
      name: 'Mathematics 101',
      students: mockStudents
    },
    {
      id: '2',
      name: 'Physics 201',
      students: mockStudents
    },
    {
      id: '3',
      name: 'Chemistry 301',
      students: mockStudents
    },
    {
      id: '4',
      name: 'Computer Science 101',
      students: mockStudents
    }
  ];
  
  export const mockMessages = [
    {
      id: '1',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Question about Assignment 3',
      content: 'Hello Teacher, I tried to solve problem 2 but I\'m having trouble with the integration part. Could you help me understand the steps?',
      timestamp: '2025-02-26 18:48:40',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: false,
      type: 'incoming'
    },
    {
      id: '2',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Question about Assignment 3',
      content: 'Dear Student, I understand your concern about the integration. Let me explain the step-by-step process...',
      timestamp: '2025-02-27 10:03:48',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '3',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Lab Report Submission',
      content: 'Hi Professor, I completed the physics lab report but I\'m having issues uploading it to the portal. Can you help?',
      timestamp: '2025-02-26 14:22:15',
      courseId: '2',
      courseName: 'Physics 201',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '4',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Lab Report Submission',
      content: 'Hello Bob, try refreshing the page and make sure your file is in PDF format. If the issue persists, please email it directly to me.',
      timestamp: '2025-02-26 15:30:22',
      courseId: '2',
      courseName: 'Physics 201',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '5',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Missed Class Today',
      content: 'Dear Professor, I missed today\'s chemistry lecture due to illness. Could you share the notes or recording if available?',
      timestamp: '2025-02-25 16:45:30',
      courseId: '3',
      courseName: 'Chemistry 301',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '6',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Missed Class Today',
      content: 'Hi Carol, I hope you\'re feeling better. I\'ve uploaded the lecture notes to the course portal. Please check the materials section.',
      timestamp: '2025-02-25 18:12:45',
      courseId: '3',
      courseName: 'Chemistry 301',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '7',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Project Group Formation',
      content: 'Hello, I need help finding a group for the final project. Most groups are already formed. What should I do?',
      timestamp: '2025-02-24 12:30:18',
      courseId: '4',
      courseName: 'Computer Science 101',
      isRead: false,
      type: 'incoming'
    },
    {
      id: '8',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Extra Credit Opportunities',
      content: 'Hi Professor, are there any extra credit assignments available? I want to improve my grade in the course.',
      timestamp: '2025-02-23 09:15:42',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '9',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Extra Credit Opportunities',
      content: 'Dear Emma, I appreciate your dedication. I will post some extra credit problems by the end of this week.',
      timestamp: '2025-02-23 14:20:30',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '10',
      senderId: '6',
      senderName: 'Frank Miller',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Exam Schedule Conflict',
      content: 'Dear Professor, I have a scheduling conflict with the midterm exam. Is it possible to arrange an alternative time?',
      timestamp: '2025-02-22 11:45:20',
      courseId: '2',
      courseName: 'Physics 201',
      isRead: true,
      type: 'incoming'
    }
  ];
  export const mockMessagesStudent = [
    {
      id: '1',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Question about Assignment 3',
      content: 'Hello Teacher, I tried to solve problem 2 but I\'m having trouble with the integration part. Could you help me understand the steps?',
      timestamp: '2025-02-26 18:48:40',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: false,
      type: 'outgoing'
    },
    {
      id: '2',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Question about Assignment 3',
      content: 'Dear Student, I understand your concern about the integration. Let me explain the step-by-step process...',
      timestamp: '2025-02-27 10:03:48',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '3',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Lab Report Submission',
      content: 'Hi Professor, I completed the physics lab report but I\'m having issues uploading it to the portal. Can you help?',
      timestamp: '2025-02-26 14:22:15',
      courseId: '2',
      courseName: 'Physics 201',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '4',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Lab Report Submission',
      content: 'Hello Bob, try refreshing the page and make sure your file is in PDF format. If the issue persists, please email it directly to me.',
      timestamp: '2025-02-26 15:30:22',
      courseId: '2',
      courseName: 'Physics 201',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '5',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Missed Class Today',
      content: 'Dear Professor, I missed today\'s chemistry lecture due to illness. Could you share the notes or recording if available?',
      timestamp: '2025-02-25 16:45:30',
      courseId: '3',
      courseName: 'Chemistry 301',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '6',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Missed Class Today',
      content: 'Hi Carol, I hope you\'re feeling better. I\'ve uploaded the lecture notes to the course portal. Please check the materials section.',
      timestamp: '2025-02-25 18:12:45',
      courseId: '3',
      courseName: 'Chemistry 301',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '7',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Project Group Formation',
      content: 'Hello, I need help finding a group for the final project. Most groups are already formed. What should I do?',
      timestamp: '2025-02-24 12:30:18',
      courseId: '4',
      courseName: 'Computer Science 101',
      isRead: false,
      type: 'outgoing'
    },
    {
      id: '8',
      senderId: '3',
      senderName: 'Yusuf Arslan',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Extra Credit Opportunities',
      content: 'Hi Professor, are there any extra credit assignments available? I want to improve my grade in the course.',
      timestamp: '2025-02-23 09:15:42',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: true,
      type: 'outgoing'
    },
    {
      id: '9',
      senderId: 'teacher',
      senderName: 'Zack Kaya',
      senderRole: 'teacher',
      receiverId: '3',
      receiverName: 'Yusuf Arslan',
      subject: 'Re: Extra Credit Opportunities',
      content: 'Dear Emma, I appreciate your dedication. I will post some extra credit problems by the end of this week.',
      timestamp: '2025-02-23 14:20:30',
      courseId: '1',
      courseName: 'Mathematics 101',
      isRead: true,
      type: 'incoming'
    },
    {
      id: '10',
      senderId: '6',
      senderName: 'Frank Miller',
      senderRole: 'student',
      receiverId: 'teacher',
      receiverName: 'Teacher : Zack Kaya',

      subject: 'Exam Schedule Conflict',
      content: 'Dear Professor, I have a scheduling conflict with the midterm exam. Is it possible to arrange an alternative time?',
      timestamp: '2025-02-22 11:45:20',
      courseId: '2',
      courseName: 'Physics 201',
      isRead: true,
      type: 'outgoing'
    }
  ];
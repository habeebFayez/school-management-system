import { courses, users } from './mockData';

export const assignments= [
  {
    id: '1',
    assignmentId: 'PH101',
    classId: 'Physics (PH101)',
    courseName: 'Physics',
    course: courses.find(course => course.name === 'Physics'),
    title: 'Quantum Mechanics Basics',
    deadline: '2025.06.06',
    time: '22:59',
    status: 'previous',
    grade: 10,
    description: 'Introduction to quantum mechanics principles and wave functions.',
    message: 'Please submit your solutions showing all work.',
    fileName: 'quantum_assignment.pdf',
    fileSize: '2.4 MB'
  },
  {
    id: '2',
    assignmentId: 'DS458',
    classId: 'DS458',
    courseName: 'Data Science',
    course: courses.find(course => course.name === 'Data Science'),
    title: 'Machine Learning Project',
    grade: 10,
    deadline: '2025.06.20',
    time: '23:59',
    status: 'upcoming',
    description: 'Build a classification model using supervised learning.',
    message: 'Submit both code and report.',
    fileName: 'machine_learning_project.pdf',
    fileSize: '3.5 MB'
  },
  {
    id: '3',
    assignmentId: 'CS201',
    classId: 'CS201',
    courseName: 'Computer Science',
    course: courses.find(course => course.name === 'Computer Science'),
    title: 'Algorithm Analysis',
    deadline: '2025.05.10',
    time: '17:00',
    grade: 10,
    status: 'previous',
    description: 'Analyze time complexity of sorting algorithms.',
    fileName: 'algorithms.pdf',
    fileSize: '1.8 MB'
  },
  {
    id: '4',
    assignmentId: 'MATH301',
    classId: 'MATH301',
    courseName: 'Mathematics',
    course: courses.find(course => course.name === 'Mathematics'),
    title: 'Calculus Integration',
    grade: 10,
    deadline: '2025.06.15',
    time: '14:30',
    status: 'upcoming',
    description: 'Solve complex integration problems using various techniques.',
    fileName: 'calculus_integration.pdf',
    fileSize: '2.1 MB'
  },
  {
    id: '5',
    assignmentId: 'ENG102',
    classId: 'ENG102',
    courseName: 'English',
    course: courses.find(course => course.name === 'Turkish Literature'),
    title: 'Literary Analysis Essay',
    grade: 10,
    deadline: '2025.05.20',
    time: '16:00',
    status: 'previous',
    description: 'Analyze themes in modern literature.',
    fileName: 'essay_guidelines.pdf',
    fileSize: '945 KB'
  },
  {
    id: '6',
    assignmentId: 'CHEM201',
    classId: 'CHEM201',
    courseName: 'Chemistry',
    course: courses.find(course => course.name === 'Chemistry'),
    title: 'Organic Synthesis Lab',
    grade: 10,
    deadline: '2025.06.25',
    time: '18:00',
    status: 'upcoming',
    description: 'Complete synthesis of organic compounds in laboratory.',
    fileName: 'organic_synthesis_lab.pdf',
    fileSize: '4.0 MB'
  },
  {
    id: '7',
    assignmentId: 'BIO150',
    classId: 'BIO150',
    courseName: 'Biology',
    course: courses.find(course => course.name === 'Biology'),
    title: 'Cell Structure Study',
    grade: 10,
    deadline: '2025.05.08',
    time: '12:00',
    status: 'previous',
    description: 'Microscopic analysis of various cell types.',
    fileName: 'cell_lab.pdf',
    fileSize: '3.2 MB'
  },
  {
    id: '8',
    assignmentId: 'HIST205',
    classId: 'HIST205',
    courseName: 'History',
    course: courses.find(course => course.name === 'History'),
    title: 'World War II Analysis',
    grade: 10,
    deadline: '2025.06.30',
    time: '20:00',
    status: 'upcoming',
    description: 'Research and analyze key events of World War II.',
    fileName: 'wwii_analysis_guidelines.pdf',
    fileSize: '1.8 MB'
  },
  {
    id: '9',
    assignmentId: 'PSYC101',
    classId: 'PSYC101',
    courseName: 'Psychology',
    course: courses.find(course => course.name === 'Psychology'),
    title: 'Behavioral Patterns Research',
    grade: 10,
    deadline: '2025.05.25',
    time: '15:30',
    status: 'previous',
    description: 'Study and document behavioral patterns in different age groups.',
    fileName: 'research_template.pdf',
    fileSize: '1.5 MB'
  },
  {
    id: '10',
    assignmentId: 'ECON301',
    classId: 'ECON301',
    courseName: 'Economics',
    course: courses.find(course => course.name === 'Economics'),
    title: 'Market Analysis Report',
    grade: 10,
    deadline: '2025.07.05',
    time: '19:00',
    status: 'upcoming',
    description: 'Analyze current market trends and economic indicators.',
    fileName: 'market_analysis_report.pdf',
    fileSize: '2.5 MB'
  },
  {
    id: '11',
    assignmentId: 'ART150',
    classId: 'ART150',
    courseName: 'Art',
    course: courses.find(course => course.name === 'Art'),
    title: 'Digital Portfolio Creation',
    grade: 10,
    deadline: '2025.05.18',
    time: '13:00',
    status: 'previous',
    description: 'Create a comprehensive digital art portfolio.',
    fileName: 'portfolio_requirements.pdf',
    fileSize: '2.1 MB'
  },
  {
    id: '12',
    assignmentId: 'MUS200',
    classId: 'MUS200',
    courseName: 'Music',
    course: courses.find(course => course.name === 'Music'),
    title: 'Composition Project',
    grade: 10,
    deadline: '2025.07.10',
    time: '16:30',
    status: 'upcoming',
    description: 'Compose an original piece using learned techniques.',
    fileName: 'composition_project_brief.pdf',
    fileSize: '1.1 MB'
  },
  {
    id: '13',
    assignmentId: 'PE101',
    classId: 'PE101',
    courseName: 'Physical Education',
    course: courses.find(course => course.name === 'Physical Education'),
    title: 'Fitness Assessment',
    grade: 10,
    deadline: '2025.05.12',
    time: '10:00',
    status: 'previous',
    description: 'Complete comprehensive fitness evaluation.',
    fileName: 'fitness_log.pdf',
    fileSize: '1.2 MB'
  },
  {
    id: '14',
    assignmentId: 'SOC250',
    classId: 'SOC250',
    courseName: 'Sociology',
    course: courses.find(course => course.name === 'Sociology'),
    title: 'Social Media Impact Study',
    grade: 10,
    deadline: '2025.07.15',
    time: '21:00',
    status: 'upcoming',
    description: 'Research the impact of social media on society.',
    fileName: 'social_media_study_guide.pdf',
    fileSize: '2.2 MB'
  },
  {
    id: '15',
    assignmentId: 'PHIL180',
    classId: 'PHIL180',
    courseName: 'Philosophy',
    course: courses.find(course => course.name === 'Philosophy'),
    title: 'Ethics in Technology',
    grade: 10,
    deadline: '2025.05.30',
    time: '14:00',
    status: 'previous',
    description: 'Explore ethical implications of modern technology.',
    fileName: 'ethics_reading.pdf',
    fileSize: '1.8 MB'
  },
  {
    id: '16',
    assignmentId: 'STAT200',
    classId: 'STAT200',
    courseName: 'Statistics',
    course: courses.find(course => course.name === 'Statistics'),
    title: 'Probability Distributions',
    grade: 10,
    deadline: '2025.07.20',
    time: '17:30',
    status: 'upcoming',
    description: 'Calculate and analyze various probability distributions.',
    fileName: 'probability_distributions.pdf',
    fileSize: '1.9 MB'
  }
];

export const submissions = [
  {
    id: '1',
    studentId: users[2].id,
    studentName: users[2].name,
    avatar: users[2].avatar,
    fileName: 'quantum_solution.pdf',
    status: 'submitted',
    grade: '85',
    submissionDate: '2025.05.14'
  },
  {
    id: '2',
    studentId: users[14].id,
    studentName: users[14].name,
    avatar: users[14].avatar,
    fileName: 'quantum_analysis.pdf',
    status: 'submitted',
    grade: '92',
    submissionDate: '2025.05.13'
  },
  {
    id: '3',
    studentId: users[15].id,
    studentName: users[15].name,
    avatar: users[15].avatar,
    status: 'not-submitted'
  },
  {
    id: '4',
    studentId: users[16].id,
    studentName: users[16].name,
    avatar: users[16].avatar,
    fileName: 'assignment_1.pdf',
    status: 'submitted',
    grade: '78',
    submissionDate: '2025.05.15'
  },
  {
    id: '5',
    studentId: users[17].id,
    studentName: users[17].name,
    avatar: users[17].avatar,
    fileName: 'physics_hw.pdf',
    status: 'submitted',
    grade: '88',
    submissionDate: '2025.05.12'
  },
  {
    id: '6',
    studentId: users[18].id,
    studentName: users[18].name,
    avatar: users[18].avatar,
    fileName: 'quantum_report.pdf',
    status: 'submitted',
    grade: '95',
    submissionDate: '2025.05.11'
  },
  {
    id: '7',
    studentId: users[19].id,
    studentName: users[19].name,
    avatar: users[19].avatar,
    fileName: 'assignment_submission.pdf',
    status: 'submitted',
    grade: '82',
    submissionDate: '2025.05.14'
  },
  {
    id: '8',
    studentId: users[20].id,
    studentName: users[20].name,
    avatar: users[20].avatar,
    fileName: 'physics_project.pdf',
    status: 'submitted',
    grade: '90',
    submissionDate: '2025.05.13'
  },
  {
    id: '9',
    studentId: users[21].id,
    studentName: users[21].name,
    avatar: users[21].avatar,
    status: 'not-submitted'
  },
  
];
export const submissionsFull = assignments.map((assignment, idx) => {
  const isPrevious = new Date(assignment.deadline) < new Date();
  // Make the first two previous assignments and the first upcoming assignment 'not-submitted'
  if (
    (isPrevious && (idx === 0 || idx === 1 ||idx === 2)) ||
    (!isPrevious && idx === assignments.findIndex(a => new Date(a.deadline) >= new Date()))
  ) {
    return {
      id: (idx + 1).toString(),
      assignmentId: assignment.id,
      status: 'not-submitted'
    };
  }
  // The rest are submitted
  return {
    id: (idx + 1).toString(),
    assignmentId: assignment.id,
    fileName: `assignment_${assignment.id}.pdf`,
    status: 'submitted',
    grade: (80 + (idx * 3)) % 100 + '',
    submissionDate: `2025.05.${10 + (idx % 20)}`
  };
});
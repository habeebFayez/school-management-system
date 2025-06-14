// Mock data for the School Management System

// Define the list of possible classes
const possibleClasses = ["3A", "3B", "3C", "4A", "4B", "5A", "5B", "6A", "6B", "7A"];

// Helper function to get a random class from the list
const getRandomClass = () => {
  return possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
};

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
    class: getRandomClass()
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
    class: getRandomClass()
  },
  {
    id: 15,
    name: 'Selin Yılmaz',
    role: 'student',
    email: 'selin.yilmaz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    grade: '10th',
    class: getRandomClass()
  },
  {
    id: 16,
    name: 'Emre Demir',
    role: 'student',
    email: 'emre.demir@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    grade: '12th',
    class: getRandomClass()
  },
  {
    id: 17,
    name: 'Zeynep Şahin',
    role: 'student',
    email: 'zeynep.sahin@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    grade: '11th',
    class: getRandomClass()
  },
  {
    id: 18,
    name: 'Kerem Polat',
    role: 'student',
    email: 'kerem.polat@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
    grade: '10th',
    class: getRandomClass()
  },
  {
    id: 19,
    name: 'Derya Yıldız',
    role: 'student',
    email: 'derya.yildiz@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/59.jpg',
    grade: '12th',
    class: getRandomClass()
  },
  {
    id: 20,
    name: 'Baran Aydın',
    role: 'student',
    email: 'baran.aydin@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
    grade: '11th',
    class: getRandomClass()
  },
  {
    id: 21,
    name: 'Ece Özdemir',
    role: 'student',
    email: 'ece.ozdemir@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    grade: '10th',
    class: getRandomClass()
  },
  {
    id: 22,
    name: 'Mert Can',
    role: 'student',
    email: 'mert.can@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    grade: '12th',
    class: getRandomClass()
  },
  {
    id: 23,
    name: 'Buse Aksoy',
    role: 'student',
    email: 'buse.aksoy@titan.edu.tr',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    grade: '11th',
    class: getRandomClass()
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
    classes: ["3A", "3B", "3C", "4A", "4B", "5A", "5B", "6A", "6B"]
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
    deadline: "2025-05-20",
    status: "submitted",
    grade: "95/100"
  },
  {
    id: 2,
    courseId: 1,
    title: "Calculus Introduction",
    description: "Solve the derivative problems on page 45",
    deadline: "2025-06-05",
    status: "pending",
    grade: null
  },
  {
    id: 3,
    courseId: 2,
    title: "Newton's Laws Lab Report",
    description: "Write a report on the experiment conducted in class",
    deadline: "2025-05-25",
    status: "graded",
    grade: "88/100"
  },
  {
    id: 4,
    courseId: 3,
    title: "Periodic Table Quiz",
    description: "Prepare for the quiz on the first 20 elements",
    deadline: "2025-05-15",
    status: "graded",
    grade: "92/100"
  },
  {
    id: 5,
    courseId: 4,
    title: "Poetry Analysis",
    description: "Analyze the poem discussed in class and write a 500-word essay",
    deadline: "2025-06-10",
    status: "pending",
    grade: null
  },
  {
    id: 6,
    courseId: 5,
    title: "Historical Timeline",
    description: "Create a timeline of major events from 1900-1950",
    deadline: "2025-06-01",
    status: "pending",
    grade: null
  }
];

// Helper function to generate random data for exams
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomBoolean = () => Math.random() > 0.5;

// Generate mock questions and choices
const generateMockQuestions = (examId, numberOfQuestions) => {
  const questions = [];
  for (let i = 1; i <= numberOfQuestions; i++) {
    const questionId = `${examId}-${i}`;
    const choices = ['A', 'B', 'C', 'D'].map(choiceId => ({
      choiceId: choiceId,
      value: `Answer ${choiceId} for question ${i}`,
      questionId: questionId
    }));
    const correctAnswer = choices[getRandomInt(0, 3)].value; // Random correct answer value

    questions.push({
      id: questionId,
      examid: examId,
      question: `This is question ${i} for exam ${examId}.`,
      image: getRandomBoolean() ? `https://via.placeholder.com/150?text=Exam+${examId}+Q${i}` : null,
      number_of_choices: 4,
      correct_answer: correctAnswer,
      points: getRandomInt(2, 5),
      Choices: choices
    });
  }
  return questions;
};

// --- Updated function to generate mock grades for an exam based on course students ---
const generateMockGrades = (exam, allCourses) => {
  const grades = [];
  // Find the course associated with this exam
  const associatedCourse = allCourses.find(course => course.id === exam.course.id);

  if (!associatedCourse || !associatedCourse.students) {
    console.warn(`Course or students not found for exam ID ${exam.id}. Skipping grade generation.`);
    return []; // Return empty array if course or students are missing
  }

  const enrolledStudents = associatedCourse.students;
 
  // Generate grades for all enrolled students
  const studentsForExam = enrolledStudents; // Include all students

  studentsForExam.forEach(student => {
    const attended = getRandomBoolean();
    let score = null;
    let percentage = null;
    let passed = false;
    let feedback = "";

    if (attended) {
      // Generate a score between 0 and Total_Points
      score = getRandomInt(1, exam.Total_Points);
      // Calculate percentage based on the actual score and Total_Points
      percentage = Math.round((score / exam.Total_Points) * 100);
      // Check if passed based on the exam's PassingGrade
      passed = percentage >= exam.PassingGrade;

      // Generate appropriate feedback based on performance
      if (percentage >= exam.PassingGrade) {
        if (percentage >= 90) {
          feedback = "Excellent performance!";
        } else if (percentage >= 80) {
          feedback = "Very good work!";
        } else if (percentage >= 70) {
          feedback = "Good job!";
        } else {
          feedback = "Passed, but needs improvement.";
        }
      } else {
        if (percentage >= exam.PassingGrade * 0.7) {
          feedback = "Close to passing, keep working hard!";
        } else {
          feedback = "Needs significant improvement.";
        }
      }
    } else {
      // If not attended, set score to 0 and percentage to 0
      score = 0;
      percentage = 0;
      passed = false; // Did not attend, so did not pass
      feedback = "Student did not attend the exam.";
    }

    grades.push({
      studentId: student.id,
      attended: attended,
      score: score,
      passed: passed,
      percentage: percentage,
      feedback: feedback,
    });
  });

  return grades;
};

export const exams = [
  {
    id: 1,
    course: courses[0],
    title: "Midterm Exam",
    date: "2025-05-10",
    time: "09:00",
    duration: getRandomInt(45, 55),
    topics: "Chapters 1-5",
    location: "Online",
    isOnline: true,
    Total_Points: 20,
    isRandomQuestions: true,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "This midterm exam covers fundamental algebra and calculus concepts from chapters 1-5. Students should bring their calculators and formula sheets. The exam will include both multiple-choice and problem-solving questions.",
    questions: generateMockQuestions(1, 10),
    grades: generateMockGrades({ id: 1, course: courses[0], Total_Points: 20, PassingGrade: 50 }, courses),
  },
  {
    id: 2,
    course: courses[1],
    title: "Final Exam",
    date: "2025-07-01",
    time: "13:00",
    duration: getRandomInt(45, 55),
    topics: "Comprehensive",
    location: "Main Hall",
    isOnline: false,
    Total_Points: 50,
    isRandomQuestions: false,
    number_of_questions: 15,
    PassingGrade: 50,
    description: "Comprehensive final exam covering all physics principles and mechanics taught throughout the semester. Students must bring their own calculators and formula sheets. The exam includes theoretical questions and practical problem-solving scenarios.",
    questions: generateMockQuestions(2, 15),
    grades: generateMockGrades({ id: 2, course: courses[1], Total_Points: 50, PassingGrade: 50 }, courses),
  },
  {
    id: 3,
    course: courses[2],
    title: "Lab Practical",
    date: "2025-07-01",
    time: "11:00",
    duration: getRandomInt(45, 55),
    topics: "Lab techniques and safety",
    location: "Chemistry Lab",
    isOnline: false,
    Total_Points: 5,
    isRandomQuestions: false,
    number_of_questions: 5,
    PassingGrade: 50,
    description: "Practical exam focusing on laboratory techniques and safety procedures. Students must wear appropriate lab attire and bring their lab notebooks. The exam will test your ability to perform basic chemical experiments safely and accurately.",
    questions: generateMockQuestions(3, 5),
    grades: generateMockGrades({ id: 3, course: courses[2], Total_Points: 5, PassingGrade: 50 }, courses),
  },
  {
    id: 4,
    course: courses[3],
    title: "Quiz",
    date: "2025-06-20",
    time: "10:30",
    duration: getRandomInt(45, 55),
    topics: "Modern Turkish Literature",
    location: "Online",
    isOnline: true,
    Total_Points: 10,
    isRandomQuestions: true,
    number_of_questions: 8,
    PassingGrade: 50,
    description: "Essay-based exam focusing on modern Turkish literature. Students will analyze selected works and demonstrate their understanding of literary techniques and themes. Bring your course materials and notes for reference.",
    questions: generateMockQuestions(4, 8),
    grades: generateMockGrades({ id: 4, course: courses[3], Total_Points: 10, PassingGrade: 50 }, courses),
  },
  {
    id: 5,
    course: courses[4],
    title: "Quiz",
    date: "2025-06-15",
    time: "08:30",
    duration: getRandomInt(45, 55),
    topics: "World War II",
    location: "Online",
    isOnline: true,
    Total_Points: 5,
    isRandomQuestions: true,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "Short quiz covering key events and figures of World War II. The quiz includes multiple-choice questions and short answer responses. Students should focus on major battles, political developments, and their global impact.",
    questions: generateMockQuestions(5, 10),
    grades: generateMockGrades({ id: 5, course: courses[4], Total_Points: 5, PassingGrade: 50 }, courses),
  },
  {
    id: 6,
    course: courses[5],
    title: "Final Exam",
    date: "2025-06-06",
    time: "14:00",
    duration: 45,
    topics: "Genetics and Evolution",
    location: "Biology Lab",
    isOnline: false,
    Total_Points: 50,
    isRandomQuestions: false,
    number_of_questions: 12,
    PassingGrade: 50,
    description: "Comprehensive final exam on genetics and evolution. The exam includes theoretical questions, practical applications, and case studies. Students should bring their lab notebooks and any relevant study materials.",
    questions: generateMockQuestions(6, 12),
    grades: generateMockGrades({ id: 6, course: courses[5], Total_Points: 50, PassingGrade: 50 }, courses),
  },
  {
    id: 7,
    course: courses[6],
    title: "Project",
    date: "2025-06-05",
    time: "10:00",
    duration: getRandomInt(45, 55),
    topics: "Algorithms and Data Structures",
    location: "Online",
    isOnline: true,
    Total_Points: 10,
    isRandomQuestions: false,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "Practical programming exam focusing on algorithms and data structures. Students will implement solutions to given problems using their preferred programming language. The exam tests both theoretical knowledge and practical coding skills.",
    questions: generateMockQuestions(7, 10),
    grades: generateMockGrades({ id: 7, course: courses[6], Total_Points: 10, PassingGrade: 50 }, courses),
  },
  {
    id: 8,
    course: courses[7],
    title: "Quiz",
    date: "2025-03-10",
    time: "12:00",
    duration: getRandomInt(45, 55),
    topics: "Visual Arts Techniques",
    location: "Art Studio",
    isOnline: false,
    Total_Points: 5,
    isRandomQuestions: false,
    number_of_questions: 5,
    PassingGrade: 50,
    description: "Portfolio review and practical assessment of visual arts techniques. Students will present their work and demonstrate their understanding of various artistic methods. Bring your portfolio and necessary art supplies.",
    questions: generateMockQuestions(8, 5),
    grades: generateMockGrades({ id: 8, course: courses[7], Total_Points: 5, PassingGrade: 50 }, courses),
  },
  {
    id: 9,
    course: courses[8],
    title: "Quiz",
    date: "2025-06-20",
    time: "10:00",
    duration: getRandomInt(45, 55),
    topics: "Physical Fitness Assessment",
    location: "Gymnasium",
    isOnline: false,
    Total_Points: 5,
    isRandomQuestions: true,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "Practical fitness assessment including various physical activities and measurements. Students should wear appropriate athletic attire and bring water. The test evaluates overall physical fitness and specific athletic abilities.",
    questions: generateMockQuestions(9, 10),
    grades: generateMockGrades({ id: 9, course: courses[8], Total_Points: 5, PassingGrade: 50 }, courses),
  },
  {
    id: 10,
    course: courses[9],
    title: "Final Exam",
    date: "2025-05-15",
    time: "15:00",
    duration: getRandomInt(45, 55),
    topics: "Major Philosophers",
    location: "Online",
    isOnline: true,
    Total_Points: 50,
    isRandomQuestions: false,
    number_of_questions: 8,
    PassingGrade: 50,
    description: "Oral examination covering major philosophers and their contributions. Students will discuss philosophical concepts and demonstrate their understanding through dialogue. The exam tests both knowledge and critical thinking skills.",
    questions: generateMockQuestions(10, 8),
    grades: generateMockGrades({ id: 10, course: courses[9], Total_Points: 50, PassingGrade: 50 }, courses),
  },
  // Exams in 2025
  {
    id: 11,
    course: courses[0],
    title: "Midterm Exam",
    date: "2025-03-12",
    time: "10:00",
    duration: getRandomInt(45, 55),
    topics: "Algebra and Calculus",
    location: "Online",
    isOnline: true,
    Total_Points: 20,
    isRandomQuestions: true,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "Spring midterm exam covering advanced algebra and calculus topics. Students should bring their calculators and formula sheets. The exam includes both theoretical questions and practical problem-solving exercises.",
    questions: generateMockQuestions(11, 10),
    grades: generateMockGrades({ id: 11, course: courses[0], Total_Points: 20, PassingGrade: 50 }, courses),
  },
  {
    id: 12,
    course: courses[1],
    title: "Final Exam",
    date: "2025-05-18",
    time: "13:30",
    duration: getRandomInt(45, 55),
    topics: "Electricity and Magnetism",
    location: "Physics Lab",
    isOnline: false,
    Total_Points: 50,
    isRandomQuestions: false,
    number_of_questions: 5,
    PassingGrade: 50,
    description: "Laboratory-based final exam focusing on electricity and magnetism experiments. Students must demonstrate proper lab techniques and safety procedures. Bring your lab notebook and necessary safety equipment.",
    questions: generateMockQuestions(12, 5),
    grades: generateMockGrades({ id: 12, course: courses[1],Total_Points: 50, PassingGrade: 50 }, courses),
  },
  {
    id: 13,
    course: courses[2],
    title: "Final Exam",
    date: "2025-06-05",
    time: "09:30",
    duration: getRandomInt(45, 55),
    topics: "Organic Chemistry",
    location: "Chemistry Lab",
    isOnline: false,
    Total_Points: 50,
    isRandomQuestions: true,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "Comprehensive final exam on organic chemistry principles and reactions. The exam includes theoretical questions and practical applications. Students should bring their molecular model kits and periodic tables.",
    questions: generateMockQuestions(13, 10),
    grades: generateMockGrades({ id: 13, course: courses[2], Total_Points: 50, PassingGrade: 50 }, courses),
  },
  {
    id: 14,
    course: courses[3],
    title: "Final Exam",
    date: "2025-04-10",
    time: "11:00",
    duration: getRandomInt(45, 55),
    topics: "Modern and Classical Literature",
    location: "Online",
    isOnline: true,
    Total_Points: 50,
    isRandomQuestions: false,
    number_of_questions: 8,
    PassingGrade: 50,
    description: "Final essay exam comparing modern and classical Turkish literature. Students will analyze selected works and discuss their historical and cultural significance. Bring your course materials and notes for reference.",
    questions: generateMockQuestions(14, 8),
    grades: generateMockGrades({ id: 14, course: courses[3], Total_Points: 50, PassingGrade: 50 }, courses),
  },
  {
    id: 15,
    course: courses[0],
    title: "Final Exam",
    date: "2025-07-01",
    time: "08:00",
    duration: getRandomInt(45, 55),
    topics: "20th Century History",
    location: "Online",
    isOnline: true,
    Total_Points: 50,
    isRandomQuestions: true,
    number_of_questions: 15,
    PassingGrade: 50,
    description: "Comprehensive final exam covering major events and developments of the 20th century. The exam includes essay questions, short answers, and source analysis. Students should focus on political, social, and economic changes.",
    questions: generateMockQuestions(15, 15),
    grades: generateMockGrades({ id: 15, course: courses[4], Total_Points: 50, PassingGrade: 50 }, courses),
  },
  {
    id: 16,
    course: courses[5],
    title: "Quiz",
    date: "2025-03-28",
    time: "14:30",
    duration: getRandomInt(45, 55),
    topics: "Cell Biology",
    location: "Biology Lab",
    isOnline: false,
    Total_Points: 5,
    isRandomQuestions: false,
    number_of_questions: 5,
    PassingGrade: 50,
    description: "Short quiz on cell biology concepts and laboratory observations. Students will answer questions based on their practical work and theoretical knowledge. Bring your lab notebook and microscope slides.",
    questions: generateMockQuestions(16, 5),
    grades: generateMockGrades({ id: 16, course: courses[5], Total_Points: 5, PassingGrade: 50 }, courses),
  },
  {
    id: 17,
    course: courses[0],
    title: "Midterm Exam",
    date: "2025-05-05",
    time: "16:30",
    duration: getRandomInt(45, 55),
    topics: "Sorting and Searching Algorithms",
    location: "Online",
    isOnline: true,
    Total_Points: 20,
    isRandomQuestions: false,
    number_of_questions: 10,
    PassingGrade: 50,
    description: "Practical exam on sorting and searching algorithms. Students will implement and analyze various algorithms, comparing their efficiency and applications. The exam tests both coding skills and algorithmic thinking.",
    questions: generateMockQuestions(17, 10),
    grades: generateMockGrades({ id: 17, course: courses[6], Total_Points: 20, PassingGrade: 50 }, courses),
  },
  {
    id: 18,
    course: courses[7],
    title: "Midterm Exam",
    date: "2025-04-15",
    time: "12:30",
    duration: getRandomInt(45, 55),
    topics: "Renaissance to Modern Art",
    location: "Art Studio",
    isOnline: false,
    Total_Points: 20,
    isRandomQuestions: true,
    number_of_questions: 5,
    PassingGrade: 50,
    description: "Exam covering art history from the Renaissance to modern times. Students will analyze artworks and discuss their historical context and significance. Bring your course materials and any relevant visual aids.",
    questions: generateMockQuestions(18, 5),
    grades: generateMockGrades({ id: 18, course: courses[7], Total_Points: 20, PassingGrade: 50 }, courses),
  },
  {
    id: 19,
    course: courses[8],
    title: "Midterm Exam",
    date: "2025-06-10",
    time: "10:30",
    duration: getRandomInt(45, 55),
    topics: "Endurance and Strength",
    location: "Gymnasium",
    isOnline: false,
    Total_Points: 20,
    isRandomQuestions: false,
    number_of_questions: 5,
    PassingGrade: 50,
    description: "Practical test evaluating students' endurance and strength capabilities. The test includes various physical activities and measurements. Wear appropriate athletic attire and bring water.",
    questions: generateMockQuestions(19, 5),
    grades: generateMockGrades({ id: 19, course: courses[8], Total_Points: 20, PassingGrade: 50 }, courses),
  },
  {
    id: 20,
    course: courses[9],
    title: "Midterm Exam",
    date: "2025-05-20",
    time: "15:30",
    duration: getRandomInt(45, 55),
    topics: "Ethics and Moral Philosophy",
    location: "Online",
    isOnline: true,
    Total_Points: 20,
    isRandomQuestions: true,
    number_of_questions: 8,
    PassingGrade: 50,
    description: "Exam focusing on ethical theories and moral philosophy. Students will analyze case studies and discuss various ethical frameworks. The exam tests both knowledge and critical thinking skills.",
    questions: generateMockQuestions(20, 8),
    grades: generateMockGrades({ id: 20, course: courses[9], Total_Points: 20, PassingGrade: 50 }, courses),
  },
  // Add First Exam for each course
  ...courses.map((course, index) => {
    const examId = 21 + index * 3; // Start ID from 21 and increment by 3 for each course's exams
    return {
      id: examId,
      course: course,
      title: "First Exam",
      date: "2025-05-11", // Example date
      time: "09:00",
      duration: getRandomInt(45, 55),
      topics: `Introduction to ${course.name}`,
      location: "Online",
      isOnline: true,
      Total_Points: 15,
      isRandomQuestions: true,
      number_of_questions: 25,
      PassingGrade: 50,
      description: `First exam for ${course.name}, covering introductory topics.`,
      questions: generateMockQuestions(examId, 25),
      grades: generateMockGrades({ id: examId, course: course, Total_Points: 15, PassingGrade: 50 }, courses),
    };
  }),
   // Add Second Exam for each course
   ...courses.map((course, index) => {
    const examId = 21 + index * 3 + 1; // Assign next ID
    return {
      id: examId,
      course: course,
      title: "Second Exam",
      date: "2025-05-15", // Example date
      time: "14:00",
      duration: getRandomInt(45, 55),
      topics: `Intermediate ${course.name}`,
      location: "Building B, Room 101",
      isOnline: false,
      Total_Points: 15,
      isRandomQuestions: false,
      number_of_questions: 30,
      PassingGrade: 50,
      description: `Second exam for ${course.name}, covering intermediate topics.`,
      questions: generateMockQuestions(examId, 30),
      grades: generateMockGrades({ id: examId, course: course, Total_Points: 15, PassingGrade: 50 }, courses),
    };
  }),
    // AddAssignments for each course
   ...courses.map((course, index) => {
    const examId = 21 + index * 3 + 2; // Assign next ID
    return {
      id: examId,
      course: course,
      title: "Assignment",
      date: "2025-05-19", // Example date
      time: "14:00",
      duration: getRandomInt(45, 55),
      topics: `Intermediate ${course.name}`,
      location: "Building B, Room 101",
      isOnline: false,
      Total_Points: 5,
      isRandomQuestions: false,
      number_of_questions: 30,
      PassingGrade: 50,
      description: `Second exam for ${course.name}, covering intermediate topics.`,
      questions: generateMockQuestions(examId, 30),
      grades: generateMockGrades({ id: examId, course: course, Total_Points: 5, PassingGrade: 50 }, courses),
    };
  })

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
    title: "CO301 | Exam Hall List",
    content: "Dear Students, The attached list contains information about the exam hall where you will take the exam. Each student must take the exam in the hall specified in the list. Do not forget to bring your pencils (not pen) and erasers along with your student ID cards when you come to the exam.",
    dateAdded: "2025-04-10",
    lastUpdate: "2025-04-10",
    isUpdated: false,
    user: users[0],
    course: courses[2], // Chemistry
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    content: "Parent-teacher meetings will be held on December 5th from 3 PM to 6 PM.",
    dateAdded: "2025-04-12",
    lastUpdate: "2025-04-12",
    isUpdated: false,
    user: users[4],
    course: courses[0], // Mathematics
  },
  {
    id: 3,
    title: "Science Fair",
    content: "Annual science fair will be held on December 15th. Prepare your projects!",
    dateAdded: "2025-04-15",
    lastUpdate: "2025-04-15",
    isUpdated: false,
    user: users[6],
    course: courses[1], // Physics
  },
  {
    id: 4,
    title: "Library Book Return Reminder",
    content: "Please return all borrowed library books by April 20th to avoid late fees.",
    dateAdded: "2025-04-16",
    lastUpdate: "2025-04-16",
    isUpdated: true,
    user: users[1],
    course: courses[3], // Turkish Literature
  },
  {
    id: 5,
    title: "New Cafeteria Menu",
    content: "The cafeteria will offer a new menu starting next week. Check the notice board for details.",
    dateAdded: "2025-04-17",
    lastUpdate: "2025-04-17",
    isUpdated: true,
    user: users[5],
    course: courses[4], // History
  },
  {
    id: 6,
    title: "Sports Day Registration",
    content: "Registration for Sports Day is now open. Sign up with your PE teacher by April 25th.",
    dateAdded: "2025-04-18",
    lastUpdate: "2025-04-18",
    isUpdated: false,
    user: users[6],
    course: courses[5], // Biology
  },
  {
    id: 7,
    title: "Art Competition Winners",
    content: "Congratulations to the winners of the annual art competition! See the list on the art room door.",
    dateAdded: "2025-04-19",
    lastUpdate: "2025-04-19",
    isUpdated: false,
    user: users[10],
    course: courses[7], // Art
  },
  {
    id: 8,
    title: "Exam Schedule Update",
    content: "The final exam schedule has been updated. Please check the school portal for the latest dates.",
    dateAdded: "2025-04-20",
    lastUpdate: "2025-04-21",
    isUpdated: true,
    user: users[11],
    course: courses[8], // Physical Education
  },
  {
    id: 9,
    title: "Field Trip Permission Slips",
    content: "All students must submit signed permission slips for the upcoming field trip by April 22nd.",
    dateAdded: "2025-04-20",
    lastUpdate: "2025-04-20",
    isUpdated: false,
    user: users[12],
    course: courses[9], // Philosophy
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

// Helper function to generate realistic attendance status
const getRealisticAttendanceStatus = () => {
  // 85% attended, 10% absent, 5% late
  const rand = Math.random();
  if (rand < 0.85) return 'attended';
  if (rand < 0.95) return 'absent';
  return 'late';
};

// Helper function to generate random justification file name
const generateJustificationFileName = (studentName, date) => {
  const formattedDate = date.replace(/-/g, '');
  return `justification_${studentName.toLowerCase().replace(/\s+/g, '_')}_${formattedDate}.pdf`;
};

// Generate attendance records for a specific date
const generateAttendanceForDate = (date) => {
  return courses.map(course => {
    // Group students by their class
    const studentsByClass = course.students.reduce((acc, student) => {
      const studentClass = student.class;
      if (!acc[studentClass]) {
        acc[studentClass] = [];
      }
      acc[studentClass].push(student);
      return acc;
    }, {});

    // Create attendance records for each class
    const classAttendance = Object.entries(studentsByClass).map(([className, students]) => {
      const studentAttendance = students.map(student => {
        const status = getRealisticAttendanceStatus();
        return {
          studentId: student.id,
          studentName: student.name,
          avatar : student.avatar,
          status: status,
          justification: status === 'absent' ? generateJustificationFileName(student.name, date) : null,
          date: date
        };
      });

      return {
        className: className,
        students: studentAttendance
      };
    });

    return {
      courseId: course.id,
      courseName: course.name,
      courseCode: course.code,
      date: date,
      classes: classAttendance
    };
  });
};

import { addDays, format, isWeekend } from 'date-fns';

// Helper: generate all weekdays in a date range
const getWeekdaysInRange = (start, end) => {
  const days = [];
  let current = new Date(start);
  while (current <= end) {
    if (!isWeekend(current)) {
      days.push(format(current, 'yyyy-MM-dd'));
    }
    current = addDays(current, 1);
  }
  return days;
};

// Helper: assign a random meeting pattern to each course
const meetingPatterns = [
  [1, 3, 5], // MWF
  [2, 4],    // TTh
  [1, 4],    // Mon/Thu
  [3, 5],    // Wed/Fri
];
const courseMeetingDays = {};
courses.forEach(course => {
  const pattern = meetingPatterns[Math.floor(Math.random() * meetingPatterns.length)];
  courseMeetingDays[course.id] = pattern;
});

// Generate realistic attendance records for a semester (e.g., May 2025)
const semesterStart = new Date('2025-05-01');
const semesterEnd = new Date();
const allWeekdays = getWeekdaysInRange(semesterStart, semesterEnd);

export const attendanceRecords = [];
allWeekdays.forEach(dateStr => {
  const dayOfWeek = new Date(dateStr).getDay();
  courses.forEach(course => {
    if (courseMeetingDays[course.id].includes(dayOfWeek)) {
      attendanceRecords.push(...generateAttendanceForDate(dateStr).filter(r => r.courseId === course.id));
    }
  });
});

// Helper function to get the date for a specific day of the week in the week of a reference date
// dayOfWeek: 1 for Monday, 2 for Tuesday, ..., 5 for Friday
const getDateForDayOfWeek = (referenceDate, dayOfWeek) => {
  const date = new Date(referenceDate);
  const currentDay = date.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  // Calculate the difference in days. Adjust for Sunday (0) to be treated as end of week
  // getDay() returns 0 for Sunday, while dayOfWeek is 1-5. Adjust currentDay to match 1-7 scale or adjust dayOfWeek
  // Let's adjust currentDay: Monday is 1, Sunday is 0. We want Monday=1, ..., Friday=5.
  const adjustedCurrentDay = currentDay === 0 ? 7 : currentDay;
  const diff = dayOfWeek - adjustedCurrentDay;
  date.setDate(date.getDate() + diff);
  return format(date, 'yyyy-MM-dd');
};

// Reference date for the week (e.g., Monday, May 5th, 2025)
// We'll use Monday as the start of the week for easier calculation with dayOfWeek (1-5)
const referenceDate = new Date('2025-06-05');

// Lectures array for use in Schedule
export const lectures = [
  {
    id: 1,
    courseId: 1, // Mathematics
    subject: 'Mathematics',
    teacher: courses[0].teacher,
    dayOfWeek: 1, // Monday
    date: getDateForDayOfWeek(referenceDate, 1),
    time: '08:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 2,
    courseId: 2, // Physics
    subject: 'Physics',
    teacher: courses[1].teacher,
    dayOfWeek: 2, // Tuesday
    date: getDateForDayOfWeek(referenceDate, 2),
    time: '09:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 3,
    courseId: 3, // Chemistry
    subject: 'Chemistry',
    teacher: courses[2].teacher,
    dayOfWeek: 3, // Wednesday
    date: getDateForDayOfWeek(referenceDate, 3),
    time: '10:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 4,
    courseId: 4, // Turkish Literature
    subject: 'Turkish Literature',
    teacher: courses[3].teacher,
    dayOfWeek: 4, // Thursday
    date: getDateForDayOfWeek(referenceDate, 4),
    time: '11:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 5,
    courseId: 5, // History
    subject: 'History',
    teacher: courses[4].teacher,
    dayOfWeek: 5, // Friday
    date: getDateForDayOfWeek(referenceDate, 5),
    time: '13:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 6,
    courseId: 6, // Biology
    subject: 'Biology',
    teacher: courses[5].teacher,
    dayOfWeek: 1, // Monday
    date: getDateForDayOfWeek(referenceDate, 1),
    time: '09:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 7,
    courseId: 7, // Computer Science
    subject: 'Computer Science',
    teacher: courses[6].teacher,
    dayOfWeek: 3, // Wednesday
    date: getDateForDayOfWeek(referenceDate, 3),
    time: '11:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 8,
    courseId: 8, // Art
    subject: 'Art',
    teacher: courses[7].teacher,
    dayOfWeek: 2, // Tuesday
    date: getDateForDayOfWeek(referenceDate, 2),
    time: '10:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 9,
    courseId: 9, // Physical Education
    subject: 'Physical Education',
    teacher: courses[8].teacher,
    dayOfWeek: 4, // Thursday
    date: getDateForDayOfWeek(referenceDate, 4),
    time: '14:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 10,
    courseId: 10, // Philosophy
    subject: 'Philosophy',
    teacher: courses[9].teacher,
    dayOfWeek: 5, // Friday
    date: getDateForDayOfWeek(referenceDate, 5),
    time: '08:00',
    mode: 'Online',
    type: 'Lecture',
  },
  // Additional lectures for more variety
  {
    id: 11,
    courseId: 1,
    subject: 'Mathematics',
    teacher: courses[0].teacher,
    dayOfWeek: 3, // Wednesday
    date: getDateForDayOfWeek(referenceDate, 3),
    time: '09:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 12,
    courseId: 2,
    subject: 'Physics',
    teacher: courses[1].teacher,
    dayOfWeek: 4, // Thursday
    date: getDateForDayOfWeek(referenceDate, 4),
    time: '10:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 13,
    courseId: 3,
    subject: 'Chemistry',
    teacher: courses[2].teacher,
    dayOfWeek: 2, // Tuesday
    date: getDateForDayOfWeek(referenceDate, 2),
    time: '13:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 14,
    courseId: 4,
    subject: 'Turkish Literature',
    teacher: courses[3].teacher,
    dayOfWeek: 1, // Monday
    date: getDateForDayOfWeek(referenceDate, 1),
    time: '10:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 15,
    courseId: 5,
    subject: 'History',
    teacher: courses[4].teacher,
    dayOfWeek: 2, // Tuesday
    date: getDateForDayOfWeek(referenceDate, 2),
    time: '11:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 16,
    courseId: 6,
    subject: 'Biology',
    teacher: courses[5].teacher,
    dayOfWeek: 4, // Thursday
    date: getDateForDayOfWeek(referenceDate, 4),
    time: '08:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 17,
    courseId: 7,
    subject: 'Computer Science',
    teacher: courses[6].teacher,
    dayOfWeek: 5, // Friday
    date: getDateForDayOfWeek(referenceDate, 5),
    time: '09:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 18,
    courseId: 8,
    subject: 'Art',
    teacher: courses[7].teacher,
    dayOfWeek: 1, // Monday
    date: getDateForDayOfWeek(referenceDate, 1),
    time: '11:00',
    mode: 'in Class',
    type: 'Lecture',
  },
  {
    id: 19,
    courseId: 9,
    subject: 'Physical Education',
    teacher: courses[8].teacher,
    dayOfWeek: 2, // Tuesday
    date: getDateForDayOfWeek(referenceDate, 2),
    time: '14:00',
    mode: 'Online',
    type: 'Lecture',
  },
  {
    id: 20,
    courseId: 10,
    subject: 'Philosophy',
    teacher: courses[9].teacher,
    dayOfWeek: 3, // Wednesday
    date: getDateForDayOfWeek(referenceDate, 3),
    time: '08:00',
    mode: 'in Class',
    type: 'Lecture',
  }
];

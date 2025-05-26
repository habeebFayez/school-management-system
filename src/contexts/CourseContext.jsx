import React, { createContext, useState, useContext } from "react";
import { courses as mockCourses } from "../data/mockData";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(mockCourses);

  const fetchCourses = () => setCourses(mockCourses);
  const updateCourse = (id, updates) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, ...updates } : course
      )
    );
  };

  return (
    <CourseContext.Provider value={{ courses, fetchCourses, updateCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext); 
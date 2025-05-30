import React from 'react'
import Layout from '../../components/layouts/Layout';
import Table from '../../components/shared/Table';
import {courses} from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';

export const TeachersList   = () => {
  const { user } = useAuth();

  
  const columns = ['Name', 'Course','Status', 'Office Hours','Contact'];

  const transformedData = courses
  .filter(course => course.students.some(student => student.id === user.id))
  .map(course => ({
    Name: {
      name: course.teacher.name,
      avatar: course.teacher.avatar,
    },
    Course: course.code,
    Status: course.teacher.status,
    Office_Hours: 'Mon-Wed, 2–4 PM',
    Contact: course.teacher.email,
  }));

  return (
    <Layout currentPage={'TeachersList'}>
        <Table
              data={transformedData}
              title="Courses"
              columns={columns}
              user={{ role: 'student' }}
            />
      
    </Layout>
  )
}
export default TeachersList ;
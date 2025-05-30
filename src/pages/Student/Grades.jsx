import React from 'react'
import Layout from '../../components/layouts/Layout';
import Table from '../../components/shared/Table';
import {mockGrades} from '../../data/mockData';
import AverageDisplay from "../../components/shared/AverageDisplay"
import { Eye } from 'lucide-react';

const Grades = () => {
  const columns = ['Course', '1st', '2nd',  'Assignments', 'Final', 'Average', 'Status'];


  const transformedData = mockGrades.map(grade => ({
    Course: grade.course,
    '1st': grade.first ? <AverageDisplay value={grade.first} size="md" /> : <AverageDisplay value={null} size="md" />,
    '2nd': grade.second ? <AverageDisplay value={grade.second} size="md" /> : <AverageDisplay value={null} size="md" />,
    'Assignments': grade.assignment ? <AverageDisplay value={grade.assignment} size="md" /> : <AverageDisplay value={null} size="md" />,
    Final: grade.final ? <AverageDisplay value={grade.final} size="md" /> : <AverageDisplay value={null} size="md" />,
    Average: grade.average ? <AverageDisplay value={grade.average} size="md" /> : <AverageDisplay value={null} size="md" />,
    Status: grade.status
  }));

  const actionComponent = (
    <button className="p-2 hover:bg-gray-100 -ml-4 rounded-full transition-colors">
      <div className="bg-gradient-to-br from-[#10062B] to-[#4F0129] flex justify-center items-center h-8 w-8 rounded-full hover:opacity-90">
        <Eye size={16} color="white" />
      </div>
    </button>
  );

  return (
    <Layout currentPage={'Grades'}>
      <div className='px-12 ' >

        <div className=" px-0">

          <div className="mt-2 space-y-2  ">
            <Table
              data={transformedData}
              title="Grades"
              columns={columns}
              user={{ role: 'student' }}
            />
          </div>
        </div>
      </div>


    </Layout>
  )
}
export default Grades;

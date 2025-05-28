import React from "react";
import Layout from "../../components/layouts/Layout";
import GradesTable from "../../components/teacher/GradesTable";

const Grades = () => {
  return (
    <Layout currentPage={"Grades"}>
      <GradesTable />
    </Layout>
  );
};

export default Grades;

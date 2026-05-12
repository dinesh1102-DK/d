import React, { useEffect, useState } from "react";

function StudentDetails({ id }) {
  const [student, setStudent] = useState({});

  useEffect(() => {
    const students = {
      1: { name: "Dinesh", course: "React JS" },
      2: { name: "Kumar", course: "Java" },
      3: { name: "Rahul", course: "Python" },
    };

    setStudent(students[id]);
  }, [id]);

  return (
    <div>
      <h2>Student Details</h2>

      <p><b>ID:</b> {id}</p>
      <p><b>Name:</b> {student?.name}</p>
      <p><b>Course:</b> {student?.course}</p>
    </div>
  );
}

export default StudentDetails;
import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import API_Call from "./API_Call";

function App() {
  const [studentId, setStudentId] = useState(1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Application</h1>

      <button onClick={() => setStudentId(1)}>Student 1</button>
      <button onClick={() => setStudentId(2)}>Student 2</button>
      <button onClick={() => setStudentId(3)}>Student 3</button>

      <hr />

      <StudentDetails id={studentId} />

      <hr />

      <API_Call id={studentId} />
    </div>
  );
}

export default App;
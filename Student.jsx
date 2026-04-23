import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Student </h2>
      <p>Student ID: {props.id}</p>

      {/* Children */}
      {props.children}
    </div>
  );
}

export default Student;
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Student from "./Student";
import Trainer from "./Trainer";

function App() {
  return (
    <div>
      <h1>Routing </h1>

      <nav>
        <Link to="/Student">Student</Link> | 
        <Link to="/Trainer">Trainer</Link>
      </nav>

      
      <Routes>
        <Route
          path="/Student"
          element={
            <Student id="101">
              <p>This is Student </p>
            </Student>
          }
        />

        <Route
          path="/Trainer"
          element={
            <Trainer id="T201">
              <p>This is Trainer </p>
            </Trainer>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
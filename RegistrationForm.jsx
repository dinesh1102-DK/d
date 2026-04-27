import React, { useState } from "react";

function RegistrationForm() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!user.name || !user.email || !user.password) {
      alert("All fields are required!");
      return;
    }
    setUsers((prevUsers) => [...prevUsers, user]);

   
    setUser({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>Registered Users</h3>

      {users.length === 0 ? (
        <p>No users registered</p>
      ) : (
        <ul>
          {users.map((u, index) => (
            <li key={index}>
              {u.name} | {u.email} | {u.password}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistrationForm;
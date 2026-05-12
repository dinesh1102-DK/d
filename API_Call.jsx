import React, { useEffect, useState } from "react";

function API_Call({ id }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div>
      <h2>API Data</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>City:</b> {user?.address?.city}</p>
    </div>
  );
}

export default API_Call;
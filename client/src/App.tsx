import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching message:", error));

    axios.get("http://localhost:5000/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

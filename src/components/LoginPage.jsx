import React, { useState } from "react";
import EmployeePage from "./EmployeePage"; 
import Dashboard from "./Dashboard";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username === "admin" && password === "password123") {
      setIsLoggedIn(true);  // Successful login
    } else {
      setIsLoggedIn(false); // Failed login
    }
  };

  if (isLoggedIn === true) {
    return <EmployeePage />; // Redirect to employee page on successful login
  }

  if (isLoggedIn === false) {
    return <Dashboard />; // Redirect to dashboard on failed login
  }

  return (
  <div className="login-container">
      <h1>Admin Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
        </div>
        <div >
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  
  );
};

export default LoginPage;

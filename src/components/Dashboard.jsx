import React from "react";
import LoginPage from "./LoginPage";
import EmployeePage from "./EmployeePage";


const Dashboard = () => {
  const [page, setPage] = React.useState(null);

  if (page === "signup") {
    return <EmployeePage />; // Redirect to Employee Page
  }

  if (page === "retry") {
    return <LoginPage />; // Redirect to Login Page
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Login failed. Please try again.</p>
      <button onClick={() => setPage("signup")}>Sign Up</button>
      <button onClick={() => setPage("retry")}>Retry</button>
    </div>
  );
};

export default Dashboard;

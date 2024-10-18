import React, { useState } from "react";


const EmployeePage = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      employeeName,
      email,
      employeeId,
      position,
      phoneNumber,
    };
    setEmployees([...employees, newEmployee]); // Add to the list of employees

    // Clear input fields
    setEmployeeName("");
    setEmail("");
    setEmployeeId("");
    setPosition("");
    setPhoneNumber("");
  };

  return (
    <div className="employee-container">
      <div className="employee-form-container">
        <h1>Employee Page</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Employee Name:</label>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Employee ID:</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Position:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {employees.length > 0 && (
        <div className="employee-list-container">
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Employee ID</th>
                <th>Position</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.employeeName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.employeeId}</td>
                  <td>{employee.position}</td>
                  <td>{employee.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeePage;

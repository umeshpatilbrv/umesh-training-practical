import React, { useState } from "react";
import classes from "./App.css";

const EmployeeData = ({ employee, onBackClick }) => {
  const handler_UNameClick = () => {
    alert(`Department: ${employee.department}`);
  };

  return (
    <div className="List">
      <h1 className="EmpDetail">----Employee Details---</h1>
      <div className="list-1">
       <h1> <label>Name: </label>
        <span>{employee.name}</span>
        </h1>
      </div>

      <div className="list-2">
        <h1><label>Username: </label>
        <span onClick={handler_UNameClick}>{employee.username}</span>
         </h1>
      </div>
      <div>
        <h1><label className="list-3">Salary: </label>
        <span>{employee.Salary}</span>
        </h1>      
      </div>
      
      <button className="list-4" onClick={onBackClick}><h2>Back-Emp</h2></button>
    
    </div>
  );
};

const Employees = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handler_EmpClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handler_BackClick = () => {
    setSelectedEmployee(null);
  };

  const employees = [
    {
      name: "Umesh Patil",
      Salary: 20000,
      username: "Umesh@brainvire",
      department: "React_js",
    },
    {
      name: "shoeab Patel",
      Salary: 21000,
      username: "Shoeab@brainvire",
      department: "React_JS",
    },
    {
      name: "Yogesh Patil",
      Salary: 22000,
      username: "yogesh@brainvire",
      department: "Power-BI",
    },
    {
      name: "Amit Chaudhari",
      Salary: 23000,
      username: "Amit@brainvire",
      department: "Node-js",
    },
  ];

  if (selectedEmployee) {
    return (
      <EmployeeData 
        employee={selectedEmployee}
        onBackClick={handler_BackClick}
      />
    );
  }

  return (
    <div className="list">
      <h1 className="view">View Employees Details</h1>
      <h1><ul className="list_elements">
        {employees.map((employee, index) => (
          <ul className="list_margin"
            key={index}
            onClick={() => handler_EmpClick(employee)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {employee.name}
          </ul>
        ))}
      </ul>
      </h1>
    </div>
  );
};

export default Employees;

import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import DropdownMenu from "./Dropown";
import "./EmployList.css";
import { mockData } from "./mockApi";

export default function EmployList() {
  const [description, setDescription] = useState("");
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEmployeeData(mockData);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="employee-list-container">
      {" "}
      <h2>Employee List</h2>
      <Table aria-label="basic table" className="employee-table">
        {" "}
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Study</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id} className="employee-row">
              {" "}
              <td>{`${employee.FirstName} ${employee.LastName}`}</td>
              <td>{employee.DOB}</td>
              <td>{employee.Study}</td>
              <td>{employee.StartDate}</td>
              <td>{employee.EndDate}</td>
              <td className="employee-description">
                <div>{employee.Description}</div>
                <div className="employee-dropdown">
                  <DropdownMenu />
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
}

import React from "react";
import TextEditor from "./TextEditor";
import './EmployeeForm.css';

const EmployeeForm = () => {
  return (
    <>
    
      <form className="container">
      <h3 className="form-heading">Employee Form</h3>
        <div className="flex">
          <div>
            <h4>First Name*</h4>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <h4>Last Name*</h4>
            <input type="text" placeholder="Enter your last name" />
          </div>
        </div>
        <div>
          <h4>DOB</h4>
          <input type="date" name="" id="" />
        </div>
        <div>
          <h4>Study</h4>
          <select>
            <option value="BE/BTech">BE/BTech</option>
            <option value="BSc">B.Sc</option>
            <option value="BCom">B.Com</option>
            <option value="MTech">MTech</option>
            <option value="M.Sc">M.Sc</option>
          </select>
        </div>
        <div className="flex">
          <div>
            <h4>Start Date</h4>
            <input type="date" name="StartDate" id="" />
          </div>
          <div>
            <h4>End Date</h4>
            <input type="date" name="EndDate" id="" />
          </div>
        </div>
        <div>
          <h4>Current Salary</h4>
          <input type="number" name="CurrentSalary" id="" placeholder="30000" />
        </div>
        <div>
          <h4>Description</h4>
          <TextEditor/>
        </div>
        <br/>
        <div className="flex">
            <button>Cancel</button>
            <button>Save</button>
        </div>
      </form>
    </>
  );
};

export default EmployeeForm;

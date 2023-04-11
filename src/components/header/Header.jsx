import React from "react";
import TaskPng from "../../assets/TaskPng";

const Header = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <TaskPng />
      <h2 className="display-6">TASK TRACKER</h2>
    </div>
  );
};
export default Header;

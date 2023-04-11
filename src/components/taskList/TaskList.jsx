import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import axios from "axios";


const TaskList = ({ task, getTask }) => {

  const deleteTask = async (id) => {
    const url = "https://635182343e9fa1244e608b53.mockapi.io/api/tasks"
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {

    }
    getTask();
  }



  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between text-dark bg-opacity-75 bg-light rounded-2 p-2" >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBin6Fill
                onClick={() => deleteTask(id)}
                style={{
                  color: "#f12f2f",
                  cursor: "pointer",
                  marginRight: "15px",
                  fontSize: "2rem",
                }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList

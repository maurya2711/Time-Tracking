import React from "react";
import "./TaskList.css";
function TaskList({ taskList }) {
  const handleEdit = (id) => {
    console.log("handleEdit", id)
  };
  return (
    <div className="cards-list">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Task No</th>
            <th scope="col">Title</th>
            <th scope="col">Descriptiom</th>
            <th scope="col">Time Taken</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList?.length !== 0
            ? taskList?.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.title}</td>
                  <td>{item?.description}</td>
                  <td>{item?.time}</td>
                  <td className="item" onClick={() => handleEdit(index)}>
                    Edit
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;

import React from "react";
import { useState, useRef } from "react";
import TaskList from "../components/TaskList";
import "./Stopwatch.css";
function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [input, setInput]=useState("")
  const [description,setDescription]= useState("")
  const [taskList, setTaskList] = useState([])
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const handleSave = () => {
    const savedTime = formatTime();
    setTaskList((prev)=> [
      ...prev,{
      title:input,
      description:description,
      time:savedTime,
    }
    ])
    setInput("")
    setDescription("")
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch-container card shadow-lg p-3 mb-5 bg-white rounded">
      <div className="stopwatch-card card shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h3 className="mt-3"> StopWatch </h3>
        <p>{formatTime()}</p>

        <div className="buttons">
          {!isActive && !isPaused ? (
            <button className="btn btn-primary" onClick={handleStart}>
              Start
            </button>
          ) : isPaused ? (
            <button className="btn btn-primary" onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleResume}>
              Resume
            </button>
          )}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Save
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Task Title"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e)=> setInput(e.target.value)}
                    />
                  </div>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Descibe task here"
                    onChange={(e)=> setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={()=>handleSave()}>
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-danger"
            onClick={handleReset}
            disabled={!isActive}
          >
            Reset
          </button>
        </div>
      </div>
       <div className="tasks-container card shadow-sm p-3 mb-5 bg-body rounded mt-5">
        <TaskList taskList={taskList} />
      </div>
      
    </div>
  );
}

export default StopWatch;

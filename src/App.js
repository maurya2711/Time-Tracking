import "./App.css";
import Stopwatch from "./view/StopWatch";
import AssignedTask from "./view/AssignedTask";
function App() {
  return (
    <div className="app-container">
      <div className="header card shadow-sm p-3 mb-5 bg-body rounded ">
        <h3 className="header-item"> Time-Tracking </h3>
      </div>
      <div className="App">
        <div className="assigned-task">
          <AssignedTask />
        </div>
        <div className="card-watch">
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default App;

import TaskList from "./components/TaskList";
import Task from "./components/Task"
import TaskForm from "./components/TaskForm"

function App() {
  return (
    <div className="App">
      <TaskList/>
      <TaskForm/>
      <Task/>
    </div>
  );
}

export default App;

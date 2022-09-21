import TaskList from "./components/TaskList";
import Task from "./components/Task"
import TaskForm from "./components/TaskForm"
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <div className="App">
      <TaskList/>
      <TaskForm/>
      <Task/>
    </div>
  );
}

export default App;

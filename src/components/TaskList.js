import { useSelector } from "react-redux";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks)
    console.log("state in tasklist",tasks)
    return(
    <div>
        <h1>Tasks: {tasks.length}</h1>
        {tasks.map((task) =>{
            console.log("task in map", task);
            return(    // Este return no debería estar, ya que vamos a usar el componente Task. Por ahora lo hacemos asi ya que no tenemos Task definido.
            <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            </div>
            )
        })}
    </div>
    )
}

export default TaskList;
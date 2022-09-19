import { useSelector } from "react-redux";

const TaskList = () => {

    const state = useSelector((state) => state)
    const tasks = useSelector((state) => state.tasks)
    console.log("state in tasklist",tasks)
    return(<h1>TaskList</h1>)
}

export default TaskList;
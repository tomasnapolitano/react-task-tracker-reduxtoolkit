import { useState } from "react";
import { addTask } from "../features/tasks/tasksSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const TaskForm = () => {

    const[task,setTask] = useState({
        title:"",
        descrption:"",
    });

    const dispatch = useDispatch(0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitting");
        dispatch(
            addTask({
            ...task,
            id: uuidv4(),
        }));
    }

    const handleChange = (e) =>{
        console.log(e.target.name,e.target.value)
        setTask({
            ...task,
            // debo detectar dentro del setter e.target.value y asignarle el valor de e.target.value
            // ya que el handler administra el valor de 2 campos diferentes:
            [e.target.name] : e.target.value,
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Task Title</label>
            <input
                type="text"
                name="title"
                placeholder="Write a title for your task"
                onChange={handleChange}
                value={task.title} //En realidad al ejecutar handleChange, le estamos pasando el valor al
                //hook, pero es mejor si le damos al hook directamente el value para no depender de la funcion
                //de html? y administrarlo directamente con React
            />
            <label>Task Description</label>
            <textarea
                type="text"
                placeholder="Describe your task"
                name="description"
                onChange={handleChange}
                value={task.description}
            />
            <button type="submit">Save</button>
        </form>
    )
}

export default TaskForm;
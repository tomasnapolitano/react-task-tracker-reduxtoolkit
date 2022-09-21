import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: "1", title:"Task 1", description:"Description of Task 1"},
    {id: "2", title:"Task 2", description:"Description of Task 2"},
    {id: "3", title:"Task 3", description:"Description of Task 3"},
];

const tasksSlice = createSlice({
    name:"tasks",
    initialState,

    reducers:{
        addTask: (state,action) => {
            console.log(state);
            console.log(action);
            state.push(action.payload);
        }
        //deleteTask
        //updateTask
        //completeTask
    }
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
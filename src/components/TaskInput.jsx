import { useContext, useState } from "react";
import { TaskContext } from "../utils/TaskContext";

function TaskInput() {
    const [newTask, setNewTask] = useState('')
    const {dispatch} = useContext(TaskContext)

    const handleAddTask = () => {
        if(newTask.trim()) {
            dispatch({type: 'ADD_TASK', payload: newTask})
            setNewTask("")
        }
    }
    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );
}
  
export default TaskInput;
import React, { useState } from "react";
function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [highPriority, setHighPriority] = useState(false);

    const addTask = () => {
        if(newTask.trim() !== '') {
            const newTaskObj = {
                name: newTask,
                priority: highPriority,
            };
        setTasks([newTaskObj, ...tasks]);
        setNewTask('');
        setHighPriority(false);
        }
    };

    const markDone = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = true;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    Task Name:
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </label>
                <label>
                    High Priority:
                    <input
                        type="checkbox"
                        checked={highPriority}
                        onChange={(e) => setHighPriority(e.target.checked)}
                    />
                </label>
                <button onClick={addTask}>Add Task</button>
            </form>
            <h2>To Do</h2>
            <ul>
                {tasks.map((task, index) => {
                    if (!task.done) {
                        return (
                            <li key={index} style={{ color: task.priority ? 'red' : 'black' }}>
                                {task.name}
                                <button onClick={() => markDone(index)}>Done</button>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </li>
                        );
                    }
                })}
            </ul>
            <h2>Done</h2>
            <ul>
                {tasks.map((task, index) => {
                    if (task.done) {
                        return (
                            <li key={index} style={{ color: task.priority ? 'red' : 'black' }}>
                                {task.name}
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}
export default Tasks;
import { useState } from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import "./App.css";
import Task from "./Task/Task";

function App() {
    const [tasks, setTasks] = useState([
        {
            text: "Buy milk",
            id: 97,
        },
        {
            text: "Clean PC",
            id: 89,
        },
    ]);

    return (
        <div className="container">
            <AddTaskForm />
            <div className="tasksBlock">
                <Task />
            </div>
        </div>
    );
}

export default App;

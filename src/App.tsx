import { useState, type ChangeEvent } from "react";
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
    const [currentTask, setCurrentTask] = useState("");

    const changeText = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    return (
        <div className="container">
            <AddTaskForm
                onTextChange={(event) => {
                    changeText(event);
                }}
            />
            <div className="tasksBlock">
                {tasks.map((task, index) => {
                    return (
                        <Task
                            key={`task.text-${index}`}
                            text={task.text}
                            id={task.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;

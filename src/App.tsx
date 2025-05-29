import AddTaskForm from "./AddTaskForm/AddTaskForm";
import "./App.css";
import Task from "./Task/Task";

function App() {
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

import "./AddTaskForm.css";

const AddTaskForm = () => {
    return (
        <div className="inputBlock">
            <input type="text" placeholder="Write your text" />
            <button type="button">Add</button>
        </div>
    );
};

export default AddTaskForm;

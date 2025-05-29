import "./Task.css";

interface Props {
    text: string;
    id: number;
}

const Task = (props: Props) => {
    return (
        <div className="Task">
            <p>{props.text}</p>
            <button type="button">Delete</button>
        </div>
    );
};
export default Task;

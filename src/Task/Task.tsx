import "./Task.css";
import type { MouseEventHandler } from "react";

interface Props {
    text: string;
    id: number;
    onClickButton: MouseEventHandler;
}

const Task = (props: Props) => {
    return (
        <div className="Task">
            <p>{props.text}</p>
            <button type="button" onClick={props.onClickButton}>
                Delete
            </button>
        </div>
    );
};
export default Task;

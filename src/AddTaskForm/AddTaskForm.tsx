import "./AddTaskForm.css";
import type { ChangeEventHandler, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    onTextChange: ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm = (props: Props) => {
    return (
        <div className="inputBlock">
            <input
                type="text"
                placeholder="Write your text"
                onChange={props.onTextChange}
            />
            <button type="button">Add</button>
        </div>
    );
};

export default AddTaskForm;

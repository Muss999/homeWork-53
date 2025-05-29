import "./AddTaskForm.css";
import type {
    ChangeEventHandler,
    MouseEventHandler,
    PropsWithChildren,
} from "react";

interface Props extends PropsWithChildren {
    value: string;
    onClickButton: MouseEventHandler;
    onTextChange: ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm = (props: Props) => {
    return (
        <div className="inputBlock">
            <input
                value={props.value}
                type="text"
                placeholder="Write your text"
                onChange={props.onTextChange}
            />
            <button type="button" onClick={props.onClickButton}>
                Add
            </button>
        </div>
    );
};

export default AddTaskForm;

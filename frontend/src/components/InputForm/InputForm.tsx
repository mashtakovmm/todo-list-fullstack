import "./InputForm.css"
import Button from "../Button/Button";
import { MdClose, MdOutlineCreate } from "react-icons/md";
import { APIError, HasCallbackType, TodoItemType } from "../../types";
import { useAddTaskMutation } from "../../services/tasks";
import { useCallback, useState } from "react";

const InputForm: React.FC<HasCallbackType> = ({ callback }) => {
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [date, setDate] = useState<string>();

    const [addTaskMutation, { error, isError }] = useAddTaskMutation();

    const addTaskCallback = useCallback(() => {
        const newTask = {
            name: name,
            description: description,
            date: date,
        };
        addTaskMutation(newTask).then((res) => {
            if(!res.error && callback) {
                callback();
            }
        });
    }, [name, description, date, addTaskMutation, isError]);

    return (
        <div className="input-form-container">
            <form action="#" className="input-form">
                <Button className="absolute-button exit-button" Icon={MdClose} type="button" callback={callback} />
                {isError && error && (
                    <p className="error">
                        {`${(error as APIError).data.error.errors.name.properties.message ??
                            'An unexpected error occurred.'
                            }`}
                    </p>
                )}
                <label htmlFor="name">Task Title</label>
                <input type="text" id="name" name="name" required aria-required="true" className="input" placeholder="Title..."
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <label htmlFor="name">Task Description</label>
                <input type="text" id="description" name="description" aria-required="false" className="input" placeholder="Description..."
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                <label htmlFor="name">Task Deadline</label>
                <input type="date" id="name" name="name" aria-required="false" className="input"
                    min={new Date().toISOString()}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }} />
                <Button Icon={MdOutlineCreate} callback={addTaskCallback} text='Create New Task' />
            </form>
        </div>
    )
}

export default InputForm;
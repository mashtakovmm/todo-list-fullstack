import { TodoItemType } from "../../types"
import Button from "../Button/Button";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteTaskMutation, usePatchTaskMutation } from "../../services/tasks";
import "./TodoItem.css"
import { useCallback } from "react";


const TodoItem: React.FC<TodoItemType> = ({ _id, name, description, completed, deadline }) => {

    const [deleteTask] = useDeleteTaskMutation();
    const [patchTask] = usePatchTaskMutation();

    function formatDate(ISODate?: string) {
        if (ISODate) {
            const res = ISODate.split("T", 1)[0]
            return res
        }
    }

    const handleClickCallback = useCallback(() => {
        deleteTask(_id)
    }, [_id])

    const handleToggleCompleted = useCallback(() => {
        console.log(deadline);
        completed = !completed
        patchTask({ _id: _id, completed: completed })
    }, [_id])

    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
            <div className="todo-left" onClick={handleToggleCompleted}>
                <h2>{`${name}`}</h2>
                <p>{`${description ? description : 'No description was provided'}`}</p>
                <p>Deadline: {`${deadline ? formatDate(deadline) : 'No deadline for this task'}`}</p>
            </div>
            <Button Icon={MdDeleteOutline} className="del-button" callback={handleClickCallback} />
        </li>
    )
}

export default TodoItem
import { TodoItemType } from "../../types"
import Button from "../Button/Button";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteTaskMutation, usePatchTaskMutation } from "../../services/tasks";
import "./TodoItem.css"
import { useCallback, useEffect, useState } from "react";


const TodoItem: React.FC<TodoItemType> = ({ _id, name, description, completed, deadline }) => {

    const [deleteTask] = useDeleteTaskMutation();
    const [patchTask] = usePatchTaskMutation();
    const [deadlineColor, setDeadlineColor] = useState('');

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

    useEffect(() => {
        if (deadline) {
            const deadlineDate = new Date(deadline)
            deadlineDate.setHours(0, 0, 0, 0)

            const now = new Date(Date.now())
            now.setHours(0, 0, 0, 0)

            if (deadlineDate > now) {
                setDeadlineColor("#39bf4b")
            } else if (deadlineDate < now) {
                setDeadlineColor('#ff0f0f')
            } else {
                setDeadlineColor('#dbdb44')
            }
            console.log(`Deadline: ${deadlineDate}`);
            console.log(`Now: ${now}`);
        }
        else {
            setDeadlineColor('#f0f0f0')
        }
    }, [])

    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`} style={{borderColor:`${deadlineColor}`}}>
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
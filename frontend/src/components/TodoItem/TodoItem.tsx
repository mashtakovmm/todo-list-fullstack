import { TodoItemType } from "../../types"
import Button from "../Button/Button";
import { MdDeleteOutline } from "react-icons/md";
import "./TodoItem.css"


const TodoItem: React.FC<TodoItemType> = ({ id, name, description, completed, deadline }) => {

    return (
        <li className="todo-item">
            <div className="todo-left">
                <h2>{`${name}`}</h2>
                <p>{`${description}`}</p>
            </div>
            <Button Icon={MdDeleteOutline} className="del-button" />
        </li>
    )
}

export default TodoItem
import { MdOutlineCreate } from "react-icons/md";
import Button from "../Button/Button";
import "./Header.css"

const Header: React.FC<{ callback: () => void }> = ({ callback }) => {
    return (
        <header className="header">
            <h1>Todo List Fullstack</h1>
            <Button Icon={MdOutlineCreate} callback={callback} text='Create New Task' />
        </header>
    )
}

export default Header
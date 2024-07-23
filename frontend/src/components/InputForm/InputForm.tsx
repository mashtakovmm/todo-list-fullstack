import "./InputForm.css"
import Button from "../Button/Button";
import { MdClose } from "react-icons/md";
import { HasCallbackType } from "../../types";

const InputForm: React.FC<HasCallbackType> = ({callback}) => {

    return (
        <div className="input-form-container">
            <form action="#" className="input-form">
                <Button className="absolute-button exit-button" Icon={MdClose} type = "button" callback={callback}/>
                <label htmlFor="name">Task Title</label>
                <input type="text" id="name" name="name" required aria-required="true" className="input" placeholder="Title..." />
                <label htmlFor="name">Task Description</label>
                <input type="text" id="description" name="description" aria-required="false" className="input" placeholder="Description..." />
                <label htmlFor="name">Task Deadline</label>
                <input type="date" id="name" name="name" aria-required="false" className="input"
                    min={new Date().toISOString().split('T')[0]} />
            </form>
        </div>
    )
}

export default InputForm;
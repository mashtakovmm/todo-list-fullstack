import { ButtonPropsType } from "../../types"
import "./Button.css"

const Button: React.FC<ButtonPropsType> = ({Icon, text, callback, className, type = "button" }) => {

    return(
        <button className={`button ${className}`} onClick={() => callback && callback()} type={`${type}`}>
            {Icon && <Icon />}
            {text}
        </button>
    )
}

export default Button
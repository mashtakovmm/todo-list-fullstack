import { IconType } from "react-icons";

export interface HasCallbackType {
    callback?: Function,
}

export interface ButtonPropsType extends HasCallbackType {
    Icon?: IconType,
    text?: string,
    className?: string,
    type?: "submit" | "reset" | "button",
}

export interface TodoItemType {
    id: number,
    name: string,
    description?: string,
    completed: boolean,
    deadline?: Date,
}
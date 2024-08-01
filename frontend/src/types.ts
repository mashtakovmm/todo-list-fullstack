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
    _id: string,
    name: string,
    description?: string,
    completed: boolean,
    deadline?: string,
}

export interface APIResponseType {
    success: boolean;
    data: {
        tasks: TodoItemType[];
        nbHits: number;
    };
}

export interface APIError {
    status: number;
    data: {
        success: boolean;
        error: {
            errors: {
                name: {
                    name: string;
                    properties: {
                        message: string;
                        type: string;
                        path: string;
                    };
                    kind: string;
                    path: string;
                };
            };
        };
        _message: string;
        name: string;
        message: string;
    }
}

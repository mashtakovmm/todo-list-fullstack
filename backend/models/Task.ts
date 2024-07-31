import { TodoItemType } from "../types";
import { Schema, model } from "mongoose";

const TaskSchema = new Schema<TodoItemType>({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [30, "name is too long"]
    },
    description: {
        type: String,
        required: false,
        maxlength: [150, "description is too long"]
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    deadline: {
        type: Date,
        required: false
    }
})

export default model('TodoTask', TaskSchema) 

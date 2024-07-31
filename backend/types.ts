// sync with frontend
import { Document } from "mongoose";

export interface TodoItemType extends Document {
    name: string,
    description?: string,
    completed: boolean,
    deadline?: Date,
}
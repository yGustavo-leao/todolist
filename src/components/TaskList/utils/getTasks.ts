import { Task } from "../../../types/List"

export const getTasks = () => {
    const tasks: Task = JSON.parse(localStorage.getItem('toDoList') || '[]')
    return tasks
}
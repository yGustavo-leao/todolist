import { getTasks } from "./getTasks"

export const organizedTasks = () => {
    const tasks = getTasks()
    tasks.forEach((task, index) => task.id = index)
    return tasks
}
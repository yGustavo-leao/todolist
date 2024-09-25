import { organizedTasks } from "./organizedTasks"

export const removeTask = (id: number) => {
    const tasks = organizedTasks()
    tasks.splice(id, 1)
    localStorage.setItem('toDoList', JSON.stringify(tasks))
}
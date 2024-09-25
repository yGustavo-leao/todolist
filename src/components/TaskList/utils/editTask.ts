import { organizedTasks } from "./organizedTasks"

export const editTask = (id: number, editedTask: string) => {
    if (editedTask.length <= 3) return 0
    const tasks = organizedTasks()
    if (!tasks[id]) return 0
    tasks[id].task = editedTask
    localStorage.setItem('toDoList', JSON.stringify(tasks))
}
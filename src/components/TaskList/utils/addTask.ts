import { organizedTasks } from "./organizedTasks"

export const addTask = (text: string) => {
    if (text.length <= 3) return 0
    const tasks = organizedTasks()
    tasks.push({ id: tasks.length, task: text })
    localStorage.setItem('toDoList', JSON.stringify(tasks))
}
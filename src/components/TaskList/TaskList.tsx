import { useEffect, useRef, useState } from "react";
import { organizedTasks } from "./utils/organizedTasks";
import { editTask } from "./utils/editTask";
import { addTask } from "./utils/addTask";
import { removeTask } from "./utils/removeTask";
import { Task } from "../../types/List";
import { Container, InputData } from "./TaskList.styled";


export const TaskList = () => {

    const [currentTask, setCurrentTask] = useState('')
    const [editing, setEditing] = useState<{ id?: number | undefined, isEditing: boolean }>({ id: undefined, isEditing: false })
    const [tasks, setTasks] = useState<Task>([])
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setTasks(organizedTasks())
    }, [])

    return (
        <Container>
            <InputData>
                <h1>Lista de tarefas</h1>
                <div className="container">
                    <input type="text" ref={input} onChange={e => setCurrentTask(e.target.value)} />
                    <button onClick={e => {
                        if (editing.isEditing) {
                            editTask(Number(editing.id), currentTask)
                            setTasks(organizedTasks())
                            setEditing({ id: undefined, isEditing: false })
                        } else {
                            addTask(currentTask)
                            setTasks(organizedTasks())
                        }
                        if (input.current) input.current.value = ''
                        setCurrentTask('')
                    }
                    } >{editing.isEditing ? 'Confirmar' : 'Adicionar'}</button>
                </div>
            </InputData>
            {
                tasks.map(task =>
                    <li key={Math.random()}>
                        {task.task}
                        <div>
                            <button id={`${task.id}`} onClick={e => {
                                if (input.current) input.current.value = organizedTasks()[task.id].task
                                setEditing({ id: Number(task.id), isEditing: true })
                            }} >editar</button>
                            <button id={`${task.id}`} onClick={e => {
                                removeTask(Number(e.currentTarget.id))
                                setEditing({isEditing: false})
                                setTasks(organizedTasks())
                            }} >remover</button>
                        </div>
                    </li>
                )
            }
        </Container>
    )
}
const baseUrl = 'http://localhost:3001';
import { ITask } from "./types/tasks";

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' })

    console.log(res.json)
    const todos = await res.json();
    console.log(todos)
    return todos;
}
export const addTodo = async (todo: ITask): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const newTodo = await res.json();
    return newTodo
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const updateTodo = await res.json();
    return updateTodo
}

export const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    })

}
import React from 'react'

import { ITask } from '@/types/tasks'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[]
}


const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-[18px] text-white font-bold'>
                        <th></th>
                        <th>Tasks</th>
                        <th className='text-end'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) =>
                        <Task key={task.id} task={task} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
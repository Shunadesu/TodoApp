'use client'

import React, { FormEventHandler, useState } from 'react'
import { ITask } from '@/types/tasks'
import icons from '../icons/icons'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '@/api'

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {

    const router = useRouter();

    const { FaRegEdit, GoTrash } = icons
    const [isShowModelEdit, setIsShowModelEdit] = useState<boolean>(false);
    const [isShowModelRemove, setIsShowModelRemove] = useState<boolean>(false);

    // Usestate for the edit
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskToEdit,
        })
        setIsShowModelEdit(!isShowModelEdit)
        router.refresh();
    }

    const handleSubmitRemoveTodo = async (id: number) => {
        await deleteTodo(id)
        setIsShowModelRemove(!isShowModelRemove)
        router.refresh();
    }


    return (
        <tr key={task.id}
            className='mt-4'>
            <th>{task.id}</th>
            <td>{task.text}</td>
            <td className='flex justify-end items-center gap-4'>
                <FaRegEdit size={22}
                    onClick={() => setIsShowModelEdit(!isShowModelEdit)}
                    className='hover:text-blue-500 cursor-pointer' />
                <Modal isShow={isShowModelEdit} setIsShow={setIsShowModelEdit}>
                    <form onSubmit={handleSubmitEditTodo} className='mt-12'>
                        <h3 className='font-bold text-lg'>
                            Edit Task
                        </h3>
                        <div className="mt-8 flex gap-4">
                            <input
                                value={taskToEdit}
                                onChange={e => setTaskToEdit(e.target.value)}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full" />
                            <button typeof='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>


                <GoTrash size={22}
                    onClick={() => setIsShowModelRemove(!isShowModelRemove)}
                    className='hover:text-red-500 cursor-pointer' />


                <Modal isShow={isShowModelRemove} setIsShow={setIsShowModelRemove}>
                    <div className='mt-12'>
                        <h3 className='font-bold text-lg'>
                            Are you sure delete this TASK?
                        </h3>
                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() => handleSubmitRemoveTodo(task.id)}
                                className='btn'>Yes</button>
                            <button className='btn'>
                                No</button>
                        </div>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}

export default Task
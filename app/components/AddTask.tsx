'use client'
import React, { FormEventHandler, useState } from 'react'

import icons from '../icons/icons'
import Modal from './Modal'
import { addTodo } from '@/api'
import { useRouter } from 'next/navigation'

const AddTask = () => {

    const router = useRouter();
    const { AiOutlinePlus } = icons
    const [isShow, setIsShow] = useState<boolean>(false);
    const [maxId, setMaxId] = useState<number>(0);
    const [newTask, setNewTask] = useState<string>('');

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const nextId = maxId + 1;
        await addTodo({
            id: nextId,
            text: newTask,
        })
        setMaxId(nextId);
        setNewTask("")
        router.refresh();
    }

    return (
        <div>
            <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-outline w-full">
                Add Task
                <AiOutlinePlus size={18} />
            </button>
            <Modal isShow={isShow} setIsShow={setIsShow}>
                <form onSubmit={handleSubmitNewTodo} className='mt-12'>
                    <h3 className='font-bold text-lg'>
                        Add new Task
                    </h3>
                    <div className="mt-8 flex gap-4">
                        <input
                            value={newTask}
                            onChange={e => setNewTask(e.target.value)}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full" />
                        <button typeof='submit' className='btn'>Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask
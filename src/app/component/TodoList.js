import Link from 'next/link';
import React from 'react';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
const TodoList = () => {
    return (
        <div>
            <>
                <div className="nav flex flex-row justify-between items-center py-4 max-w-3xl border mx-auto container px-4 my-4 gap-3">
                    <div>
                        <p className='font-bold text-1xl'>Tailwind Css</p>
                        <p className='flex-col'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-6'>
                        <Link href={'/Todo_Pages/editTopic'}>
                    <RiEdit2Line className='cursor-pointer' size={24} /> 
                        </Link>
                    <RiDeleteBinLine className='cursor-pointer text-rose-500' size={24} /> 
                    </div>
                </div>
            </>
        </div>
    )
}

export default TodoList

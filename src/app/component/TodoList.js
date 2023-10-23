import React from 'react';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
const TodoList = () => {
    return (
        <div>
            <>
                <div className="nav flex flex-row justify-between items-center py-4 max-w-3xl border mx-auto container px-4 my-4 gap-3">
                    <div>
                        <p className='font-bold text-2xl'>Tailwind Css</p>
                        <p className='font-bold flex-col'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-6'>
                    <RiEdit2Line className='cursor-pointer' size={24} /> 
                    <RiDeleteBinLine className='cursor-pointer text-rose-500' size={24} /> 
                    </div>
                </div>
            </>
        </div>
    )
}

export default TodoList

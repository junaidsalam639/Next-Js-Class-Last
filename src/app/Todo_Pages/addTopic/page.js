import NavbarTodo from '@/app/component/NavbarTodo'
import Link from 'next/link'
import React from 'react'
const page = () => {
    return (
        <div>
            <NavbarTodo />
            <div className='mx-auto gap-6 flex flex-col max-w-3xl'>
                <input placeholder='Topic Title' className='border border-slate-500 px-8 py-2' />
                <input placeholder='Topic Description' className='border border-slate-500 px-8 py-2' />
                <button className='bg-green-500 py-3 w-32 px-3 font-bold text-white'>Add Topic</button>
            </div>
        </div>
    )
}

export default page

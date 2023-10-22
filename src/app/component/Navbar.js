'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Navbar_One = () => {
    const {login , setLogin} = useContext(AuthContext);
    return (
        <div>
            <div className='flex justify-between items-center my-4 mx-12'>
                <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Home</h1>
                <Link href={'/product'}>
                    <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Product</h1>
                </Link>             
                <Link href={'/blog'}>
                    <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Blogs</h1>
                </Link>     
                <Link href={'/todo'}>
                    <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Todo</h1>
                </Link>             
                    <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md' onClick={() => login ? setLogin(false) : setLogin(true)}>{login ? 'Logout' : 'Login'}</h1>
            </div>
        </div>
    )
}

export default Navbar_One

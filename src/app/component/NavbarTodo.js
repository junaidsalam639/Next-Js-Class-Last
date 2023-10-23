import Link from "next/link"

const NavbarTodo = () => {
    return (
        <div>
            <div className="nav flex justify-between items-start py-4 text-center max-w-3xl bg-slate-800 mx-auto container px-4 my-4">
                <Link href={'/Todo_Pages/todo'}>
                <h1 className='text-2xl font-bold text-white'>Gt Coding..</h1>
                </Link>
                <Link href={'/Todo_Pages/addTopic'}>
                    <button className='bg-white text-black py-2 px-2'>Add Topic</button>
                </Link>
            </div>
        </div>
    )
}

export default NavbarTodo

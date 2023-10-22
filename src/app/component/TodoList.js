
const TodoList = () => {
    return (
        <div>
            <>
                <div className="nav flex flex-row justify-between items-center py-4 w-3/6 border mx-auto container px-4 my-4">
                    <div>
                        <p className='font-bold text-2xl'>Tailwind Css</p>
                        <p className='font-bold flex-col'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='flex flex-row justify-start items-start'>
                        <button className='border py-2 px-2 mx-2 w-20'>Edit</button>
                        <button className='border py-2 px-2 mx-2 w-20'>Delete</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default TodoList

import NavbarTodo from '@/app/component/NavbarTodo'

const page = () => {
  return (
    <div>
        <NavbarTodo />
       <div className='mx-auto max-w-3xl flex flex-col gap-6'>
        <input className='border border-slate-500 px-6 py-2' placeholder='Update Title' />
        <input className='border border-slate-500 px-6 py-2' placeholder='Update Description' />
        <button className='bg-green-500 px-2 py-2 font-bold text-white w-32'>Update Topic</button>
       </div>
    </div>
  )
}

export default page

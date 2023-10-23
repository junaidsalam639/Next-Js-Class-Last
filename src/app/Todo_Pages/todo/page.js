import TodoList from '@/app/component/TodoList'
import NavbarTodo from '@/app/component/NavbarTodo'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <NavbarTodo />
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
        </div>
    )
}

export default page
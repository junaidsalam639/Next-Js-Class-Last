import { fecthUser } from '../Fecth/fecthUser'
import Link from 'next/link'
const page = async() => {
  const wait = await fecthUser();
  console.log(wait);
  return (
    <div>
     {
      wait.map((user , index ) => {
        return(
          <Link href={`blog/${user.id}`}>
            <div className='bg-indigo-600 py-4 my-4 px-8 mx-12 text-white text-md rounded-md'>
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
            </div>
          </Link>
        )
      })
     }
    </div>
  )
}

export default page

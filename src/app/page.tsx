import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex justify-between items-center my-4 mx-12'>
      <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Home</h1>
      <Link href={'/product'}>
      <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Product</h1>
      </Link>
      <Link href={'/login'}>
      <h1 className='bg-orange-600 w-32 text-center py-3 font-medium text-md text-white cursor-pointer hover:bg-orange-500 rounded-md'>Login</h1>
      </Link>
    </div>
    </>
  )
}

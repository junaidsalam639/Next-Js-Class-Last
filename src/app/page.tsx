import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex justify-between items-center my-4 mx-12'>
      <h1>Home</h1>
      <Link href={'/product'}>
      <h1>Product</h1>
      </Link>
      <Link href={'/login'}>
      <h1>Login</h1>
      </Link>
    </div>
    </>
  )
}

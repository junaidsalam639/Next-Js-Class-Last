import Image from 'next/image'
import Link from 'next/link'
import { fecthProduct } from '@/app/Fecth/fecthProduct'
import Product01 from '../component/Product01';

export default async function Product() {
  const wait = await fecthProduct();
  return (
    <>
      <h1 className='text-3xl font-bold text-center py-3'>Product</h1>
      <div className='flex justify-between items-center my-4 mx-12'>
        <div className='flex flex-row justify-around items-center flex-wrap w-full'>
          {
            wait.map((data, index) => {
              return (
                <Link key={index} href={`/product/${data.id}`} className='shadow-md px-5 h-full'>
                  <div className='w-64 flex flex-col items-center my-8'>
                    <Image src={data.image} width={150} height={150} />
                    <hr className='border-b border-2 border-gray-300 w-full my-3' />
                    <h1><b>Title : </b>{data.title}</h1>
                    <h1><b>Price : </b>{data.price}</h1>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
      <Product01 />
    </>
  )
}

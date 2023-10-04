import Image from 'next/image'
import Link from 'next/link'
import {fecthProduct } from '@/app/Fecth/fecthProduct'

export default async function Product() {
    const wait = await fecthProduct();
    console.log(wait);
  return (
    <>
    <h1 className='text-3xl font-bold text-center py-3'>Product</h1>
    <div className='flex justify-between items-center my-4 mx-12'>
      <div className='flex flex-row justify-around items-center flex-wrap w-full'>
        {
            wait.map((data , index) =>{
                return(
                    <Link key={index} href={`/product/${data.id}`}>
                    <div className='w-64 flex flex-col items-start my-8'>
                        <Image src={data.image} width={150} height={150} />
                        <h1><b>Title : </b>{data.title}</h1>
                        <h1><b>Price : </b>{data.price}</h1>
                    </div>
                    </Link>
                )
            })
        }
      </div>
    </div>
    </>
  )
}

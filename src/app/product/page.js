import Image from 'next/image'
import Link from 'next/link'
import {fecthProduct } from '@/app/Fecth/fecthProduct'

export default async function Product() {
    const wait = await fecthProduct();
    console.log(wait);
  return (
    <>
    <div className='flex justify-between items-center my-4 mx-12'>
      <div className='flex flex-row justify-around items-center flex-wrap w-full'>
        {
            wait.map((data , index) =>{
                return(
                    <Link key={index} href={`/product/${data.id}`}>
                    <div className='w-64 flex flex-col items-center my-8'>
                        <Image src={data.image} width={150} height={150} />
                        <h1>{data.title}</h1>
                        <h1>{data.price}</h1>
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

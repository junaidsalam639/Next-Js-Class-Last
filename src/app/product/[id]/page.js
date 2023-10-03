import {ProductDetail} from '@/app/Fecth/ProductDetail'
import Image from 'next/image'
const page = async ({params}) => {
    const wait = await ProductDetail(params.id);
    console.log(wait.title);
  return (
    <div>
      <div className='flex justify-between items-center my-4 mx-12'>
      <div className='flex flex-row justify-around items-center flex-wrap w-full'>
       
                    <div className='w-80 flex flex-col items-center my-8'>
                        <Image src={wait.image} width={400} height={100} />
                        <h1>Title : {wait.title}</h1>
                        <h1>Description : {wait.description}</h1>
                        <h1>Price : {wait.price}</h1>
                    </div>
              
      </div>
    </div>
    </div>
  )
}

export default page

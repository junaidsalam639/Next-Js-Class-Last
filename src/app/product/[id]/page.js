import { ProductDetail } from '@/app/Fecth/ProductDetail'
import Image from 'next/image'
const page = async ({ params }) => {
  const wait = await ProductDetail(params.id);
  return (
    <div>
      <div className='flex justify-between items-center my-4 mx-12'>
        <div className='flex flex-row justify-around items-center flex-wrap w-full'>
          <div className='w-4/12 flex flex-col items-center rounded-md shadow-md p-5'>
            <h1 className='text-3xl font-bold text-center py-3'>Product Detail</h1>
            <hr className='border-b border-2 border-gray-300 w-full my-3' />
            <Image src={wait.image} width={250} height={100} />
            <hr className='border-b border-2 border-gray-300 w-full my-3' />
            <h1><b>Title : </b> {wait.title}</h1>
            <h1><b>Description : </b>{wait.description}</h1>
            <h1><b>Price : </b> {wait.price}</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page

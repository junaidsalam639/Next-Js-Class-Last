import { fecthProduct01 } from "../Fecth/fecthProduct01";
import Image from 'next/image'
const Product01 = async() => {
    const wait01 = await fecthProduct01();
    console.log(wait01);
  return (
    <div>
        <div className='flex flex-row justify-around items-center flex-wrap w-full'>
      {
            wait01.map((data , index) =>{
                return(
                    <div key={index} className='w-64 h-96 flex flex-col items-center my-8 shadow-md rounded-md p-4'>
                      <img src={data.images[0]} className="w-96 h-72 object-cover object-center rounded-md" />
                        <hr className='border-b border-2 border-gray-300 w-full my-3' />
                        <h1><b>Title : </b>{data.title}</h1>
                        <h1><b>Price : </b>{data.price}</h1>
                    </div>
                )
            })
          }
          </div>
    </div>
  )
}

export default Product01

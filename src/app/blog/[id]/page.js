import fecthUserDetail from "../../Fecth/fecthUserDetail"

export async function generateMetadata({ params }){
  const usersDetail = await fecthUserDetail(params.id);
  return{
    title : usersDetail.id,
    description : usersDetail.userId,
  }
}

const page = async ({ params }) => {
  const res = await fecthUserDetail(params.id);
  console.log(res);
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-2xl">
      {
        res.map((item, index) => {
          return (
            <div key={index} className="bg-indigo-800 px-4 py-4 my-4 text-white rounded-md">
              <h2><b>Title : </b>{item.title}</h2>
              <h2><b>Description : </b>{item.body}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default page

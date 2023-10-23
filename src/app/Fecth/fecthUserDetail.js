const fecthUserDetail = async (id) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
   if(!res.ok){
    throw new ('fjsdkhfkjhdjkd')
 }
 return res.json();
}

export default fecthUserDetail

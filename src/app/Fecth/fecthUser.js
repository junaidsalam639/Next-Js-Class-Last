export const fecthUser = async() => {
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    if(!res.ok){
        throw new ('fjsdkhfkjhdjkd')
     }
     return res.json();
}

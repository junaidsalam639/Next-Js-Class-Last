export const fecthProduct01 = async() => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
  if(!res.ok){
     throw new ('fjsdkhfkjhdjkd')
  }
  return res.json();
}

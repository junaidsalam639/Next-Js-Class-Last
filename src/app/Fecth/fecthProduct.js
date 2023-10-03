export const fecthProduct = async() => {
  const res = await fetch('https://fakestoreapi.com/products');
  if(!res.ok){
     throw new ('fjsdkhfkjhdjkd')
  }
  return res.json();
}


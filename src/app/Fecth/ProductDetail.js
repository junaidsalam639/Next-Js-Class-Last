export const ProductDetail = async(id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!res.ok){
       throw new ('fjsdkhfkjhdjkd')
    }
    return res.json();
  }
  
  
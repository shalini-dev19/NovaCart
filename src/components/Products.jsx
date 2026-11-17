import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Products() {
const dispatch=useDispatch();




    const[products,setProducts]=useState([]);

useEffect(()=>{

    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setProducts(data);
    })

},[]);

  return (
    <div className="products">
      <h2>Our Products</h2>


<div className="product-list">

{products.map((product)=>(
    <div className="product-card"
    key={product.id}
    >
    <img src={product.image} alt={product.name} />

    <h3>{product.name}</h3>
    
    <p>Price: ₹{product.priceCents / 100}</p>

<button onClick={() => {
  console.log("Button clicked:", product);
  dispatch(addToCart(product));
}}>
  Add to cart
</button>


</div> 
))}
    </div>
  </div>
  );
}

export default Products



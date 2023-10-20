import { useState , useEffect } from "react";
import  ProductCard  from "./ProductCard";
import './products.css'

const Products = () => {

      const [products , setProducts] = useState([])

useEffect(() => {
  
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProducts(json))
}, [])


  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Products

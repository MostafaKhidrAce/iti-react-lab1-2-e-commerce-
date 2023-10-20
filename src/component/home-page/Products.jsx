import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './products.css';
import { ClipLoader } from 'react-spinners'; 

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
    })
      
  }, []);

  return (
    <div className="product-list">
      {loading ? (
        <ClipLoader color="#00BFFF" loading={loading} size={100} />
      ) : products  ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) :  (
       <p className="no-products-found">No products found.</p>
      )}
    </div>
  );
};

export default Products;

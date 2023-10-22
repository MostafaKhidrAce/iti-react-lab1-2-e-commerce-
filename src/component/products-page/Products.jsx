import ProductCard from './ProductCard';
import Loading from './Loading'; 
import useProductData from '../../customHooks/useProductData';
import './products.css';

const Products = () => {
  const [products, loading, error] = useProductData(); 

  const productCards = products.map((product, index) => (
    <ProductCard key={index} product={product} />
  ));

  return (
    
      <Loading loading={loading} error={error}>
        <div className="product-list">
        {productCards}
        </div>
      </Loading>
   
  );
};

export default Products;

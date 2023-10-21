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
    <div className="product-list">
      <Loading loading={loading} error={error}>
        {productCards}
      </Loading>
    </div>
  );
};

export default Products;

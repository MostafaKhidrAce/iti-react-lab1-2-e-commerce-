import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating-stars-component';
import useProductDetails from '../../customHooks/useProductDetails';
import Loading from '../products-page/Loading';
import './productDetails.css';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, loading, error] = useProductDetails(`https://fakestoreapi.com/products/${id}`);

    return ( 
    <Loading loading={loading} error={error}>
        <div className="product-details-container">
            <div className="product-details">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                    <h1>{product.title}</h1>
                    <div className="product-description">
                        <h2>Description:</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="product-price">
                        <h2>Price:</h2>
                        <p>${product.price}</p>
                    </div>
                    <div className="product-rating">
                        <h2>Rating:</h2>
                        {product.rating && (
                        <Rating
                            value={product.rating.rate}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>  
    </Loading>
    );
};

export default ProductDetails;



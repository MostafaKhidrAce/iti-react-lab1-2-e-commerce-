import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './productDetails.css';
import Rating from 'react-rating-stars-component';
import { ClipLoader } from "react-spinners"; 


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const apiUrl = `https://fakestoreapi.com/products/${id}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="product-details-container">
            {loading ? (
                  <ClipLoader
                  color="#00BFFF"
                  loading={loading}
                  size={100}
              />
            ) : product ? (
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
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <div className="product-rating">
                            <h2>Rating:</h2>
                            <Rating
                                value={product.rating.rate}
                                edit={false} 
                                size={24} 
                                activeColor="#2196F3" 
                            />
                            <p>({product.rating.rate} stars based on {product.rating.count} reviews)</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="loading">Product not found.</p>
            )}
        </div>
    );
};

export default ProductDetails;

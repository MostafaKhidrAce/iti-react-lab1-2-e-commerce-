import { useState, useEffect } from "react";
import axios from "axios";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return [products, loading, error];
};

export default useProductData;

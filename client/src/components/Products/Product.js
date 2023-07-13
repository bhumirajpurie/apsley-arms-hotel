import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      const response = await fetch("http://localhost:8081/products");
      const products = await response.json();
      setData(products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={styles.productContainer}>
          {data.map((product) => (
            <div className={styles.product} key={product._id}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img
                src={`http://localhost:8081/${product.image}`}
                alt={product.name}
                width="200px"
              />
              <a href={`http://localhost:8081/product/${product._id}`}>
                Get more info
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Product;

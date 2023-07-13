import React, { useEffect, useState } from "react";

export const Product = () => {
  const [data, setData] = useState("");

  async function fetchProduct() {
    try {
      const response = await fetch("http://localhost:8080/products", {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // Authorization header is not needed in GET product/room hai, I've just put it here for reference
      const products = await response.json();
      console.log(products);
      setData(products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {data ? (
        data.products.map((product) => (
          <div key={product._id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img
              src={`http://localhost:8080/${product.image}`}
              alt={product.name}
              width="200px"
            />
            <a href={`http://localhost:8080/product/${product._id}`}>
              Get more info
            </a>
          </div>
        ))
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

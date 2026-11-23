




import React, { useState, useEffect } from "react";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <div className="container">

      <h1>Our Products</h1>

      <div className="products">

        {products.map((item) => (
          <div className="card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <button>Buy Now</button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;




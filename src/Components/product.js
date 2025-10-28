import React from "react";

const products = [
  { name: "AGARWOOD", discount: "Up to 80% OFF" },
  { name: "SANDALWOOD", discount: "Up to 70% OFF" },
  { name: "JASMINE", discount: "Up to 60% OFF" },
  { name: "ROSE", discount: "Up to 50% OFF" },
  { name: "LAVENDER", discount: "Up to 40% OFF" },
];

function Product() {
  return (
    <div
      style={{ backgroundColor: "hsla(15, 100%, 87%, 1)" }}
      className="row-custom"
    >
      {products.map((product, i) => (
        <div key={i} className="col-5-custom text-center p-5">
          <h5>{product.name}</h5>
          <p>{product.discount}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;

import React from "react";

// Make sure you import your icon correctly
import icon from "../image/icon.png";

// Products array
const products = [
  { name: "AGARWOOD", discount: "Up to 80% OFF", icon },
  { name: "SANDALWOOD", discount: "Up to 70% OFF", icon },
  { name: "JASMINE", discount: "Up to 60% OFF", icon },
  { name: "ROSE", discount: "Up to 50% OFF", icon },
  { name: "LAVENDER", discount: "Up to 40% OFF", icon },
];

function Product() {
  return (
    <div
      style={{ backgroundColor: "hsla(15, 100%, 87%, 1.00)" }}
      className="row-custom"
    >
      {products.map((product, i) => (
        <div key={i} className="col-5-custom text-center p-5">
          <img src={product.icon} alt={product.name} className="img-fluid" />
          <h5>{product.name}</h5>
          <p>{product.discount}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;

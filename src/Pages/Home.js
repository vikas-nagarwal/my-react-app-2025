import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    const products = [
      { name: "AGARgfhghWOOD", discount: "Up to 80% OFF" },
      { name: "SANDALWOOD", discount: "Up to 70% OFF" },
      { name: "JASMINE", discount: "Up to 60% OFF" },
      { name: "ROSE", discount: "Up to 50% OFF" },
      { name: "LAVENDER", discount: "Up to 40% OFF" },
    ];

    return (
      <>
        <div className="container py-2 bgcolor">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <h6 className="text-start">Welcome to Our E-Commerce Store</h6>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center">
              <h6>Product Category</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div
              style={{ backgroundColor: "hsla(15, 100%, 87%, 1.00)" }}
              className="row-custom"
            >
              {products.map((product, i) => (
                <div key={i} className="pd-5 col-5-custom text-center">
                  <h5>{product.name}</h5>
                  <p>{product.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

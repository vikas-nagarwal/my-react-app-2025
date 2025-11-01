import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function student5(age) {
  let name4 = "ajay";
  let name5 = "vikas";
  let is_voter = "";
  if (age >= 18) {
    is_voter = "YES";
  } else {
    is_voter = "NO";
  }
  return { name4, name5, age, is_voter };
}
const dataName = student5(14);
const dataName2 = student5(18);
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
        <div className="container">
          <h2>student info</h2>
          <p>name 1:{dataName.name4}</p>
          <p>name 2:{dataName.name5}</p>
          <p>Age:{dataName.age}</p>
          <p>Voteting: {dataName.is_voter}</p>
        </div>

        <div className="container">
          <h2>student info</h2>
          <p>name 1:{dataName2.name4}</p>
          <p>name 2:{dataName2.name5}</p>
          <p>Age:{dataName2.age}</p>
          <p>Voteting: {dataName2.is_voter}</p>
        </div>

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

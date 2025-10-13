import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

class MyComponent extends Component {
  render() {
    // Slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    // Products array
    const products = [
      {
        title: "AGARWOOD",
        discount: "UP to 80% OFF",
      },
      {
        title: "SANDALWOOD",
        discount: "UP to 50% OFF",
      },
      // Add more products as needed
    ];

    return (
      <>
        <div className="container py-2 bgcolor">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <h6 className="text-start">Welcome to Our E-Commerce Store</h6>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-start align-items-md-center gap-2 gap-md-3">
                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-cart"></i>
                  <h6 className="mb-0">Deliver to 423651</h6>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-truck"></i>
                  <h6 className="mb-0">Track your order</h6>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <i className="bi bi-tags"></i>
                  <h6 className="mb-0">All Offers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="bg-white py-2 shadow-sm bgcolor">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-6 col-md-2">
                <h4 className="mb-0 text-danger">Logo</h4>
              </div>

              {/* Search Bar */}
              <div className="col-6 col-md-7">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search essentials, groceries and more..."
                  />
                  <button className="btn btn-dark bggcolor" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>

              {/* User / Cart */}
              <div className="col-12 col-md-3 mt-2 mt-md-0">
                <div className="d-flex justify-content-end align-items-center gap-3">
                  <button className="btn btn-outline-secondary btn-sm">
                    Sign Up / Sign In
                  </button>
                  <div className="d-flex align-items-center gap-1">
                    <i className="bi bi-cart fs-5"></i>
                    <span>Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="headcls">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="d-flex justify-content-evenly mt-2 text-decoration-none uls">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Slider */}
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index}>
                <div
                  style={{
                    backgroundColor: "#7B4F3B",
                    color: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h2 style={{ margin: 0 }}>{product.title}</h2>
                    <p>{product.discount}</p>
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

export default MyComponent;

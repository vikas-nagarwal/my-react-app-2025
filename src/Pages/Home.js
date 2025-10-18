import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../image/icon.png";

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

    // Products array (for product section)
    const products = [
      { name: "AGARWOOD", discount: "Up to 80% OFF", icon },
      { name: "SANDALWOOD", discount: "Up to 70% OFF", icon },
      { name: "JASMINE", discount: "Up to 60% OFF", icon },
      { name: "ROSE", discount: "Up to 50% OFF", icon },
      { name: "LAVENDER", discount: "Up to 40% OFF", icon },
    ];

    return (
      <>
        <div className="container py-2 bgcolor">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <h6 className="text-start">Welcome to Our E-Commerce Store</h6>
            </div>
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

        <div className="button-container">
          <button className="action-btn">
            <i className="fas fa-shopping-cart"></i> Shop Online
          </button>
          <button className="action-btn">
            <i className="fas fa-file-signature"></i> Request A Quote
          </button>
          <button className="action-btn">
            <i className="fas fa-warehouse"></i> Buy Wholesale
          </button>
        </div>

        {/* slider section stat */}
        <div className="container mt-4">
          <div
            id="autoSlider"
            className="carousel slide shadow-lg rounded-4 overflow-hidden"
            data-bs-ride="carousel"
            data-bs-interval="1000" // ✅ 1 second per slide
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/id/1018/800/400"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{ objectFit: "cover", height: "400px" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://picsum.photos/id/1025/800/400"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{ objectFit: "cover", height: "400px" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://picsum.photos/id/1033/800/400"
                  className="d-block w-100"
                  alt="Slide 3"
                  style={{ objectFit: "cover", height: "400px" }}
                />
              </div>
            </div>

            {/* ✅ Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#autoSlider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#autoSlider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#autoSlider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>

        {/* slider section end */}

        {/* Product Section */}
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
                <div key={i} className=" pd-5 col-5-custom text-center  pd-5">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="img-fluid"
                  />
                  <h5>{product.name}</h5>
                  <p>{product.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center">
              <h6>Introducing Our Products</h6>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <ul
                  style={{
                    width: "500px",
                    margin: "0 auto", // ✅ centers the ul
                    gap: "65px", // ✅ space between li items
                  }}
                  className="d-flex justify-content-center mt-2 text-decoration-none uls"
                >
                  <li className="text-dark">
                    <a href="/" className="text-dark text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="text-dark">Home</li>
                  <li>
                    {" "}
                    <li className="text-dark">Home</li>
                  </li>
                  <li className="text-dark">Home</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyComponent;

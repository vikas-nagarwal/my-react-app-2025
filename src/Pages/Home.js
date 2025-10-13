import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class MyComponent extends Component {
  render() {
    return (
      <>
        <div className="container py-2 bgcolor ">
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

        <div className="headcls ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="d-flex justify-content-between align-items-center list-unstyled mb-0 py-2 me-4">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
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

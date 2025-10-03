import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        {/* Left Side: Form */}
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card p-4 shadow">
            <h2 className="mb-4 text-center ff">Sign up</h2>
            <form>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i class="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i class="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i class="bi bi-envelope"></i>{" "}
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <button type="submit" className="btn color w-100">
                Sign Up
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="/login">Sign In</a>
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-12 col-md-6 col-lg-5 d-none d-md-block">
          <div className="text-center">
            <img
              src="/login-image.png" // replace with your image path
              alt="Shopping"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

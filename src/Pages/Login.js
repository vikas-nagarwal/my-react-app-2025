import React from "react";
import loginImage from "../image/login.jpeg";
function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        {/* Left Side: Form */}
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card p-4 shadow">
            <h2 className="mb-4 text-center ff">Log in</h2>
            <form>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i class="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
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

              <button type="submit" className="btn color w-100">
                Log in
              </button>
            </form>
            <p className="text-center mt-3">
              <a href="/login">Login In</a>
              with other{" "}
            </p>
            <div class="login-container">
              <button className="login-btn">
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
                  alt="Google logo"
                  width="20"
                  height="20"
                />
                Login with <b>Facebook</b>
              </button>

              {/* Facebook Button */}
              <button className="login-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook logo"
                />
                Login with <b>Facebook</b>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-12 col-md-6 col-lg-5 d-none d-md-block">
          <div className="text-center">
            <img
              src="../image/login.jpeg"
              alt="Shopping"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import loginImage from "../image/login.jpeg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
  // 🧾 Step 1: Form data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Step 3: Validation function
  const validate = () => {
    let newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    return newErrors;
  };

  // ✅ Step 4: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Login successful!");
      console.log("Form Data:", formData);
    }
  };

  // ✅ Step 5: Google Login Handlers
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
  };

  const handleLoginError = () => {
    console.log("Google Login Failed");
  };

  // ✅ UI
  return (
    <GoogleOAuthProvider clientId="731940648115-6jhi4mlq2v3s8tfairu54g88vf69avl5.apps.googleusercontent.com">
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          {/* Left Side: Form */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card p-4 shadow">
              <h2 className="mb-4 text-center ff">Log in</h2>

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                {errors.username && (
                  <small className="text-danger">{errors.username}</small>
                )}

                {/* Password */}
                <div className="mb-3 input-group mt-2">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}

                <button type="submit" className="btn color w-100 mt-3">
                  Log in
                </button>
              </form>

              <p className="text-center mt-3">Or login with other accounts</p>

              {/* Google Login */}
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />

              {/* Facebook Login */}
              <a
                href={`https://www.facebook.com/v17.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(
                  "https://yourwebsite.com/auth/facebook/callback"
                )}&state={st=state123abc,ds=123456789}`}
              >
                <button className="login-btn mt-3 w-100 btn btn-light">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="Facebook logo"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  Login with <b>Facebook</b>
                </button>
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-12 col-md-6 col-lg-5 login">
            <img
              src={loginImage}
              alt="Login Visual"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;

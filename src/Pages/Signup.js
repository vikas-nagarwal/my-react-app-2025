import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import signupImage from "../image/singup.jpg";

function Signup() {
  // 🟢 Step 1: Form data and error state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // 🟢 Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🟢 Step 3: Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  // 🟢 Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // ✅ If no errors → success
    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Signup successful!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        {/* Left Side: Form */}
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card p-4 shadow">
            <h2 className="mb-4 text-center ff">Sign up</h2>

            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>

              {/* Phone Number */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
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
        <div className="col-12 col-md-6 col-lg-5">
          <div className="text-center">
            <img
              src={signupImage}
              alt="Shopping"
              className="img-fluid rounded"
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

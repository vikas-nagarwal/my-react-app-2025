import React from "react";
import loginImage from "../image/login.jpeg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    // Send credentialResponse.credential to backend for verification
  };

  const handleLoginError = () => {
    console.log("Google Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          {/* Left Side: Form */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card p-4 shadow">
              <h2 className="mb-4 text-center ff">Log in</h2>

              <form>
                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-3 input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn color w-100">
                  Log in
                </button>
              </form>

              <p className="text-center mt-3">Or login with other accounts</p>

              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                render={(renderProps) => (
                  <button
                    className="btn btn-light w-100 d-flex align-items-center justify-content-center"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google logo"
                      width="18"
                      height="18"
                      className="me-2"
                    />
                    Sign in with Google
                  </button>
                )}
              />

              {/* Facebook Login */}
              <a
                href={`https://www.facebook.com/v17.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(
                  "https://yourwebsite.com/auth/facebook/callback"
                )}&state={st=state123abc,ds=123456789}`}
              >
                <button className="login-btn mt-3">
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

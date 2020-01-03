import React from "react";
import "./auth.styles.scss";

// import {} from "react"

function Auth() {
  return (
    <div className="auth">
      <h1>Login/SignUp</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="btns">
        <div className="signup">SignUp</div>
        <div className="login">Login</div>
      </div>
    </div>
  );
}

export default Auth;

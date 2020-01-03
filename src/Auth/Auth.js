import React, { useState } from "react";
import "./auth.styles.scss";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from "../redux/actions";

function Auth(props) {
  const [email, setEmail] = useState("");
  return (
    <div className="auth">
      {props.logged ? <Redirect to="/" /> : null}
      <h1>Login/SignUp</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input type="password" placeholder="Password" />
      <div className="btns">
        <div className="signup">SignUp</div>
        <div className="login" onClick={() => props.login(email)}>
          Login
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: email => dispatch(Login(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

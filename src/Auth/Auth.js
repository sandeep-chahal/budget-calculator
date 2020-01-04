import React, { useState } from "react";
import "./auth.styles.scss";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from "../redux/actions";
import auth from "../firebase.util";

function Auth(props) {
  const [email, setEmail] = useState("ss@ss.com");
  const [pass, setPass] = useState("Sandeep12");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(user => {
        props.login(user);
      })
      .catch(error => {
        alert(error.message);
      });
  };
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(user => {
        // localStorage.set("token", user.token);
        props.login(user);
      })
      .catch(error => {
        alert("nope");
      });
  };

  return (
    <div className="auth-container">
      {props.logged ? <Redirect to="/" /> : null}
      <div className="auth-side"></div>

      <div className="auth">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <div className="btns">
          <div className="signup" onClick={handleSignup}>
            SignUp
          </div>
          <div className="login" onClick={handleLogin}>
            Login
          </div>
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
    login: user => dispatch(Login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

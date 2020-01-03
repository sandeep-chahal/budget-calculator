import React, { useState } from "react";
import "./auth.styles.scss";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from "../redux/actions";
import auth from "../firebase.util";

function Auth(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(user => {
        props.login(user);
      })
      .catch(error => {
        alert("nope");
      });
  };
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(user => {
        props.login(user);
      })
      .catch(error => {
        alert("nope");
      });
  };

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

import React, { useState } from "react";
import "./auth.styles.scss";
import firebase from "../firebase.util";

function Auth(props) {
  const [email, setEmail] = useState("ss@ss.com");
  const [pass, setPass] = useState("Sandeep12");
  const [loading, setLoader] = useState(false);

  const handleLogin = () => {
    setLoader(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(user => {
        // props.login(user);
        setLoader(false);
      })
      .catch(error => {
        alert(error.message);
        setLoader(false);
      });
  };
  const handleSignup = () => {
    setLoader(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(user => {
        // localStorage.set("token", user.token);
        // props.login(user);
        setLoader(false);
      })
      .catch(error => {
        alert("nope");
        setLoader(false);
      });
  };

  return (
    <div className="auth-container">
      {/* {props.logged ? <Redirect to="/budget-calculator" /> : null} */}
      <div className="auth-side"></div>

      <div className="auth">
        {loading ? (
          <div className="cssload-container">
            <div className="cssload-whirlpool"></div>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}

export default Auth;

import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";
import BudgetCalculator from "./budget calculator/BudgetCalculator";
import Auth from "./Auth/Auth";
import auth from "./firebase.util";
import { connect } from "react-redux";

class App extends React.Component {
  // componentDidMount() {
  //   auth.onAuthStateChanged(user => {
  //     this.props.signIn(user);
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Route exact path="/">
          <BudgetCalculator />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch({ type: "login", val: user })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";
import BudgetCalculator from "./budget calculator/BudgetCalculator";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!this.props.logged && token) {
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <BudgetCalculator />
          </Route>
        </Switch>
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

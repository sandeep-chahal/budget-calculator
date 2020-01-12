import React from "react";
import "./App.scss";

import { Route, withRouter } from "react-router-dom";
import BudgetCalculator from "./budget calculator/BudgetCalculator";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";
import firebase from "./firebase.util";
import { Login, addFetchedItems, setIncome } from "./redux/actions";

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.signIn(user);
        this.props.history.replace("/");
        this.fetchData();
      } else {
        this.props.history.replace("/auth");
      }
    });
  }

  fetchData = () => {
    // fetching income
    firebase
      .database()
      .ref("income")
      .once("value")
      .then(snap => this.props.setIncome(snap.val()));

    // fetching logs
    firebase
      .database()
      .ref("logs")
      .once("value")
      .then(snap => {
        if (snap) {
          this.props.addFetchedItems(snap.val());
        }
      });
  };
  render() {
    return (
      <div className="App">
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <BudgetCalculator />
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
    signIn: user => dispatch(Login(user)),
    addFetchedItems: item => dispatch(addFetchedItems(item)),
    setIncome: income => dispatch(setIncome(income))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

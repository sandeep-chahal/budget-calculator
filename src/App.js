import React from "react";
import "./App.scss";

import { Route, withRouter } from "react-router-dom";
import BudgetCalculator from "./budget calculator/BudgetCalculator";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";
import firebase from "./firebase.util";
import { Login, addFetchedItems } from "./redux/actions";

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
    firebase
      .database()
      .ref("logs")
      .on("value", snap => {
        if (snap) {
          // console.log(snap.val());
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
    addFetchedItems: item => dispatch(addFetchedItems(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

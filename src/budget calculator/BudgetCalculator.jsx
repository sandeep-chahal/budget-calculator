import React from "react";
import "./budgetCalculator.styles.scss";

import Card from "../card/Card";
import Button from "../add-button/Button";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";
import firebase from "../firebase.util";
import Logs from "../logs/Logs";

class BudgetCalculator extends React.Component {
  addItem = item => {
    if (item.name === "") return;
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    item.timestamp = timestamp;
    firebase
      .database()
      .ref("logs")
      .push(item)
      .then(() => this.props.AddItem(item))
      .catch(err => alert(err.message));
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">Budget Calculator</h1>
        <div className="card-container">
          <Card name="income" amount={this.props.income}></Card>
          <Card name="balance" amount={this.props.balance}></Card>
          <Card name="expense" amount={this.props.expense}></Card>
        </div>
        <div className="logs">
          <Logs logs={this.props.logs} />
        </div>
        <Button addItem={this.addItem}></Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    income: state.income,
    balance: state.balance,
    expense: state.expense,
    logs: state.logs
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddItem: item => dispatch(addItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCalculator);

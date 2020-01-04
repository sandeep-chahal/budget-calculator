import React from "react";
import "./budgetCalculator.styles.scss";

import Card from "../card/Card";
import Log from "../log/Log";
import Button from "../add-button/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addItem } from "../redux/actions";

function BudgetCalculator(props) {
  const addItem = item => {
    if (item.name === "") return;

    props.AddItem(item);
  };

  return (
    <div className="container">
      {!props.logged ? <Redirect to="auth" /> : null}
      <h1 className="header">Budget Calculator</h1>
      <div className="card-container">
        <Card name="income" amount={props.income}></Card>
        <Card name="balance" amount={props.balance}></Card>
        <Card name="expense" amount={props.expense}></Card>
      </div>
      <div className="logs">
        <div className="header">
          <h2>Today</h2>
          {props.logs.map((log, index) => (
            <Log name={log.name} amount={log.amount} key={index}></Log>
          ))}
        </div>
      </div>
      <Button addItem={addItem}></Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    logged: state.logged,
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

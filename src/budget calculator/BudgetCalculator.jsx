import React from "react";
import "./budgetCalculator.styles.scss";

import Card from "../card/Card";
import Log from "../log/Log";
import Button from "../add-button/Button";

class BudgetCalculator extends React.Component {
  state = {
    income: 0,
    balance: 0,
    expense: 0,
    logs: []
  };

  addItem = item => {
    if (item.name === "") return;

    const logs = [...this.state.logs, item];
    this.setState({
      balance: this.state.balance - item.amount,
      expense: this.state.expense - item.amount,
      logs: logs
    });
    // console.clear();
    // console.log(item, this.state);
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">Budget Calculator</h1>
        <div className="card-container">
          <Card name="income" amount={this.state.income}></Card>
          <Card name="balance" amount={this.state.balance}></Card>
          <Card name="expense" amount={this.state.expense}></Card>
        </div>
        <div className="logs">
          <div className="header">
            <h2>Today</h2>
            {this.state.logs.map((log, index) => (
              <Log name={log.name} amount={log.amount} key={index}></Log>
            ))}
          </div>
        </div>
        <Button addItem={this.addItem}></Button>
      </div>
    );
  }
}

export default BudgetCalculator;

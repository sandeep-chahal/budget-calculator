import React from "react";
import "./budgetCalculator.styles.scss";

import Card from "../card/Card";
import Log from "../log/Log";
import Button from "../add-button/Button";

class BudgetCalculator extends React.Component {
  state = {
    income: 4000,
    balance: 1892,
    expense: 2308,
    logs: [
      { name: "coffee", amount: 3 },
      { name: "Food", amount: 10 },
      { name: "shopping", amount: 15 }
    ]
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
            {this.state.logs.map(log => (
              <Log name={log.name} amount={log.amount}></Log>
            ))}
          </div>
        </div>
        <Button></Button>
      </div>
    );
  }
}

export default BudgetCalculator;

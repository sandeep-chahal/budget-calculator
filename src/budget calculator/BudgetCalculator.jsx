import React from "react";
import "./budgetCalculator.styles.scss";

import Card from "../card/Card";

class BudgetCalculator extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">Budget Calculator</h1>
        <div className="card-container">
          <Card name="income" amount={4000}></Card>
          <Card name="balance" amount={1892}></Card>
          <Card name="expense" amount={2308}></Card>
        </div>
      </div>
    );
  }
}

export default BudgetCalculator;

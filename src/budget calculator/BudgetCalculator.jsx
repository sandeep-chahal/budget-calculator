import React from "react";
import "./budgetCalculator.styles.scss";

import Card from "../card/Card";
import Button from "../add-button/Button";
import { connect } from "react-redux";
import { addItem, setIncome, removeItem } from "../redux/actions";
import firebase from "../firebase.util";
import Logs from "../logs/Logs";

class BudgetCalculator extends React.Component {
	addItem = item => {
		if (item.name === "") return;
		const timestamp = firebase.database.ServerValue.TIMESTAMP;
		item.timestamp = timestamp;
		firebase
			.database()
			.ref(this.props.userUid)
			.child("logs")
			.push(item)
			.then(() => this.props.AddItem(item))
			.catch(err => alert(err.message));
	};
	removeItem = (id, amount) => {
		firebase
			.database()
			.ref(firebase.auth().currentUser.uid)
			.child("logs")
			.child(id)
			.remove();
	};

	render() {
		return (
			<div className="container">
				<h1 className="header">Budget Calculator</h1>
				<div className="card-container">
					<Card
						name="income"
						amount={this.props.income}
						userUid={this.props.userUid}
						setIncome={this.props.setIncome}
					></Card>
					<Card name="balance" amount={this.props.balance}></Card>
					<Card name="expense" amount={this.props.expense}></Card>
				</div>
				<div className="logs">
					<Logs logs={this.props.logs} removeItem={this.removeItem} />
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
		logs: state.logs,
		userUid: state.user.uid
	};
};
const mapDispatchToProps = dispatch => {
	return {
		AddItem: item => dispatch(addItem(item)),
		removeItem: item => dispatch(removeItem(item)),
		setIncome: value => dispatch(setIncome(value))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCalculator);

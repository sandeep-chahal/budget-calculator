import React from "react";
import "./CardStyles.scss";
import icon from "../assets/img/edit.svg";
import firebase from "../firebase.util";
import { connect } from "react-redux";
import { setIncome } from "../redux/actions";

const handleIncomeChange = setIncome => {
  const res = prompt("enter income");
  const value = Number(res);
  if (!value) {
    alert("Nope, Not Today!");
    return;
  }
  setIncome(value);
  firebase
    .database()
    .ref("income")
    .set(value)
    .then(() => {
      alert("done");
    })
    .catch(err => alert(err.message));
};

function Card(props) {
  const expense = props.name === "expense";
  const income = props.name === "income";
  return (
    <div className={props.name + " card"}>
      <div className="details" style={income ? { marginBottom: "-20px" } : {}}>
        <h3>{props.name}</h3>
        <div className="amount">
          {expense ? "-" : ""}${Math.abs(props.amount)}
        </div>
        {income ? (
          <img
            src={icon}
            alt="edit"
            onClick={() => handleIncomeChange(props.setIncome)}
          ></img>
        ) : null}
      </div>
      <div className={props.name + " icon"}></div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setIncome: value => dispatch(setIncome(value))
  };
};

export default connect(null, mapDispatchToProps)(Card);

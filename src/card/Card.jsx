import React from "react";
import "./CardStyles.scss";
import icon from "../assets/img/edit.svg";
import firebase from "../firebase.util";
// import { connect } from "react-redux";
// import { setIncome } from "../redux/actions";

const handleIncomeChange = (userUid, setIncome) => {
  const res = prompt("enter income");
  const value = Number(res);
  if (!value) {
    alert("Nope, Not Today!");
    return;
  }
  console.log("object", userUid);
  firebase
    .database()
    .ref(userUid)
    .child("income")
    .set(value)
    .then(() => {
      alert("done");
    })
    .catch(err => alert(err.message));
  setIncome(value);
};

function Card(props) {
  const expense = props.name === "expense";
  const income = props.name === "income";
  return (
    <div className={props.name + " card"}>
      <div className="details" style={income ? { marginBottom: "-20px" } : {}}>
        <h3>{props.name}</h3>
        <div className="amount" style={{ display: "inline-block" }}>
          {expense ? "-" : ""}${Math.abs(props.amount)}
        </div>
        {income ? (
          <img
            src={icon}
            alt="edit"
            onClick={() => handleIncomeChange(props.userUid, props.setIncome)}
            style={{ display: "inline-block", marginLeft: "10px" }}
          ></img>
        ) : null}
      </div>
      <div className={props.name + " icon"}></div>
    </div>
  );
}

// const

// const mapDispatchToProps = dispatch => {
//   return {
//     setIncome: value => dispatch(setIncome(value))
//   };
// };

export default Card;

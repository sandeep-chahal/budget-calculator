import React from "react";
import "./log.styles.scss";

function Log(props) {
	return (
		<div className="log">
			<div className="left">
				<div className={props.name}></div>
				<div className="name">{props.name}</div>
			</div>
			<div className="right">
				<div className="amount">-${props.amount}</div>
				{props.date === "Today" ? (
					<div
						className="close"
						onClick={() => props.removeItem(props.id, props.amount)}
					>
						<span></span>
						<span></span>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default Log;

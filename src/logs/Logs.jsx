import React from "react";
import Log from "./Log";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

class Logs extends React.Component {
	displayLogs = logs => {
		return logs.map((log, i) => {
			const logs = log.logs.map(lg => {
				return (
					<Log
						date={log.date}
						name={lg.name}
						amount={lg.amount}
						key={lg.key}
						id={lg.key}
						removeItem={this.props.removeItem}
					/>
				);
			});
			return (
				<div key={i}>
					<h2 key={i + log.date} className="header2">
						{log.date}
					</h2>
					{logs}
				</div>
			);
		});
	};

	render() {
		return <div>{this.displayLogs(this.props.logs)}</div>;
	}
}

export default Logs;

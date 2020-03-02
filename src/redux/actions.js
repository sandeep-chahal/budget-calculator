export const Login = user => {
	return {
		type: "Login",
		payload: user
	};
};

export const addItem = item => {
	return {
		type: "addItem",
		payload: item
	};
};

export const addFetchedItems = data => {
	let items = [];
	let expense = 0;
	let currentDate = new Date();
	Object.keys(data).forEach(item => {
		items.push({ ...data[item], key: item });
		let itemAddedDate = new Date(data[item].timestamp);
		if (
			itemAddedDate.getMonth() === currentDate.getMonth() &&
			itemAddedDate.getFullYear() === currentDate.getFullYear()
		)
			expense += Number(data[item].amount);
	});
	items.sort((a, b) => {
		return b.timestamp - a.timestamp;
	});
	items = formatLogs(items);
	return {
		type: "addFetchedItems",
		payload: {
			items,
			expense
		}
	};
};

export const setIncome = income => {
	return {
		type: "setIncome",
		payload: income
	};
};
export const removeItem = (id, amount) => {
	return {
		type: "removeIncome",
		payload: { id, amount }
	};
};

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

const formatLogs = logs => {
	if (logs === false) return [];
	const today = new Date();
	const todayDate = today.getDate();
	const todayMonth = today.getMonth();
	let currentTime = new Date(logs[0].timestamp);
	let currentDate = currentTime.getDate();
	let currentMonth = currentTime.getMonth();
	let newLogs = [];
	let newLog = { date: null, logs: [] };
	logs.forEach(log => {
		const logTime = new Date(log.timestamp);
		const logDate = logTime.getDate();
		const logMonth = logTime.getMonth();
		if (logDate === currentDate && logMonth === currentMonth) {
			if (todayDate === logDate && todayMonth === logMonth) {
				newLog.date = "Today";
				newLog.logs.push(log);
			} else {
				newLog.date = logDate + " " + months[logMonth];
				newLog.logs.push(log);
			}
		} else {
			currentTime = new Date(log.timestamp);
			currentDate = currentTime.getDate();
			currentMonth = currentTime.getMonth();
			newLogs.push(newLog);
			newLog = {};
			newLog.date = logDate + " " + months[logMonth];
			newLog.logs = [];
			newLog.logs.push(log);
		}
	});
	newLogs.push(newLog);
	return newLogs;
};

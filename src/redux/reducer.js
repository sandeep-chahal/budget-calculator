const INITIAL_STATE = {
	logged: false,
	user: null,
	income: 8000,
	balance: 8000,
	expense: 0,
	logs: [],
	loading: true
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "setLoading": {
			return {
				...state,
				loading: action.payload
			};
		}
		case "Login":
			return {
				...state,
				logged: true,
				user: action.payload
			};
		case "addItem":
			const logs = [...state.logs];

			if (!logs[0] || logs[0].date !== "Today") {
				logs.unshift({ date: "Today", logs: [action.payload] });
			} else logs[0].logs = [action.payload, ...logs[0].logs];

			const balance = state.balance - action.payload.amount;
			const expense = state.expense - action.payload.amount;
			return {
				...state,
				logs,
				balance,
				expense
			};
		case "addFetchedItems":
			return {
				...state,
				logs: action.payload.items,
				expense: action.payload.expense,
				balance: state.income - action.payload.expense
			};
		case "setIncome":
			return {
				...state,
				income: action.payload,
				balance: action.payload - state.expense
			};
		case "removeItem":
			return {
				...state,
				balance: action.payload + state.balance,
				expense: action.payload - state.expense
			};
		default:
			return state;
	}
};

export default Reducer;

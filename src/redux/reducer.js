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

		default:
			return state;
	}
};

export default Reducer;

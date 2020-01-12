const INITIAL_STATE = {
  logged: false,
  user: null,
  income: 8000,
  balance: 8000,
  expense: 0,
  logs: []
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        logged: true,
        user: action.payload
      };
    case "addItem":
      const logs = [...state.logs, action.payload];
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
    default:
      return state;
  }
};

export default Reducer;

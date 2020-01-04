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
        user: action.payLoad
      };
    case "addItem":
      const logs = [...state.logs, action.payLoad];
      const balance = state.balance - action.payLoad.amount;
      const expense = state.expense - action.payLoad.amount;
      return {
        ...state,
        logs,
        balance,
        expense
      };
    default:
      return state;
  }
};

export default Reducer;

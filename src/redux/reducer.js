const INITIAL_STATE = {
  logged: false,
  email: null,
  income: 0,
  balance: 0,
  expense: 0,
  logs: []
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        logged: true,
        email: action.val
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

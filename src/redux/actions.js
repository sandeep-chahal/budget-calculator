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
  const items = [];
  let expense = 0;
  for (let item in data) {
    items.push(data[item]);
    expense += Number(data[item].amount);
  }
  console.log(items);
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

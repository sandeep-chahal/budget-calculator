export const Login = user => {
  return {
    type: "Login",
    payLoad: user
  };
};

export const addItem = item => {
  return {
    type: "addItem",
    payLoad: item
  };
};

export const addFetchedItems = data => {
  const items = [];
  for (let item in data) items.push(data[item]);
  console.log(items);
  return {
    type: "addFetchedItems",
    payload: items
  };
};

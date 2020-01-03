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

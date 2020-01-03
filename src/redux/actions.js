export const Login = val => {
  return {
    type: "Login",
    val
  };
};

export const addItem = item => {
  return {
    type: "addItem",
    payLoad: item
  };
};

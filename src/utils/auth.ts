const userNameValidation = (userName: any) => {
  const regEx = /^[a-zA-Z\s]{2,29}$/;
  const validation = regEx.test(userName);
  return validation;
};

const passwordValidation = (password: any) => {
  const regEx =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,20}$/;
  const validation = regEx.test(password);
  return validation;
};

const emailValidation = (email: any) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validation = regEx.test(email);
  return validation;
};

export { emailValidation, passwordValidation, userNameValidation };

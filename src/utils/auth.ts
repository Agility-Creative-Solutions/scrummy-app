const userNameValidation = (userName: any) => {
  let validation;
  const regEx = /^[a-zA-Z\s]{2,29}$/;
  if (regEx.test(userName)) {
    validation = true;
  } else {
    validation = false;
  }
  return validation;
};

const passwordValidation = (password: any) => {
  let validation;
  const regEx =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,20}$/;
  if (regEx.test(password)) {
    validation = true;
  } else {
    validation = false;
  }
  return validation;
};

const emailValidation = (email: any) => {
  let validation;
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (regEx.test(email)) {
    validation = true;
  } else {
    validation = false;
  }
  return validation;
};

export { emailValidation, passwordValidation, userNameValidation };

const userNameValidation = (userName: any, setuserNameInvalid: any) => {
  const regEx = /^[a-zA-Z\s]{2,29}$/;
  if (regEx.test(userName)) {
    setuserNameInvalid(false);
  } else {
    setuserNameInvalid(true);
  }
};

const passwordValidation = (password: any, setPasswordInvalid: any) => {
  const regEx =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,20}$/;
  if (regEx.test(password)) {
    setPasswordInvalid(false);
  } else {
    setPasswordInvalid(true);
  }
};

const emailValidation = (email: any, setEmailInvalid: any) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (regEx.test(email)) {
    setEmailInvalid(false);
  } else {
    setEmailInvalid(true);
  }
};

export { emailValidation, passwordValidation, userNameValidation };

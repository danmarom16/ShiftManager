const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;,.?~\\/-]/;

const isValid = (key, registerData) => {
  const data = registerData[key];
  if (key === "username") {
    if (data.length < 5) {
      return false;
    }
  }
  if (key === "email") {
    if (!data.includes("@")) {
      return false;
    }
  }
  if (key === "password") {
    if (data.length < 8 || !specialCharPattern.test(data)) {
      return false;
    }
  }
  if (key === "confirmPassword") {
    const password = registerData["password"];
    if (data !== password) {
      return false;
    }
  }
  return true;
};

const isValidData = (registerData) => {
  let res;
  for (const key in registerData) {
    console.log(key);
    if (registerData.hasOwnProperty(key)) {
      res = isValid(key, registerData);
      if (!res) {
        return false;
      }
    }
  }
  return true;
};
export const registerValidator = {
  isValid,
  isValidData,
};

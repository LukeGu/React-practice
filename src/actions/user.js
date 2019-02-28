export function changeUserName({ userName }) {
  return {
    type: "CHANGE_USER_NAME", //compulsory key!
    userName
  };
}

export function changeToAdmin() {
  return {
    type: "CHANGE_TO_ADMIN",
    authority: "ADMIN"
  };
}

export function logIn() {
  return {
    type: "LOG_IN",
    status: "logged_in"
  };
}

export function logOut() {
  return {
    type: "LOG_OUT",
    status: "logged_out"
  };
}

const initialState = {
  userName: "John",
  authority: "normal",
  status: "not_logged_in"
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, status: action.status };
    case "LOG_OUT":
      return { ...state, status: action.status };
    case "CHANGE_USER_NAME":
      return { ...state, userName: action.userName };
    case "CHANGE_TO_ADMIN":
      return { ...state, authority: action.authority };
    default:
      return state;
  }
};
export default user;

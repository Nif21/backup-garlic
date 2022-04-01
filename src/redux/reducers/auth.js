export default function auth(state = "", action) {
  switch (action.type) {
    case "CHANGE_TOKEN":
      return action.payload;
    default:
      return state;
  }
}

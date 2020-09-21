export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      console.log("action: FETCH_USER");
      return [...state, action.payload];
    default:
      console.log("action: ?: " + action.type);
      return state;
  }
};

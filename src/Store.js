// import rootReducer from "./reducer/RootReducer";
// import { combineReducers } from "redux";
import { createStore } from "redux";
// import addNumber from "./reducer/UseReducer";
import rootReducer from "./reducer/RootReducer";
// const reducers = combineReducers({
//   user: addNumber,
// });

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

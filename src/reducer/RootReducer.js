import addNumber from "./UseReducer";
import combineReducer from 'react';
const rootReducer = combineReducer({
    user:addNumber
});
export default rootReducer;
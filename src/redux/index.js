import { combineReducers } from "redux";
import chatReducer from "./reducers/chat";
const reducer = combineReducers({ chat: chatReducer });
export default reducer;

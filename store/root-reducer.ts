import { combineReducers } from "redux";
import { ReduxState } from "@/interfaces/redux.interface";

const rootReducer = combineReducers<ReduxState>({});

export default rootReducer; // this will return modified version of rootReducer with storage persistence

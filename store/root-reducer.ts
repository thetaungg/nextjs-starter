import { combineReducers } from "redux";
import { ReduxState } from "@/interfaces/redux.interface";
import commonReducer from "@/store/common/common.reducer";

const rootReducer = combineReducers<ReduxState>({
  commonState: commonReducer
});

export default rootReducer; // this will return modified version of rootReducer with storage persistence

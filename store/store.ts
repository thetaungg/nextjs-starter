import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { ReduxState } from "@/interfaces/redux.interface";
import rootReducer from "./root-reducer";
import { ON_TIME_CHANGE } from "@/store/common/common.action-types";

// let store: any;
//
// const initialState = {};
const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(
    createLogger({
      predicate: (_getState, action) => action.type !== ON_TIME_CHANGE,
    })
  );
}

// create a makeStore function
const makeStore: MakeStore<Store<ReduxState>> = (_context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<ReduxState>>(makeStore, { debug: false });

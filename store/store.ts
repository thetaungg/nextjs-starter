import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { ReduxState } from "@/interfaces/redux.interface";
import rootReducer from "./root-reducer";

// let store: any;
//
// const initialState = {};
const middlewares: any = [thunk]; // add saga middleware here

if (process.env.NODE_ENV === "development") {
  // to hide the middleware in production //environmental variable node set up which only has 3 possible values ('development', 'production', and 'test')
  middlewares.push(logger); // when we do npm run build it changes into 'production'
}

// create a makeStore function
const makeStore: MakeStore<Store<ReduxState>> = (_context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<ReduxState>>(makeStore, { debug: false });

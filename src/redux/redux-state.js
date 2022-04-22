import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "../redux/profile-reducer";
import { dialogsReducer } from "../redux/dialogs-reducer";
import { sidebarReducer } from "../redux/sidebar-reducer";
import usersReducer from "../redux/users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunkMiddleware))
);

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;

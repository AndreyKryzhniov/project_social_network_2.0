import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduce";
import authReducer from "./auth-reduce";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store
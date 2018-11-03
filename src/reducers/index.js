import {enableBatching} from 'redux-batched-actions';
import {combineReducers} from "redux";
import appReducer from "./app";

export default enableBatching(combineReducers({
    ...appReducer,
}));
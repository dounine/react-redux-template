import {enableBatching} from 'redux-batched-actions';
import {combineReducers} from "redux";
import counterReducer from "./counter";
import yeahReducer from "./yeah";
import appReducer from "./app";

export default enableBatching(combineReducers({
    ...appReducer,
    ...counterReducer,
    ...yeahReducer
}));
import {enableBatching} from 'redux-batched-actions';
import {combineReducers} from "redux";
import appReducer from "./app";
import { loadingBarReducer } from 'react-redux-loading-bar'

export default enableBatching(combineReducers({
    ...appReducer,
    loadingBar: loadingBarReducer
}));
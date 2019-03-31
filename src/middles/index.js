import {batchDispatchMiddleware} from 'redux-batched-actions';
import warn from './warn';
import log from './log';
import loadingBar from './loadingBar';

export default [
    loadingBar,
    batchDispatchMiddleware,
    warn,
    log
]
import {batchDispatchMiddleware} from 'redux-batched-actions';
import warn from './warn';
import log from './log';

export default [
    batchDispatchMiddleware,
    warn,
    log
]
import {createActions, handleActions} from 'redux-actions';
import {filterActions} from 'redux-ignore';


export const actions = createActions({
    hello: (hello) => (hello),
});

const defaultState = {
    name: 'lake'
};

const reducer = handleActions({
    hello: (state, action) => ({...state}),
}, defaultState);

export default {
    yeah: filterActions(reducer, Object.keys(actions))
};

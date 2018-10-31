import {createActions, handleActions} from 'redux-actions';
import {filterActions} from 'redux-ignore';


export const actions = createActions({
    increase: (hello) => (hello),
    decrease: (amount = 1) => ({amount: -amount})
});

const defaultState = {
    value: 0
};

const reducer = handleActions({
    increase: (state, action) => ({...state, value: state.value + 1}),
    decrease: (state, action) => ({...state, value: state.value - 1}),
}, defaultState);

export default {
    counter: filterActions(reducer, Object.keys(actions))
};
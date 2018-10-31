import {createActions, handleActions} from 'redux-actions';
import {filterActions} from 'redux-ignore';

export const actions = createActions({
    increase: (hello) => (hello),
    decrease: (amount = 1) => ({amount: -amount})
});

const defaultState = {
    value: 0,
    list: {}
};

const reducer = handleActions({
    increase: function (state, action) {
        state.list.name = 'hello';
        return {...state, value: state.value + 1}
    },
    decrease: (state, action) => ({...state, value: state.value - 1}),
}, defaultState);
export default {
    app: filterActions(reducer, Object.keys(actions))
};
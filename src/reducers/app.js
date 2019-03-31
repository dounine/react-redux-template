import {createActions, handleActions} from 'redux-actions';
import {filterActions} from 'redux-ignore';

export const actions = createActions({
    changeText: (text) => ({text}),
    searchRequest: (text) => ({text}),
    searchSuccess: (data) => ({data}),
    searchFailed: (error) => ({error}),
});

export const types = {
    changeText: 'changeText',
    searchRequest: 'searchRequest',
    search: 'search',
    searchSuccess: 'searchSuccess',
    searchFailed: 'searchFailed',
};

const defaultState = {
    name: '',
    searching: false,
    list: []
};

const reducer = handleActions({
    changeText: (state, action) => ({...state, searching: false, name: action.payload.text}),
    searchRequest: (state, action) => ({...state, searching: true, name: action.payload.text}),
    searchSuccess: function (state, action) {
        return {...state, list: action.payload.data.items, searching: false};
    },
    searchFailed: function (state, action) {
        return {...state, searching: false};
    },
}, defaultState);

export default {
    app: filterActions(reducer, Object.keys(actions))
};
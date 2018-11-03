import {createSelector} from 'reselect';

const todosSelector = (state, props) => state.yeah;
const fSelector = createSelector(
    [todosSelector],
    (todos) => {
        return {
            ...todos
        }
    }
);

export default fSelector;
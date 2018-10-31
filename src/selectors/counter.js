import { createSelector } from 'reselect';

const todosSelector = (state,props) => state.yeah;
const fSelector = createSelector(
  [todosSelector],
  (todos)=>{
    console.log(`todos`);
    console.log(todos);
    return {
      ...todos
    }
  }
);

export default fSelector;
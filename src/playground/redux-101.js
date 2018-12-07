import {createStore} from 'redux';

// ACTIONS // Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy // incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({setBy = 0} = {}) => ({
  type: 'SET',
  setBy
});

// REDUCERS
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.setBy
      };
    default:
      return state;
  }
};

// STORE
const store = createStore(countReducer);



store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({setBy: 9}));

import {createStore, combineReducers} from 'redux';


// STORE
//Store creation

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 200,
  createdAt: -1000
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Coffe',
  amount: 500,
  createdAt: -100
}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//
// store.dispatch(setTextFilter('coffe'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
store.dispatch(setStartDate(-2000));
store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'dsfsdf',
    description: 'January Rent',
    note: 'Some long note',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


// const names = ['Andrii', 'Peter', 'Kola'];
// ['NewName', names]    -> ["NewName", Array(3)]
// ['NewName', ...names] -> ["NewName", 'Andrii', 'Peter', 'Kola']

// const obj = {one: 1, two: 2}
// const newObj = {...obj, test: 666}
// newObj    -> {one: 1, two: 2, test: 666}
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [     // -> return state.concat(action.expence);
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,          // миксуем спредом
            ...action.updates
          }
        }
        return expense;
      });
      return state;

    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};
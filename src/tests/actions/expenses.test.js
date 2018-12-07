import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 100,
    note: 'note',
    createdAt: 123
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) // Любая строка
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

test('should remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({ // toBe не подойдет, так как {} !== {}, [] !== []
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should edit expense action object', () => {
  const action = editExpense('123abc', {description: 'new description'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {description: 'new description'}
  });
});

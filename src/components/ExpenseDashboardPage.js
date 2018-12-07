import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
  <div>
    Home page. This is from my dashboard component
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
export default (expenses) => (expenses.reduce((sum, item) => (sum + item.amount), 0));
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
function CreateExpense(expense) {
  return (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  );
}

function Expenses(props) {
  return (
    <Card className="expenses">
     {props.expenses.map(CreateExpense)}
    </Card>
  );
}

export default Expenses;

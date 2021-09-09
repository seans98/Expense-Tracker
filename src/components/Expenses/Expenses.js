import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
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
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const yearHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onAddYear={yearHandler} />
        {filteredExpenses.expenses.map(CreateExpense)}
      </Card>
    </div>
  );
}

export default Expenses;

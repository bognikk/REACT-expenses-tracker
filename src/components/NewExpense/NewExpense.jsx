import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

import "./NewExpense.scss";

const NewExpense = (props) => {
	const saveExpanseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<Card className="new-expense">
			<ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
		</Card>
	);
};

export default NewExpense;

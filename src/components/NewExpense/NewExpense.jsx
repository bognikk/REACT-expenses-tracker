import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

import "./NewExpense.scss";
import { useState } from "react";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpanseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<Card className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpanseData={saveExpanseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</Card>
	);
};

export default NewExpense;

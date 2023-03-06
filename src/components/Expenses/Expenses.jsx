import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilter={filterChangeHandler}
					selected={filteredYear}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</>
	);
};

export default Expenses;

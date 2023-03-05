import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.scss";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	// const [priceClasses, setPriceClasses] = useState("");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// const priceclassesHandler = (props) => {
	// 	if (props.items[0].amount >= 100) {
	// 		setPriceClasses("expense-item__price medium");
	// 	} else if (props.items[0].amount >= 500) {
	// 		setPriceClasses("expense-item__price high");
	// 	} else {
	// 		setPriceClasses("expense-item__price low");
	// 	}
	// };

	return (
		<>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilter={filterChangeHandler}
					selected={filteredYear}
				/>
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				/>
			</Card>
		</>
	);
};

export default Expenses;

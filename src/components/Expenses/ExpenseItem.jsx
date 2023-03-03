import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle("Updated");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2 className="expense-item__title">{title}</h2>
				<div className="expense-item__right">
					<div className="expense-item__price">${props.amount}</div>
				</div>
				<button onClick={clickHandler}>Change Title</button>
			</div>
		</Card>
	);
};

export default ExpenseItem;

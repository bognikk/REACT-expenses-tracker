import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<div className="expense-item__description">
				<ExpenseDate date={props.date} />
				<h2 className="expense-item__title">{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{/* <button>Remove</button> */}
		</Card>
	);
};

export default ExpenseItem;

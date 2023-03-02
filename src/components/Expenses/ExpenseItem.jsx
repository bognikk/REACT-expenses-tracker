import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2 className="expense-item__title">{props.title}</h2>
				<div className="expense-item__right">
					<div className="expense-item__price">${props.amount}</div>
				</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;

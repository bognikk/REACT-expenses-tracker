import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
	let priceClasses;

	if (props.amount >= 100 && props.amount < 500) {
		priceClasses = "expense-item__price medium";
	} else if (props.amount >= 500) {
		priceClasses = "expense-item__price high";
	} else {
		priceClasses = "expense-item__price";
	}

	return (
		<Card className="expense-item">
			<div className="expense-item__description">
				<ExpenseDate date={props.date} />
				<h2 className="expense-item__title">{props.title}</h2>
				<div className={priceClasses}>${props.amount}</div>
			</div>
			{/* <button>Remove</button> */}
		</Card>
	);
};

export default ExpenseItem;

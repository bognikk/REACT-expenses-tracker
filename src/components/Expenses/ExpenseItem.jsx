import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = ({ amount, date, title }) => {
	let priceClasses;

	if (amount >= 100 && amount < 500) {
		priceClasses = "expense-item__price medium";
	} else if (amount >= 500) {
		priceClasses = "expense-item__price high";
	} else {
		priceClasses = "expense-item__price";
	}

	return (
		<li>
			<Card className="expense-item">
				<div className="expense-item__description">
					<ExpenseDate date={date} />
					<h2 className="expense-item__title">{title}</h2>
					<div className={priceClasses}>${amount}</div>
				</div>
				{/* <button>Remove</button> */}
			</Card>
		</li>
	);
};

export default ExpenseItem;

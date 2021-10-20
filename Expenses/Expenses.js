import React from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesItems from './ExpenseItems';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpensesItems
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
                />
                <ExpensesItems
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                />
                <ExpensesItems
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
                />
                <ExpensesItems
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
                />
        </Card>
    );
}

export default Expenses;
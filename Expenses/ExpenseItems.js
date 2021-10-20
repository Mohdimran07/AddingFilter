 import React, { useState } from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItems = (props) => {

  const [title, setTitle] = useState(props.title);
  let [amount, setAmount] = useState(props.amount);
   
  const Change = () => {
    setAmount('100');
    console.log(amount);
  }
  const clickHandler = () => {
    setTitle('Update'); 
    console.log(title);
  }
    return(  
        <Card className="expense-item">
              <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                  <h2>{title}</h2>
                  <div className="expense-item__price">${amount}</div>
                </div>
                <button onClick={Change}>Expense</button>
                <button onClick={clickHandler}>Change Title</button>

        </Card>
    );
}

export default ExpenseItems;
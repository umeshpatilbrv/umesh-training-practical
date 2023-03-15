import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("UPDATED-CITY");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h1> {props.title} </h1>
          <div className="expense-item__price"> ${+props.amount}/- </div>
        </div>
        {/* <button onClick={clickHandler}>Change-City</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;

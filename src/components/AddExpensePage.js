import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <h1>AddExpensePage</h1>
    <ExpenseForm
      onSubmit={data => {
        props.dispatch(addExpense(data));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);

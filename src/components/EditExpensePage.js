import React, { Component } from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => {
  console.log("propsnya EditExpensePage", props);
  return (
    <div>
      item ID: <h4>{props.match.params.id}</h4>
      <ExpenseForm
        expense={props.expense}
        onSubmit={data => {
          console.log("submit Edit", data);
          // error diispatch edit nyaa
          // props.dispatch(editExpense(props.expense.id, data));
          console.log("props after submit", props);
          // props.history.push("/index.html");
        }}
      />
      <button
        onClick={e => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/index.html");
          console.log("removed", props);
        }}
      >
        remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);

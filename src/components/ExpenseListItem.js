import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      Rp.{amount} - {createdAt}
      <button
        onClick={e => {
          dispatch(removeExpense({ id: id }));
          console.log(id, description);
        }}
      >
        remove
      </button>
    </p>
  </div>
);

export default connect()(ExpenseListItem);

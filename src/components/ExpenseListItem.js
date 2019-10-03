import React from "react";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
// import { * } from 'moment'

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  note,
  createdAt
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h6>{id}</h6>
      <h3>{description}</h3>
    </Link>
    <p>{note}</p>
    <p>
      Rp.{amount} - {createdAt}
      <button
        onClick={e => {
          dispatch(removeExpense({ id: id }));
          console.log(id, description);
        }}
      >
        x
      </button>
    </p>
  </div>
);

export default connect()(ExpenseListItem);

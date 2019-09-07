import React from "react";
import { Link } from "react-router-dom";

const EditExpensePage = props => (
  <div>
    <h4>List Edit Edit</h4>
    <ol>
      <li>
        <Link to="/edit/1">kahiji</Link>
      </li>
      <li>
        <Link to="/edit/2">kadua</Link>
      </li>
      <li>
        <Link to="/edit/5">kalima</Link>
      </li>
    </ol>
  </div>
);
export default EditExpensePage;

import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  sortByAmount,
  sortByDate,
  setTextFilter,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "sarapan bubur", amount: 1300, createdAt: 123 })
);
store.dispatch(
  addExpense({ description: "meuli hui", amount: 2500, createdAt: 4444 })
);
store.dispatch(
  addExpense({ description: "gorengan campur", amount: 1500, createdAt: 5555 })
);
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(AppRouter, document.getElementById("app"));

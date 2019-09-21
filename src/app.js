import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import {
  addExpense
  // , editExpense
  // , removeExpense
} from "./actions/expenses";
import {
  sortByAmount,
  sortByDate,
  setTextFilter
  // setStartDate,
  // setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "sarapan bubur", amount: 10000 }));
store.dispatch(
  addExpense({ description: "jajan hui 1 Kg", amount: 25000, createdAt: 4444 })
);
store.dispatch(
  addExpense({ description: "sodaqohh", amount: 5000, createdAt: 2555 })
);
store.dispatch(
  addExpense({ description: "ongkos grab", amount: 12000, createdAt: 5555 })
);
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// setTimeout(() => {
//   store.dispatch(setTextFilter("hui"));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

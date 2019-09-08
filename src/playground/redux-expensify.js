import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
const editExpense = ({ id, updates }) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SET_SORT_BY_AMOUNT"
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SET_SORT_BY_DATE"
});

// SET_START_DATE
const setStartDate = (StartDate = "") => ({
  type: "SET_START_DATE",
  StartDate
});

// SET_END_DATE
const setEndDate = (EndDate = "") => ({
  type: "SET_END_DATE",
  EndDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
      });

    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.StartDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.EndDate };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof startDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  // console.log(state.filters);
  // const { text, sortBy, startDate, endDate } = state.filter;
  // console.log(text, sortBy, startDate, endDate);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "this is January Rent",
    amount: 100,
    createdAt: 10000
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "coffe at kedai coffee cenangan",
    amount: 300,
    createdAt: 20000
  })
);
const expenseThree = store.dispatch(
  addExpense({
    description: "Roti O di stasiun Sudirman",
    amount: 50,
    createdAt: 30000
  })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(
//   editExpense({ id: expenseTwo.expense.id, updates: { amount: 654321 } })
// );
// store.dispatch(setTextFilter("renT"));
// store.dispatch(setTextFilter());

store.dispatch(sortByDate());
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(1));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(12));

const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

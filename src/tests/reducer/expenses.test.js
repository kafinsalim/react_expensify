import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";
import uuid from "uuid";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

// ADD
test("should add an expense", () => {
  const expense = {
    id: uuid(),
    description: "Something to buy",
    note: "some notes if needed",
    amount: 9000,
    createdAt: moment()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// REMOVE
test("should remove an expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove any expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// EDIT
test("should edit an expense", () => {
  const description = "some new name";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test("should not edit any expense", () => {
  const description = "some new name";
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

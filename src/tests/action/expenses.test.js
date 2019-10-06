import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup addExpense action object with provided value", () => {
  const expenseData = {
    description: "some desc",
    note: "some note",
    amount: 123456,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test("should setup addExpense action object with provided value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

test("should setup editExpense action object", () => {
  const action = editExpense({
    id: "123asd",
    updates: {
      description: "some description"
    }
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123asd",
    updates: {
      description: "some description"
    }
  });
});

test("should setup removeExpense action object", () => {
  const action = removeExpense({ id: "123asd" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123asd" });
});

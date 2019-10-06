import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SET_SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: "SET_SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const date = moment().startOf("month");
  const state = filtersReducer(currentState, {
    type: "SET_TEXT_FILTER",
    text: "some text"
  });
  expect(state.text).toBe("some text");
});

test("should set startDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const date = moment().startOf("month");
  const state = filtersReducer(currentState, {
    type: "SET_START_DATE",
    startDate: date
  });
  expect(state.startDate).toBe(date);
});

test("should set endDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const date = moment().startOf("month");
  const state = filtersReducer(currentState, {
    type: "SET_END_DATE",
    endDate: date
  });
  expect(state.endDate).toBe(date);
});

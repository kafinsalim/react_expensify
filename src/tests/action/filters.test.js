import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should generate setStartDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: "SET_START_DATE", startDate: moment(0) });
});

test("should generate setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

test("should generate setTextFilter action object with text value", () => {
  const text = "Some text to filter";
  const action = setTextFilter(text);
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text });
});

test("should generate setTextFilter action object with default param", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should generate sortByAmount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SET_SORT_BY_AMOUNT" });
});

test("should generate sortByDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SET_SORT_BY_DATE" });
});

// // SET_TEXT_FILTER
// export const setTextFilter = (text = "") => ({
//   type: "SET_TEXT_FILTER",
//   text
// });

// // SORT_BY_AMOUNT
// export const sortByAmount = () => ({
//   type: "SET_SORT_BY_AMOUNT"
// });

// // SORT_BY_DATE
// export const sortByDate = () => ({
//   type: "SET_SORT_BY_DATE"
// });

// // SET_START_DATE
// export const setStartDate = (StartDate = "") => ({
//   type: "SET_START_DATE",
//   StartDate
// });

// // SET_END_DATE
// export const setEndDate = (EndDate = "") => ({
//   type: "SET_END_DATE",
//   EndDate
// });

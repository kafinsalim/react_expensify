// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SET_SORT_BY_AMOUNT"
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SET_SORT_BY_DATE"
});

// SET_START_DATE
export const setStartDate = (StartDate = "") => ({
  type: "SET_START_DATE",
  StartDate
});

// SET_END_DATE
export const setEndDate = (EndDate = "") => ({
  type: "SET_END_DATE",
  EndDate
});

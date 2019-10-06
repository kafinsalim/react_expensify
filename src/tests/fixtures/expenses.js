import moment from "moment";
export default [
  {
    id: "1",
    description: "alat mandi",
    note: "",
    amount: 123,
    createdAt: 0 // january 1st 00:00 midnight 1970 (epoch time)
  },
  {
    id: "2",
    description: "Sewa Kos",
    note: "",
    amount: 76540,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Tiket CGV",
    note: "",
    amount: 3455,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

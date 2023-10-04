import { useState } from "react";
import BasicPicker from "./components/BasicPicker";
import DateRange from "./components/DateRange";
import DateRangeInOne from "./components/DateRangeInOne";

function App() {
  return (
    <>
      <BasicPicker />
      <hr />
      <DateRange />
      <hr />
      <DateRangeInOne />
    </>
  );
}

export default App;

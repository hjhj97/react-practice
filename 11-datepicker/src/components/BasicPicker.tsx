import React, { useState } from "react";
import CustomDatePicker from "./DatePicker";

function BasicPicker() {
  const [startDate, setStateDate] = useState(new Date());
  return (
    <div>
      <h2>Basic Picker</h2>
      <CustomDatePicker selected={startDate} onChange={(date: Date) => date && setStateDate(date)} />
      <p>{startDate.toString()}</p>
    </div>
  );
}

export default BasicPicker;

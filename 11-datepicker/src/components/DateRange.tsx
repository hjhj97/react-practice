import React, { useState } from "react";
import CustomDatePicker from "./DatePicker";

function DateRange() {
  const [startDate, setStateDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
      <h2>Date Range</h2>
      <CustomDatePicker selectsStart selected={startDate} onChange={(date: Date) => setStateDate(date)} />
      <p>start : {startDate.toString()}</p>
      <CustomDatePicker selectsEnd selected={endDate} onChange={(date: Date) => setEndDate(date)} />
      <p>end : {endDate.toString()}</p>
    </div>
  );
}

export default DateRange;

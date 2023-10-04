import React, { useState } from "react";
import CustomDatePicker from "./DatePicker";

function DateRangeInOne() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectRange = (dates: Date[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
      <h2>DateRange In One</h2>
      <div>
        <CustomDatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          onChange={(dates) => selectRange(dates)}
        />
      </div>
      <p>start : {startDate.toString()}</p>
      <p>end : {endDate?.toString()}</p>
    </>
  );
}

export default DateRangeInOne;

import React from "react";
import DatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

function CustomDatePicker(props: ReactDatePickerProps<string, boolean>) {
  return (
    <>
      <DatePicker locale="ko" {...props} />
    </>
  );
}

export default CustomDatePicker;

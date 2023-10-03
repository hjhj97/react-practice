import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

function App() {
  const [startDate, setStateDate] = useState(new Date());

  return (
    <>
      <DatePicker locale="ko" selected={startDate} onChange={(date) => date && setStateDate(date)} />
    </>
  );
}

export default App;

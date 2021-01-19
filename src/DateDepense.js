import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "moment/min/locales.min";
import { useSelector, useDispatch } from "react-redux";
import { selectDate, updateDate } from "./sliceDepenseToCut";

export default function DateDepense() {
  moment.locale("fr-FR");
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [startDate, setStartDate] = useState(moment(useSelector(selectDate)));

  const onDateChangeHandler = (date) => {
    setStartDate(date);
    dispatch(updateDate(date.format("DD/MM/YY")));
  };

  const onFocusChangeHandler = () => {
    setFocus(!focus);
  };

  return (
    <div align="center">
      {
        <SingleDatePicker
          numberOfMonths={1}
          onDateChange={onDateChangeHandler}
          focused={focus}
          date={startDate}
          onFocusChange={onFocusChangeHandler}
          id="choixDate"
        />
      }
    </div>
  );
}

import { React, useState } from "react";
import { useParams } from "react-router-dom";
import subtractTime from "./subtract-time";

const Countdown = () => {
  const { month, day } = useParams();
  let newCountdown =
    new Date(2022, month - 1, day).getTime() - new Date().getTime();
  const [years, days, hours, mins, seconds] = subtractTime(newCountdown);
  let [counter, setCounter] = useState(newCountdown);
  setInterval(() => {
    setCounter(counter - 1000);
  }, 500);
  return (
    <>
      <h2>
        {days} days
        {hours} hours
        {mins} minutes
        {seconds} seconds
      </h2>
    </>
  );
};

export default Countdown;

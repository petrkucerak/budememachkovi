import { useState } from "react";
import { useEffect } from "react";

export default function CountDown({ endingTime }) {
  const [newTime, setNewTime] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");

  // const timeToDays = time * 60 * 60 * 24 * 1000;

  // let countDownDate = new Date().getTime() + timeToDays;

  let countDownDate = new Date(endingTime).getTime();

  useEffect(() => {
    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = countDownDate - now;

      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, 100);

  return (
    <div>
      {days} dní {hours} hodin {minutes} minut {seconds} sekund
    </div>
  );
}

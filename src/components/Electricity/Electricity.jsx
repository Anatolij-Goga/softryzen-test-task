import { useState, useEffect } from "react";
import css from "./Electricity.module.css";

export default function Electricity() {
  let counterStart = 1134147814;
  const [counter, setCounter] = useState(counterStart);
  const formattedCounter = counter.toLocaleString("de-DE");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className={css.electricity_section} id="service">
      <h2 className={css.electricity_title}>
        Electricity we produced for all time
      </h2>
      <div className={css.electricity_counter}>
        <span className={css.electricity_time}> {formattedCounter} </span>
        <span className={css.electricity_measure}>kWh</span>
      </div>
    </section>
  );
}

import React, { useEffect, useLayoutEffect } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const timestampDiff = (future) => (past) =>
  [DAY, HOUR, MINUTE, SECOND].map((time, index, times) => {
    const diff = future - past;
    const previousTime = times[index - 1];

    return (
      Math.floor(diff / time) -
      (Math.floor(diff / previousTime) * (previousTime / time) || 0)
    );
  });

const timer = (date, target) => {
  const diff = timestampDiff(Date.parse(date));

  return setInterval(() => {
    const [days, hours, minutes, seconds] = diff(Date.now());

    target.innerHTML = `
              <div class="time"><span class="number">${days}</span><span class="desc">Dias</span></div>
              <div class="time"><span class="number">${hours}</span><span class="desc">Horas</span></div>
              <div class="time"><span class="number">${minutes}</span><span class="desc">Minutos</span></div>
              <div class="time"><span class="number">${seconds}</span><span class="desc">Segundos</span></div>
          `;
  }, SECOND);
};

export const TimerComponent = () => {
  useEffect(() => {
    timer("may 7, 2022 21:00:00", document.getElementById("timer"));
  }, []);
  return <div data-scroll id="timer" />;
};

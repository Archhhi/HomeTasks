import React from "react";
import s from "./Clock.module.css";
import {ClockViewType} from "./Clock";

const get2DigitalString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
  return (
    <>
      <div className={s.hours}>
        {get2DigitalString(date.getHours())}
      </div>
      <div className={s.minutes}>
        {get2DigitalString(date.getMinutes())}
      </div>
      <div className={s.seconds}>
        {get2DigitalString(date.getSeconds())}
      </div>
    </>
  )
}
import React, {useEffect, useState} from "react";
import s from './Clock.module.css'
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
  mode?: 'analog' | 'digital'
}
export type ClockViewType = {
  date: Date
}

const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  let view

  switch (props.mode) {
    case 'analog':
      view = <AnalogClockView date={date}/>
      break
    case 'digital':
    default:
      view = <DigitalClockView date={date}/>
  }

  return (
    <div>
      {view}
    </div>
  )
}

export default Clock
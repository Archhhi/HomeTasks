import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

type PropsType = {}

const get2DigitalString = (num: number) => num < 10 ? '0' + num : num

const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={s.container}>
      <div className={s.clock}>
        <div className={s.hours}>
          {get2DigitalString(date.getHours())}
        </div>
        <div className={s.minutes}>
          {get2DigitalString(date.getMinutes())}
        </div>
        <div className={s.seconds}>
          {get2DigitalString(date.getSeconds())}
        </div>
      </div>
    </div>
  )
}

export default Clock
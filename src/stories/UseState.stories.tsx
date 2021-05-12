import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
  title: 'useState demo'
}

function generateData() {
  console.log('generateData')
  return 1
}

export const Example1 = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  if (seconds === 60) {
    setSeconds(0)
  } else if (minutes === 60) {
    setMinutes(0)
  } else if (hours === 24) {
    setHours(0)
  }

  useEffect(() => {
    setInterval(() => {
      setHours(hours => hours + 1)
    }, 3600000)
    setInterval(() => {
      setMinutes(minutes => minutes + 1)
    }, 60000)
    setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
  }, [])
  // useEffect(() => {
  //   setInterval(() => {
  //     setMinutes(minutes => minutes + 1)
  //   }, 60000)
  // }, [])
  // useEffect(() => {
  //   setInterval(() => {
  //     setSeconds(seconds => seconds + 1)
  //   }, 1000)
  // }, [])

  return (
    <>
      {/*<button onClick={() => setCounter(state => state + 1)}>+</button>*/}
      {`${hours}:${minutes}:${seconds}`}
    </>
  )
}
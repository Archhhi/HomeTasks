import {useEffect, useState} from "react";

export default {
  title: 'UseEffect'
}

export const SetIntervalExample = () => {
  const [text, setText] = useState('')

  console.log('Component rendered with ' + text)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('TIMEOUT EXPIRED')
      setText('3 seconds passed')
    }, 3000)

    return () => {
      clearTimeout(intervalId)
    }
  }, [])

  return <>{text}</>
}
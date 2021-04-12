import React from "react";

type PropsType = {
  on: boolean
  onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {

  const onStyle = {
    display: 'inline-block',
    backgroundColor: props.on ? 'limegreen' : 'white',
  }
  const offStyle = {
    display: 'inline-block',
    backgroundColor: props.on ? 'white' : 'red',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    display: 'inline-block',

    backgroundColor: props.on ? 'green' : 'red',
    borderRadius: '2em',
  }

  return (
    <div>
      <button style={onStyle} onClick={() => {
        props.onChange(true)
      }}>On</button>
      <button style={offStyle} onClick={() => {
        props.onChange(false)
      }}>Off</button>
      <div style={indicatorStyle}/>
    </div>
  )
}
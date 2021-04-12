import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
  value: string
  title: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  selectItems: ItemType[]
}

export function Select(props: SelectPropsType) {
  debugger

  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  let selectedItem = props.selectItems.find(i => i.value === props.value);
  let hoveredItem = props.selectItems.find(i => i.value === hoveredElementValue);

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  let options = props.selectItems.map(i => <div key={i.value}
                                                className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                                onClick={() => {
                                                  props.onChange(i.value)
                                                  toggleItems()
                                                }}
                                                onMouseEnter={() => {
                                                  setHoveredElementValue(i.value)
                                                }}
  >{i.title}</div>);

  const toggleItems = () => setActive(!active)

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.selectItems.length; i++) {
        if (props.selectItems[i].value === hoveredElementValue) {
          const pretenderElement = e.key === 'ArrowDown'
            ? props.selectItems[i + 1]
            : props.selectItems[i - 1]

          if (pretenderElement) {
            props.onChange(pretenderElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.selectItems[0].value)
      }
    }

    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  return (
    <>
      <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {
          active &&
          <div className={s.items}>
            {options}
          </div>
        }
      </div>
    </>
  )
}
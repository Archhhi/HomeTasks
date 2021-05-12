import React from "react";

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  /**
   * Elements that are showed when accordion is opened (not collapsed)
   */
  onClick: (value: any) => void
  items: ItemType[]
}

function Accordion (props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue}
                      onChange={props.onChange}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  )
}
const MemoizedAccordion = React.memo(Accordion)

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.onChange()}>-- {props.title}</h3>
  )
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <div>
      <ul>
        {props.items.map((i, index) => <li key={index} onClick={() => {props.onClick(i.value)}}>{i.title}</li>)}
      </ul>
    </div>
  )
}

export default MemoizedAccordion;
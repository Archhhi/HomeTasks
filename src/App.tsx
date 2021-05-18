import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Select} from "./components/Select/Select";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import MemoizedAccordion from "./components/Accordion/Accordion";
import Clock from "./components/Clock/Clock";

function App() {

  const [items, setItems] = useState([
    {title: 'Dimych', value: 1},
    {title: 'Victor', value: 2},
    {title: 'Valera', value: 3},
    {title: 'Dimych', value: 4},
  ])

  const [selectItems, setSelectItems] = useState([
    {value: '1', title: 'Пусто'},
    {value: '2', title: 'Москва'},
    {value: '3', title: 'Нальчик'},
    {value: '4', title: 'Чегем'},
  ])
  const [value, setValue] = useState('2')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(1);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
    <div className={'App'}>
      <OnOff on={switchOn} onChange={setSwitchOn} />
      <MemoizedAccordion titleValue={'Menu'}
                 collapsed={accordionCollapsed}
                 onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                 items={
                   [
                     {title: 'Dimych', value: 1},
                     {title: 'Victor', value: 2},
                     {title: 'Valera', value: 3},
                     {title: 'Dimych', value: 4},
                   ]
                 }
                 onClick={setItems}
      />
      <Rating value={ratingValue}
              onClick={setRatingValue}
      />
      <Select selectItems={selectItems}
              value={value}
              onChange={setValue}
      />
      <UnControlledAccordion titleValue={'Users'} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;

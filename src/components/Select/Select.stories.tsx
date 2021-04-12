import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Select stories',
  component: Select,
};

export const WithValue = () => {
  const [value, setValue] = useState('2')
  const [selectItems, setSelectItems] = useState([
    {value: '1', title: 'Пусто'},
    {value: '2', title: 'Москва'},
    {value: '3', title: 'Нальчик'},
    {value: '4', title: 'Чегем'},
  ])

  return <Select selectItems={selectItems}
                 value={value}
                 onChange={setValue}
  />
}

export const WithoutValue = () => {
  const [value, setValue] = useState(null)
  const [selectItems, setSelectItems] = useState([
    {value: '1', title: 'Пусто'},
    {value: '2', title: 'Москва'},
    {value: '3', title: 'Нальчик'},
    {value: '4', title: 'Чегем'},
  ])

  return <Select selectItems={selectItems}
                 value={value}
                 onChange={setValue}
  />
}
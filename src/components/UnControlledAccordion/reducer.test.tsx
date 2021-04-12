import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
import React from "react";

test('reducer should change value to opposite value', () => {
  const state: StateType = {
    collapsed: false
  }

  const newState = reducer(state, {type: TOGGLE_COLLAPSED})


  expect(newState.collapsed).toBe(true)
})
import React from 'react'
import Onchange_event from './Event_handling/Onchange_event'
import Arrayofobj from './Event_handling/Arrayofobj'
import ConditionalRendering from "./Event_handling/ConditionalRendering"
import ToggleButton from './Event_handling/ToggleButton'

function Event() {
  return (
    <>
      <Onchange_event/>
      <Arrayofobj/>
      <ConditionalRendering/><br />
      <ToggleButton/>
    </>
  )
}

export default Event

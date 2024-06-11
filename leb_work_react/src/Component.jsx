import React from 'react'
import Calculator_class from './Component/Calculator_Class'
import Calculator_function from './Component/Calculator_function'
import Counter from './Component/Counter'
import StatefulComponent from './Component/StatefulComponent'
import StatelessComponent from './Component/StatelessComponent'

function Component() {
  return (
    <>
      <Calculator_class/>
      <Calculator_function/>
      <Counter/>
      <StatefulComponent/>
      <StatelessComponent/>
    </>
  )
}

export default Component

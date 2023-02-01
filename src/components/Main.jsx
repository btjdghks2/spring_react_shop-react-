import React from 'react'
import { Cardkart } from './item/Cardkart.jsx'
import { Category } from './mainpiece/Category.jsx'
import {Logo} from './mainpiece/Logo.jsx'


export const Main = () => {
  return (
    <div>
      <Logo/>
      <div style={{height: 5}}/>
      <Category/>
<Cardkart/>

    </div>
  )
}

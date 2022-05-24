import React, { Component } from 'react'
import spinner from './spinner.gif'
// export default class Spinner extends Component
const Spinner=()=> {
  
    return (
      <div className='text-center'>
          <img src={spinner} alt="loading"/>
      </div>
    )
  
}
export default Spinner


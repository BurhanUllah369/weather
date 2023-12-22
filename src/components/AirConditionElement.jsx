import React from 'react'

function AirConditionElement({heading, num, icon}) {
  return (
    <div className='air-element'>
      <h3 className='heading'><i className={icon}></i>{heading}</h3>
      <h3 className='num'>{num}</h3>
    </div>
  )
}

export default AirConditionElement

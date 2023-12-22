import React from 'react'
import Day from '../components/Day'

function WeekForecast() {
  return (
    <div className='week-forecast'>
      <p className='week-forecast-heading gray'>7-DAY FORECAST</p>
      <Day day='Today'/>
      <Day day='Tue'/>
      <Day day='Wed'/>
      <Day day='Thu'/>
      <Day day='Fri'/>
      <Day day='Sat'/>
      <Day day='Sun'/>
    </div>
  )
}

export default WeekForecast

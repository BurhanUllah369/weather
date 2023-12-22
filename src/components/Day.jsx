import React from 'react'

function Day({day}) {
  return (
    <div className='week-day'>
      <p className='gray day-name'>{day}</p>
      <div className="image-weather">
        <img src="https://www.freepnglogos.com/uploads/rain-png/transparent-download-green-cloud-with-rain-clipart-png-23.png" alt="" />
        <p className='day-weather'>Sunny</p>
      </div>
      <p className='week-day-temp'>37°</p>
    </div>
  )
}

export default Day

import React from 'react'


const ActivityCard = ({activityName, time, color, lastTime, imgUrl, gridRow, gridColumn}) => {
  return (
    <section className="activityCard" style={{gridColumn: gridColumn, gridRow: gridRow}}>
      <div className="image-container" style={{backgroundColor:color}}>
        <div className="overflow-container">
        <img className='icon' src={imgUrl} alt="deneme" />
        </div>
      </div>
      <div className="content-container">
        <div className="left-container">
          <h4 className='activityTitle'>{activityName}</h4>
          <div className="wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          
        </div>
        <div className="right-container">
          <p className='activityTime'>{time}hrs</p>
          <div className="last-text">
            Last Week - {lastTime}hrs
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivityCard
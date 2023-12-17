import React from 'react'

const Activity = () => {
  return (
    <div className='activity'>

    <div className="activityTop">
      <div className="activityInfo">
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/140122184610-aman-dmitry-medvedev.jpg?q=w_3663,h_2298,x_0,y_0,c_fill" alt="" />
        <div className="activityTextInfo">
          <span className='name'>Егор Дьяченко</span>
          <span className='task'>Убирать пляж</span>
        </div>
      </div>
      <div className="activityPlaceTime">
        <span>12:00</span>
        <span>Олимпийский проспект 14</span>
      </div>
    </div>
    <p className='activityText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus, commodi necessitatibus iste distinctio consequatur consequuntur odio perferendis perspiciatis. Eaque explicabo ducimus temporibus sit possimus quod quisquam est blanditiis voluptas?</p>
    <div className="activityButtons">
    <button className='activityMore'>Подробнее</button>
    <button className='activityAccept'>Записаться</button>
    </div>
  </div>
  )
}

export default Activity
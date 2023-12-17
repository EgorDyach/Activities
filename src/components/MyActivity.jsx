import React from 'react'
import MyActivityUser from './MyActivityUser'

const MyActivity = () => {
  return (
    <div className='myActivity'>

      <div className="myActivityTop">
        <div className="myActivityInfo">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/140122184610-aman-dmitry-medvedev.jpg?q=w_3663,h_2298,x_0,y_0,c_fill" alt="" />
          <div className="myActivityTextInfo">
            <span className='name'>Егор Дьяченко</span>
            <span className='task'>Убирать пляж</span>
          </div>
        </div>
        <div className="myActivityPlaceTime">
          <span>12:00</span>
          <span>Олимпийский проспект 14</span>
        </div>
      </div>
      <p className='myActivityText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus, commodi necessitatibus iste distinctio consequatur consequuntur odio perferendis perspiciatis. Eaque explicabo ducimus temporibus sit possimus quod quisquam est blanditiis voluptas?</p>
      <div className="myActivityButtons">
      <button className='myActivityDelete'>Удалить</button>
      </div>
      <div className="myActivityUsers">
        <MyActivityUser />
        <MyActivityUser />
        <MyActivityUser />
        <MyActivityUser />
      </div>
    </div>
  )
}

export default MyActivity
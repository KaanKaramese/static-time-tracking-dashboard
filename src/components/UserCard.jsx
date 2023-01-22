import React from "react";
import img from "../images/image-jeremy.png";

const UserCard = () => {
  return (
    <section className="userCard">
      <div className="user-container">
        <img className="profile-pic" src={img} alt="" />
        <div className="user-info">
          <p className="title">Report for</p>
          <p className="name">Jeremy Robson</p>
        </div>
      </div>
      <div className="time-container">
        <button className="time"> Daily </button>
        <button className="time"> Weekly </button>
        <button className="time"> Monthly </button>
      </div>
    </section>
  )
}

export default UserCard;
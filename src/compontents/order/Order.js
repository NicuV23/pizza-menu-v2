import React from "react";
import "./index.css";

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or visit
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;

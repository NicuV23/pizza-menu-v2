import React from "react";
import Order from "../order/Order";
import "./index.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're curently open!");
  // } else {
  //   alert("Closed!");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Sorry, we're closed untill {openHour}:00.</p>
      )}
    </footer>
  );
}

export default Footer;

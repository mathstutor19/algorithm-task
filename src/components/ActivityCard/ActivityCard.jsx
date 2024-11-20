import React from "react";
import "./ActivityCard.css";
const ActivityCard = ({ image, title, text }) => {
  return (
    <li className="activity__card">
      <div className="activity__card__image">{image}</div>
      <h3 className="activity__card__title">{title}</h3>
      <p className="activity__card__text">{text}</p>
    </li>
  );
};

export default ActivityCard;

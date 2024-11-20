import React from "react";
import "./TourCard.css";
const TourCard = ({ id, title, time, amount }) => {
  return (
    <li className="tour__card">
      <div className={`tour__card__image-${id} tour__card__image`} />
      <div className="tour__card__content">
        <div>
          <h4 className="tour__card__title">{title}</h4>
          <time datetime="" className="tour__card__time">
            {time}
          </time>
        </div>
        <b className="tour__card__amount">{amount}</b>
      </div>
    </li>
  );
};

export default TourCard;

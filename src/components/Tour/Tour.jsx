import React from "react";
import "./Tour.css";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import TourCard from "../TourCard/TourCard";
import { tourCardDate } from "../../utils/tourCarddate";
const Tour = () => {
  return (
    <section className="tour">
      <div className="container">
        <SectionSubtitle text="Popular" />
        <SectionTitle text="tour packages" />
        <p className="tour__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <ul className="tour__cards">
          {tourCardDate.map((card) => (
            <TourCard key={card.id}
              id={card.id}
              title={card.title}
              time={card.time}
              amount={card.amount}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tour;

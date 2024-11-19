import React from "react";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import "./Destination.css";
const Destination = () => {
  return (
    <section className="destination">
      <div className="container">
        <SectionSubtitle text="Choose your" />
        <SectionTitle text="Destination" />
        <div className="destination__cards">
          <article className="destination__card destination__card__first">
            <h3 className="destination__title">Malaysia</h3>
            <Link className="destination__link" to="/">
              16 Tours
            </Link>
          </article>
          <article className="destination__card destination__card__second">
            <h3 className="destination__title">Dubai</h3>
            <Link className="destination__link" to="/">
              16 Tours
            </Link>
          </article>
          <article className="destination__card destination__card__third">
            <h3 className="destination__title">Greece</h3>
            <Link className="destination__link" to="/">
              16 Tours
            </Link>
          </article>
          <article className="destination__card  destination__card__fourth">
            <h3 className="destination__title">Singapore</h3>
            <Link className="destination__link" to="/">
              16 Tours
            </Link>
          </article>
        </div>
        <Link to="/" className="destination__more">View More</Link>
      </div>
    </section>
  );
};

export default Destination;

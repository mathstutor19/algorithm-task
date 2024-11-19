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
          <article className="destination__card">
            <h3 className="destination__title">Malaysia</h3>
            <Link className="destination__link" to="/">
              16 Tours
            </Link>
          </article>
          <div className="destination__right">
            <article className="destination__card">
              <h3 className="destination__title">Malaysia</h3>
              <Link className="destination__link" to="/">
                16 Tours
              </Link>
            </article>
            <article className="destination__card">
              <h3 className="destination__title">Malaysia</h3>
              <Link className="destination__link" to="/">
                16 Tours
              </Link>
            </article>
            <article className="destination__card">
              <h3 className="destination__title">Malaysia</h3>
              <Link className="destination__link" to="/">
                16 Tours
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;

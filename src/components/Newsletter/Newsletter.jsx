import React from "react";
import image from "../../essets/newsletter.png";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter">
      <img className="newsletter__image" src={image} alt="newsletter" />
      <div className="newsletter__content">
        <h2 className="newsletter__title">
          Get Our Monthly <br /> Newsletter
        </h2>
        <p className="newsletter__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="newsletter__input__wrapper">
          <input
            className="newsletter__input"
            type="text"
            placeholder="Input your emaill address in here"
          />
          <div className="newsletter__input__icon"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

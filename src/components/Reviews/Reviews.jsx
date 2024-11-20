import React from "react";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import image1 from "../../essets/reviews-1.svg";
import image2 from "../../essets/reviews-2.svg";
import image3 from "../../essets/reviews-3.svg";
import image4 from "../../essets/reviews-4.svg";
import image5 from "../../essets/reviews-5.svg";
import image6 from "../../essets/reviews-6.svg";
import "./Reviews.css";
const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <SectionSubtitle text="Review & Testimonials" />
        <SectionTitle text="top reviews for etour" />
        <p className="reviews__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="reviews__comment">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.....
        </div>
        <div className="reviews__images">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
          <div>
            <h4 className="reviews__name">Scarlett Thomas</h4>
            <p className="reviews__place">Singapore</p>
          </div>
          <img src={image5} alt="image5" />
          <img src={image6} alt="image6" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

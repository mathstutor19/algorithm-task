import React from "react";
import "./Photos.css";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import photos1 from "../../essets/photos-1.png";
import photos2 from "../../essets/photos-2.png";
import photos3 from "../../essets/photos-3.png";
import photos4 from "../../essets/photos-4.png";
import photos5 from "../../essets/photos-5.png";
import photos6 from "../../essets/photos-6.png";
const Photos = () => {
  return (
    <section className="photos">
      <div className="container">
        <SectionSubtitle text="Best Traveler’s" />
        <SectionTitle text="Shared photos" />
        <p className="photos__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="photos__wrapper">
          <img className="photos__image" src={photos1} alt="photos1" />
          <img className="photos__image" src={photos2} alt="photos2" />
          <img className="photos__image" src={photos3} alt="photos3" />
          <img className="photos__image" src={photos4} alt="photos4" />
          <img className="photos__image" src={photos5} alt="photos5" />
          <img className="photos__image" src={photos6} alt="photos6" />
        </div>
      </div>
    </section>
  );
};

export default Photos;

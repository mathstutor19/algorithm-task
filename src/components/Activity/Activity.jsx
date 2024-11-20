import React from "react";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Activity.css";
import { activityCard } from "../../utils/activityCard";
import ActivityCard from "../ActivityCard/ActivityCard";
const Activity = () => {
  return (
    <section className="activity">
      <div className="container">
        <SectionSubtitle text="Travel by" />
        <SectionTitle text="Activity" />
        <p className="activity__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <ul className="activity__cards">
          {activityCard.map((item) => (
            <ActivityCard
              key={item.id}
              image={item.image}
              text={item.text}
              title={item.title}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Activity;

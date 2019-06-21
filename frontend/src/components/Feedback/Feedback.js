import React from "react";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import Sort from "../Sort/Sort";
import "./Feedback.scss";
import faker from "faker";

function Feedback() {
  let comment1 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. asdas";
  let feedbackContent = [
    {
      id: 1,
      filter: 'user-shield', 
      img: faker.fake("{{image.avatar}}"),
      name: "Milan",
      commentTitle: "Naslov Komentara",
      comment: comment1.slice(0, 200)
    },
    {
      id: 2,
      filter: 'hamburger', 
      img: faker.fake("{{image.avatar}}"),
      name: "Zoran",
      commentTitle: "Naslov Komentara",
      comment: comment1.slice(0, 200)
    },
    {
      id: 3,
      filter: 'bus', 
      img: faker.fake("{{image.avatar}}"),
      name: "Stanko",
      commentTitle: "Naslov Komentara",
      comment: comment1.slice(0, 200)
    }
  ];
  let feedbackData = feedbackContent.map(item => (
    <FeedbackCard key={item.id} data={item} />
  ));
  return (
    <div className="feedback">
      {/* <div>
            <Sort opcije = { ['opcija1','opcija2','opcija3']} />    
        </div>            */}
      {feedbackData}
    </div>
  );
}

export default Feedback;

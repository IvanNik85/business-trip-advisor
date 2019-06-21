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
      date: '2016-10-13',
      commentTitle: "Naslov Komentara",
      comment: comment1.slice(0, 200), 
      moreComments: [
      {
        img: faker.fake("{{image.avatar}}"),
        name: 'Nikola',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis reiciendis, fugit amet tenetur tempore nemo asperiores nisi rem explicabo aspernatur quas. Mollitia assumenda obcaecati deleniti molestias veniam in voluptate!'
      },
      {
        img: faker.fake("{{image.avatar}}"),
        name: 'Marko',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis reiciendis, fugit amet tenetur tempore nemo asperiores nisi rem explicabo aspernatur quas. Mollitia assumenda obcaecati deleniti molestias veniam in voluptate!'
      }
    ]},
    {
      id: 2,
      filter: 'hamburger', 
      img: faker.fake("{{image.avatar}}"),
      name: "Zoran",
      date: '2017-05-12',
      commentTitle: "Naslov Komentara",
      comment: comment1.slice(0, 200),
      moreComments: [
        {
          img: faker.fake("{{image.avatar}}"),
          name: 'Zvonko',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis reiciendis, fugit amet tenetur tempore nemo asperiores nisi rem explicabo aspernatur quas. Mollitia assumenda obcaecati deleniti molestias veniam in voluptate!'
        },
        {
          img: faker.fake("{{image.avatar}}"),
          name: 'Zivka',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis reiciendis, fugit amet tenetur tempore nemo asperiores nisi rem explicabo aspernatur quas. Mollitia assumenda obcaecati deleniti molestias veniam in voluptate!'
        }
      ]
    },
    {
      id: 3,
      filter: 'bus', 
      img: faker.fake("{{image.avatar}}"),
      name: "Stanko",
      date: '2018-02-14',
      commentTitle: "Naslov Komentara",
      comment: comment1.slice(0, 200),
      moreComments: [
        { 
          img: faker.fake("{{image.avatar}}"),
          name: 'Zdravko',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis reiciendis, fugit amet tenetur tempore nemo asperiores nisi rem explicabo aspernatur quas. Mollitia assumenda obcaecati deleniti molestias veniam in voluptate!'
        },
        { 
          img: faker.fake("{{image.avatar}}"),
          name: 'Milena',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis reiciendis, fugit amet tenetur tempore nemo asperiores nisi rem explicabo aspernatur quas. Mollitia assumenda obcaecati deleniti molestias veniam in voluptate!'
        }
      ]
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

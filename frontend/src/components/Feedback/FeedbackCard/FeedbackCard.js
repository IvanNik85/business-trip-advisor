import React from "react";
import "./FeedbackCard.scss";
import Bar from "../../Bar/Bar";
import ChosenCityLifeIcon from "../../ChosenCityLifeIcon/ChosenCitLifeIcon";

function FeebackCard(props) {
  let { img, name, commentTitle, comment } = props.data;
  return (
    <div className="feedbackCard">
      <ChosenCityLifeIcon />
      <div className="nameTitleBar">
        <img id="userImg" src={img} alt="userImage" />
        <div className="nameTitle">
          <h3>{name}</h3>
          <h3>{commentTitle}</h3>
          <Bar score="5.7" />
        </div>
      </div>
      <p>{comment}</p>
      <div className="footer">
        <div id="commentsNumber">
          <i className="far fa-comment-alt" />
          <p>4</p>
        </div>
        <a href="##" id="readMore">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default FeebackCard;

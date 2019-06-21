import React from "react";
import "./FeedbackCard.scss";
import Bar from "../../Bar/Bar";
import ChosenCityLifeIcon from "../../ChosenCityLifeIcon/ChosenCitLifeIcon";
import Icon from "../../../UI/Icon/Icon"
import FeedbackCardFooter from "./FeedbackCardFooter/FeedbackCardFooter"
import FooterLeft from "../FeedbackCard/FooterComponents/FooterLeft"
import FooterRight from "../FeedbackCard/FooterComponents/FooterRight"

function FeebackCard(props) {
	let { img, name, commentTitle, comment, filter } = props.data;
	return (
		<div className="feedbackCard">
		<div className="iconDiv">
			<Icon fontSize={18} iconClass={filter} color={'color1'} />
		</div>
		<div className="nameTitleBar">
			<img id="userImg" src={img} alt="userImage" />
			<div className="nameTitle">
			<h3>{name}</h3>
			<h3>{commentTitle}</h3>
			<Bar score="5.7" />
			</div>
		</div>
		<p>{comment}</p>
		<FeedbackCardFooter>
			<FooterLeft />
			<FooterRight />
		</FeedbackCardFooter>

		</div>
	);
}

export default FeebackCard;

import React from "react";
import "./FeedbackCard.scss";
import ChosenCityLifeIcon from "../../ChosenCityLifeIcon/ChosenCitLifeIcon";
import Icon from "../../../UI/Icon/Icon"
import FeedbackCardFooter from "./FeedbackCardFooter/FeedbackCardFooter"
import FooterLeft from "../FeedbackCard/FooterComponents/FooterLeft"
import FooterRight from "../FeedbackCard/FooterComponents/FooterRight"
import FeedbackMain from "../FeedbackCard/FeedbackMain/FeedbackMain"
import Bar from '../../Bar/Bar'

function FeebackCard(props) {
	let { img, name, date, commentTitle, comment, filter, moreComments } = props.data;
	return (
		<div className="feedbackCard">
		<div className="iconDiv">
			<Icon fontSize={18} iconClass={filter} color={'color1'} />
		</div>

	<FeedbackMain data={props.data}> 
    <Bar score="5.7" />
  </FeedbackMain>

		<FeedbackCardFooter>
			<FooterLeft numComments = {moreComments.length}/>
			<FooterRight data={props.data}/>     
		</FeedbackCardFooter>

		</div>
	);
}

export default FeebackCard;

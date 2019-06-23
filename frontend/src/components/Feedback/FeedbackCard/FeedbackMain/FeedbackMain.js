import React from 'react'
import "../FeedbackCard.scss";

export default function FeedbackMain(props) {
    let { img, name, commentTitle, comment, moreComments } = props.data;
    return (
        <div className="feedbackMain">
            <div className="nameTitleBar">
                <img id="userImg" src={img} alt="userImage" />
                <div className="nameTitle">
                    <h3>{name}</h3>
                    <h3>{commentTitle}</h3>
                    {props.children}
                </div>
            </div>
            <p>{comment}</p>
        </div>
    )
}

import React from 'react'
import "./FeedbackCardFooter.scss"

export default function FeedbackCardFooter(props) {
    return (
        <div className="footer">
            {props.children}
        </div>
    )
}

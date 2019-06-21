import React from 'react'

function FooterLeft(props) {
    return (      
        <div id="commentsNumber">
            <i className="far fa-comment-alt" />
            <p>{props.numComments}</p>
        </div>      
    )
}
export default FooterLeft
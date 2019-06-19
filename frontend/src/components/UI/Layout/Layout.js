import React from 'react'
import "./Layout.scss";
export default function Layout(props) {
    return (
        <div id="main">
            {props.children}
        </div>
    )
}

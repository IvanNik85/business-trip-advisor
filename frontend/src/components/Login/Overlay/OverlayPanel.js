import React from "react";


import './OverlayPanel.scss'

const  OverlayPanel =(props)=> {
   
    let {title, text,  classes} = props;
    
    return (
        <div className = {[ 'overlay-panel', classes ].join(" ")}>
            <h1>{title}</h1>
            <p>
               {text}
            </p>
                    
            {props.children}
        </div>
    )
}

export default OverlayPanel



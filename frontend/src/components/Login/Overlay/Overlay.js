import React from 'react'

import './Overlay.scss'

const Overlay = (props)=> {
    return (
        <div className={'overlay-container'}>
            <div className={'overlay'}>
                {props.children}
            </div>
            
        </div>
    )
}

export default Overlay
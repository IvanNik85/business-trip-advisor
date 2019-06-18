import React from 'react'
import Icon from '../Icon/Icon'

export default function IconAndText(props) {
const {iconClass,color,title } = props
    return (
        <div className={color}>

          <Icon  iconClass = {iconClass} fontSize={40} />

          <p>{title}</p>
        </div>
    )
}

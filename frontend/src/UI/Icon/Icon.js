import React from 'react'

export default function Icon(props) {
    const {iconClass,fontSize, color} = props
    return (
        <i className={[`fas fa-${iconClass}`, color].join(" ")} style= {{ fontSize: fontSize}}></i>
    )
}

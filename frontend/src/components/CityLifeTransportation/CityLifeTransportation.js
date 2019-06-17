import React from 'react'
import './CityLifeTransportation.scss'
import Icon from '../../UI/Icon/Icon'
import IconAndText from '../../UI/IconAndText/IconAndText'

export default function CityLifeTransportation(props) {
    const { title, classDiv } = props

    const iconClassesCity = [{ 'Food and Drinks': 'hamburger' }, { Safety: 'user-shield' }, { Sightseeing: 'binoculars' }, { 'Local Transport': 'bus' }, { 'Local Culture': 'university' }, { Other: 'map-signs' }];

    const iconClassesTransport = [{ Aeroplane: 'plane' }, { 'Rent a Car': 'car' }, { Bus: 'bus-alt' }, { Subway: 'subway' }, { Taxi: 'taxi' }]
    let icons = null;

    if (title === 'City Life') {
        icons = iconClassesCity.map((el, i) => {

            return <IconAndText key={i} iconClass={Object.values(el)} color={'color' + i} title={Object.keys(el)} />
        })

    } else {
        icons = iconClassesTransport.map((el, i) => {

            return <IconAndText key={i} iconClass={Object.values(el)} color={'color' + i} title={Object.keys(el)} />
        })
    }

    return (
        <div className={classDiv}>
            <h1>{title}</h1><span><i class="fas fa-chevron-down"></i></span>
            <div className='cityLifestyle'>
                {icons}
            </div>
        </div>
    )
}

/*              <i class="fas fa-"><br/>Food and drinks</i>
                <i class="fas fa-user-shield"><br/>Safety</i>
                <i class="fas fa-binoculars"><br/>Sightseeing</i>
                <i class="fas fa-bus"><br/>Local Transport</i>
                <i class="fas fa-university"><br/>Local Culture</i>
                <i class="fas fa-map-signs"><br/>Other</i>*/
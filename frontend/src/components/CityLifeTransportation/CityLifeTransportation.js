import React, { Component } from "react";
import "./CityLifeTransportation.scss";
import Icon from "../../UI/Icon/Icon";
import IconAndText from "../../UI/IconAndText/IconAndText";

<<<<<<< HEAD
class CityLifeTransportation extends Component {
  constructor() {
    super();
    this.state = {
      id: "hidden",
      transform: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      id: this.state.id === "hidden" ? "visible" : "hidden"
    });
  }

  render() {
    const { title, contDiv, iconDiv } = this.props;

    const iconClassesCity = [
      { "Food and Drinks": "hamburger" },
      { Safety: "user-shield" },
      { Sightseeing: "binoculars" },
      { "Local Transport": "bus" },
      { "Local Culture": "university" },
      { Other: "map-signs" }
    ];

    const iconClassesTransport = [
      { Aeroplane: "plane" },
      { "Rent a Car": "car" },
      { Bus: "bus-alt" },
      { Subway: "subway" },
      { Taxi: "taxi" }
    ];
    let icons = null;

    if (title === "City Life") {
      icons = iconClassesCity.map((el, i) => {
        return (
          <IconAndText
            key={i}
            iconClass={Object.values(el)}
            color={"color" + i}
            title={Object.keys(el)}
          />
        );
      });
    } else {
      icons = iconClassesTransport.map((el, i) => {
        return (
          <IconAndText
            key={i}
            iconClass={Object.values(el)}
            color={"color" + i}
            title={Object.keys(el)}
          />
        );
      });
    }
=======
class CityLifeTransportation extends Component {    
        state = {
            id: 'hidden',
           transform: true           
        }   

    handleClick = () => {
        this.setState({
           id: this.state.id === 'hidden'? 'visible': 'hidden',               
           transform: !this.state.transform,
        })
    }

    render() {
        const { title, contDiv, iconDiv} = this.props

        const iconClassesCity = [{ 'Food and Drinks': 'hamburger' }, { Safety: 'user-shield' }, { Sightseeing: 'binoculars' }, { 'Local Transport': 'bus' }, { 'Local Culture': 'university' }, { Other: 'map-signs' }];
    
        const iconClassesTransport = [{ Aeroplane: 'plane' }, { 'Rent a Car': 'car' }, { Bus: 'bus-alt' }, { Subway: 'subway' }, { Taxi: 'taxi' }]
        let icons = null;
    
        if (title === 'City Life') {
            icons = iconClassesCity.map((el, i) => {
    
                return <IconAndText key={i} iconClass={Object.values(el)} color={'color' + i} title={Object.keys(el)} />
            })
    
        } else if(title === 'Transportation'){
            icons = iconClassesTransport.map((el, i) => {
    
                return <IconAndText key={i} iconClass={Object.values(el)} color={'color' + i} title={Object.keys(el)} />
            })
        } else {
            icons = null;
        } 
            
        return (
            <div className={contDiv}>
               <div className="title" onClick = {this.handleClick}>
                    <h1>{title}</h1><span><i style={{transform: this.state.transform ? 'rotate(0deg)': 'rotate(180deg)', transition: '0.4s'}}class="fas fa-chevron-down"></i></span>
               </div>
                <div className={iconDiv} id = {this.state.id} >
                    {icons}
                </div>
            </div>
        )
    }    
}
>>>>>>> 81d26b2d7bb161d7a0ed190c0d40aeeb87c54977

    return (
      <div className={contDiv}>
        <div className="title" onClick={this.handleClick}>
          <h1>{title}</h1>
          <span>
            <i className="fas fa-chevron-down" />
          </span>
        </div>
        <div className={iconDiv} id={this.state.id}>
          {icons}
        </div>
      </div>
    );
  }
}

export default CityLifeTransportation;
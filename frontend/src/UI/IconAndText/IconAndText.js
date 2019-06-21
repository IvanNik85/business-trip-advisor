import React from 'react'
import Icon from '../Icon/Icon'

class IconAndText extends React.Component {
	state = {
		filterIcon: ''
	}
	iconClick = () => {
		console.log(this.props.iconClass[0])
	}

	render() {
		const { iconClass, color, title } = this.props
		return (
			<div className={color} onClick={this.iconClick}>
				<Icon iconClass={iconClass} fontSize={40} filter={this.state.filterIcon} />
				<p>{title}</p>
			</div>
		)
	}
}
export default IconAndText;
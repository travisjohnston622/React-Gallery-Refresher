import React, { Component } from 'react';

class GalleryItem extends Component {
	render() {
		return (
			<div>
				<img src={this.props.item.path} alt={this.props.item.discription} />
			</div>
		);
	}
}

export default GalleryItem;

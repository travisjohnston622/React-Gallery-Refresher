import React, { Component } from 'react';

class GalleryItem extends Component {
	state = {
		showImage: true,
	};

	toggleImage = (event) => {
		this.setState({
			showImage: !this.state.showImage,
		});
	};
	render() {
		let imageElement = (
			<img src={this.props.item.path} alt={this.props.item.discription} />
		);

		if (!this.state.showImage) {
			imageElement = <p>{this.props.item.discription}</p>;
		}
		return <div onClick={this.showImage}>{imageElement}</div>;
	}
}

export default GalleryItem;

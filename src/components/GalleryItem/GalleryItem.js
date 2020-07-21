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
		return (
			<div>
				<div onClick={this.showImage}>{imageElement}</div>
				<p>Likes:{this.props.item.likes}</p>
				<button
					onClick={(event) => {
						this.props.putLike(this.props.item.id);
					}}
				>
					Like
				</button>
			</div>
		);
	}
}

export default GalleryItem;

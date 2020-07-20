import React, { Component } from 'react';

class GalleryList extends Component {
	render() {
		const htmlArray = this.props.galleryInfo.map((item, index) => {
			return (
				<div key={index}>
					<img src={item.path} alt={item.discription} />
				</div>
			);
		});
		return <div>{htmlArray}</div>;
	}
}

export default GalleryList;

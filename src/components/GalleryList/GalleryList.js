import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
	render() {
		const htmlArray = this.props.galleryInfo.map((item, index) => {
			return (
				<div key={index}>
					<GalleryItem key={index} item={item} />
				</div>
			);
		});
		return <div>{htmlArray}</div>;
	}
}

export default GalleryList;

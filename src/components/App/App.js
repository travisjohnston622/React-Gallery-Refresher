import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
	state = {
		galleryInfo: [],
	};

	componentDidMount() {
		this.getGallery();
	}
	getGallery() {
		Axios({
			method: 'GET',
			url: '/gallery',
		})
			.then((response) => {
				console.log(response);
				this.setState({
					galleryInfo: response.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Gallery of my life</h1>
				</header>
				<br />
				<p>Gallery goes here</p>
				<GalleryList galleryInfo={this.state.galleryInfo} />
			</div>
		);
	}
}

export default App;

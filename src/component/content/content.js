import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/action';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
	}
	onChangeHandler = (e) => {
		const input = e.target.value;
		const stateCopy = { ...this.state };
		stateCopy.search = input;
		this.setState({ search: stateCopy });
	};
	searchHandler = (e) => {
		e.preventDefault();
		this.props.fetchDatainit(this.state.search);
	};
	render() {
		let listofArtist = null;
		if (this.props.listsongs) {
			listofArtist = this.props.listsongs.map((result,index) => {
				return (
					<div className='card' style={{ width: '100%' }} key={index}>
						<img src={result.artworkUrl60} className='card-img-top' alt='artist-logo' />
						<div className='card-body'>
							<h5 className='card-title'>Artiste Name: {result.artistName}</h5>
							<p className='card-text'>
								{result.description }
							</p>
						</div>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item'>collection Name :  {result.collectionName}</li>
							<li className='list-group-item'>collection ExplicitnessDapibus : {result.collectionExplicitness}</li>
							<li className='list-group-item'>collection Price : {result.currency} {result.collectionPrice} </li>
                            <li className='list-group-item'>country : {result.country}</li>
                            <li className='list-group-item'>primary GenreName : {result.primaryGenreName}</li>
                            <li className='list-group-item'>releaseDate : {new Date(result.releaseDate).toLocaleDateString()}</li>
                            <li className='list-group-item'>trackCount : {result.trackCount}</li>
                            <li className='list-group-item'>wrapperType : {result.wrapperType}</li>
                            <li className='list-group-item'>copyright : {result.copyright}</li>
                        </ul>
						<div className='card-body'>
							<a href={result.collectionViewUrl} className='card-link'>
                                collection ViewUrl
							</a>
							<a href={result.previewUrl} className='card-link'>
                                previewUrl
							</a>
						</div>
					</div>
				);
			});
		}

		return (
			<div className='row mb-5'>
				<div className='col-lg-8 mx-auto'>
					<h5 className='font-weight-light mb-4 font-italic text-white'>Search For Artiste & Latest Songs </h5>
					<div className='bg-white p-5 rounded shadow'>
						<form>
							<div className='row mb-4'>
								<div className='form-group col-md-9'>
									<input
										id='exampleFormControlInput5'
										type='search'
										placeholder='What Songs are you searching for?'
										className='form-control form-control-underlined'
										onChange={this.onChangeHandler}
									/>
								</div>
								<div className='form-group col-md-3'>
									<button
										type='submit'
										onClick={this.searchHandler}
										className='btn btn-primary rounded-pill btn-block shadow-sm'
									>
										Search
									</button>
								</div>
							</div>
							<div className='row'>
								<div className='form-group col-md-3 col-lg-12'>{listofArtist}</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
const mapToStateProps = (state) => {
	return {
		listsongs: state.songs,
		loading: state.loading
	};
};
const mapToStateDispatch = (dispatch) => {
	return {
		fetchDatainit: (data) => dispatch(action.searchStore(data))
	};
};
export default connect(mapToStateProps, mapToStateDispatch)(Content);

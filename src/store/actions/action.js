import * as actionType from './actionType';
import axios from 'axios';

export const searchSuccess = (songs) => {
    return{
        type: actionType.SEARCH_SUCCESS,
        songs: songs
    };
};

export const searchFail = error => {
    return{
        type: actionType.SEARCH_FAIL,
        error: error
    };
};

export const searchStart = () => {
    return{
        type:actionType.SEARCH_START
    };
};

export const searchStore = (data) => {
    return dispatch => {
        dispatch(searchStart());
        axios.post('https://itunes.apple.com/search?term=' + data)
        .then(response =>{
            dispatch(searchSuccess(response.data.results))
        }).catch(error=>{
            dispatch(searchFail(error));
            //
        })
    };
};
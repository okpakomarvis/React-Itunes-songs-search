import * as actionType from '../actions/actionType';

const initializeState = {
    songs: [],
    loading:false,
    error:[]

};

const reducer = (state = initializeState, action) => {
    switch(action.type){
        case actionType.SEARCH_START :
            return{
                ...state,
                loading:true
            };
        case actionType.SEARCH_SUCCESS :
            return{
                ...state,
                loading: false,
                songs: action.songs
            };
        case actionType.SEARCH_FAIL :
            return {
                ...state,
                loading: false,
                error: action.error
            };
        
        default:
            return state;
    }
};

export default reducer

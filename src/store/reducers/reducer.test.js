import reducer from './reducer';
import * as actionType from '../actions/actionType';


describe(' Reducer ', ()=> {
    it('should return initial state', ()=>{
        expect(reducer(undefined, {})).toEqual({
            songs:[],
            error: [],
            loading: false
        });
    });
    it('should store list of artiste un pon search ', ()=>{
        expect(reducer({
            songs:[],
            error: [],
            loading: false
        }, { 
            type: actionType.SEARCH_SUCCESS,
            songs: ['some-data'],
        })).toEqual({
            songs: ['some-data'],
            error: [],
            loading: false,
        })
    });
})
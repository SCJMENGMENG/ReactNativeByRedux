import {combineReducers} from 'redux';
import slide from './slideReducers';

const rootReducer = combineReducers({
    slide:slide,
})

export default rootReducer;
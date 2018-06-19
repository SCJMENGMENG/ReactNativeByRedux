import *as types from '../constants/setting';

const initialState = {
    num:0,
};

export default function slide(state=initialState,action) {

    switch (action.type){
        case types.LEFTSLIDE:
            return {
                ...state,
                num:state.num - 1,
            }
            break;
        case types.RIGHTSLIDE:
            return {
                ...state,
                 num:state.num +1,
            }
            break;
        default:
            return state;
    }
}
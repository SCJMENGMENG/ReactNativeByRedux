import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWidthMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function ConfigureStore(initialState) {
    const store = createStoreWidthMiddleware(rootReducer,initialState);
    return store;
}
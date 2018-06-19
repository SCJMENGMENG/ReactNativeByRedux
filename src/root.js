import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import {AppNavigator} from './navigators/navigators';

const store = configureStore();

export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeByRedux',() => Root)
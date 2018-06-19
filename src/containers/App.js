import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Keyboard,
    Animated,
    TextInput,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import *as slideAction from '../action/action';

import NavigationBar from '../navigators/navigationBar';

class App extends Component {

    _rightNavClick() {

        this.props.navigation.navigate('DetailPage')
    }

    render() {

        const {num, leftSlideFn, rightSlideFn} = this.props;
        return (
            <View style={{flex: 1}}>
                <NavigationBar title={'首页'}
                               rightTitle={'去看图文详情'}
                               rightAction={this._rightNavClick.bind(this)}
                />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>这是首页</Text>
                    <Text onPress={rightSlideFn}>点我 +</Text>
                    <Text>{num}</Text>
                    <Text onPress={leftSlideFn}>点我 -</Text>
                </View>
            </View>
        )
    }
}

export default connect(
    (state) => ({
        num: state.slide.num,
    }),
    (dispatch => ({
        leftSlideFn: () => dispatch(slideAction.leftSlide()),
        rightSlideFn: () => dispatch(slideAction.rightSlide()),
    }))
)(App)
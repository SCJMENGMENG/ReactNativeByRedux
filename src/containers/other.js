import React,{Component} from 'react';
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

class Other extends Component{

    navigateClick(){

        this.props.navigation.navigate('otherDetailPage')
    }

    render(){

        const {num,leftSlideFn,rightSlideFn} = this.props;
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>框架搭建</Text>
                <Text onPress={rightSlideFn}>点我 +</Text>
                <Text>{num}</Text>
                <Text onPress={leftSlideFn}>点我 -</Text>
                <Text onPress={this.navigateClick.bind(this)}>点我跳转</Text>
            </View>
        )
    }
}

export default connect(
    (state) => ({
        num:state.slide.num,
    }),
    (dispatch => ({
        leftSlideFn:() => dispatch(slideAction.leftSlide()),
        rightSlideFn:() => dispatch(slideAction.rightSlide()),
    }))
)(Other)
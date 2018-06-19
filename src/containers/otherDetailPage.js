import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';

import indicate from '../ImageSource/indicate.png';

export default class otherDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotationAnims: new Animated.Value(0),
            isOpen: true,
        }
    }

    openOrClosePanel() {
        if (this.state.isOpen) {
            this.openPanel();
        } else {
            this.closePanel();
        }
    }

    openPanel() {
        Animated.timing(
            this.state.rotationAnims,
            {
                toValue: 0.5,
                duration: 300,
                easing: Easing.linear,
            },
        ).start();
        this.setState({
            isOpen: false,
        })
    }

    closePanel() {
        Animated.timing(
            this.state.rotationAnims,
            {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
            },
        ).start();
        this.setState({
            isOpen: true,
        })
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'green',
                flexDirection: 'column',
                alignItems:'flex-start',
            }}>
                <Text style={{
                    color: 'white',
                }}>信息</Text>
                <View style={{
                    marginTop: 100,
                    marginLeft: 100,
                }}>
                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'white',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,
                        }}
                        onPress={() => {
                            this.openOrClosePanel();
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            marginRight:5
                        }}>点我呀</Text>
                        <Animated.Image
                            source={indicate}
                            style={{
                                width: 20,
                                height: 10,
                                transform: [{
                                    rotateZ: this.state.rotationAnims.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg'],
                                    }),
                                }],
                            }}
                        />
                    </TouchableOpacity>
                    {this.state.isOpen
                        ?
                        <View style={{backgroundColor:'white',height:100}}/>
                        :
                        null
                    }
                </View>
            </View>
        )
    }
}
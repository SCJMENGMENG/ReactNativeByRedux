import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import App from '../containers/App';
import Other from '../containers/other';

export default class TabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home',
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab == 'home'}
                        title='首页'
                        titleStyle={{
                            backgroundColor:'#ffffff',
                            fontSize:14,
                        }}
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={()=><Icon name={'ios-home'} size={30} color={'gray'}/>}
                        renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'red'}/>}
                        onPress={() =>this.setState({selectedTab:'home'})}
                    >
                        <App {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab == 'other'}
                        title='其他'
                        titleStyle={{
                            backgroundColor:'#ffffff',
                            fontSize:14,
                        }}
                        selectedTitleStyle={{
                            color:'red'
                        }}
                        renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                        renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'red'}/>}
                        onPress={() =>this.setState({selectedTab:'other'})}
                    >
                        <Other {...this.props}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
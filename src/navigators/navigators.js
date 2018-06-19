import React from 'react';
import {StackNavigator} from 'react-navigation';

import TabBar from '../tabBar/tabBar';
import DetailPage from '../containers/detailPage';
import otherDetailPage from '../containers/otherDetailPage';

export const AppNavigator = StackNavigator({
    TabBar:{
        screen:TabBar,
        navigationOptions: {
            header: null,
            headerBackTitle: null
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            header: null,
            headerBackTitle: null
        }
    },
    otherDetailPage:{
        screen:otherDetailPage,
        navigationOptions:{
            headerTitle:"信息",
        }
    }
},{
    mode:'card',
    headerMode:'float',
    initialRouteName:'TabBar',
});
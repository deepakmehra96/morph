import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import Main from '../Main';
import Bookings from '../Bookings';
import Favourite from '../Favourite';
import Accounts from '../Accounts';

const TabIcon = ({ activeImage, style }) => {
    let icon = activeImage

    return (
        <View style={style}>
            <Image source={icon} style={styles.imageMain} />
        </View>)
}



const Tabs = createBottomTabNavigator({

    Home: {
        screen: Main,
        navigationOptions: {
            title: '',
            tabBarIcon: props => <TabIcon
                {...props}
                activeImage={require('../../assets/home.png')}
                style={styles.iconMain}
            />
        }
    },
    Search: {
        screen: Bookings,
        navigationOptions: {
            title: '',
            tabBarIcon: props => <TabIcon
                {...props}
                activeImage={require('../../assets/booking.png')}
                style={styles.iconMain}
            />
        }
    },
    Support: {
        screen: Favourite,
        navigationOptions: {
            title: '',
            tabBarIcon: props => <TabIcon
                {...props}
                activeImage={require('../../assets/fav.png')}
                style={styles.iconHeart}
            />
        }
    },
    Profile: {
        screen: Accounts,
        navigationOptions: {
            title: '',
            tabBarIcon: props => <TabIcon
                activeImage={require('../../assets/account.png')}
                style={styles.iconMenu}
            />
        }
    }
}, {
        tabBarOptions: {
            style: {
                height: 60,
                paddingTop: 20,
                backgroundColor: '#4d32b0'
            },
        }
    });

const LoggedinTabs = createStackNavigator({ LoggedinTabs: Tabs }, { headerMode: true })

LoggedinTabs.navigationOptions = {
    header: null
}
export default LoggedinTabs

const styles = StyleSheet.create({
    imageMain: {
        height: '100%',
        width: '100%'
    },
    iconMain: {
        height: 18,
        width: 18
    },
    iconHeart: {
        height: 18,
        width: 22
    },
    iconMenu: {
        height: 18,
        width: 20
    }
})
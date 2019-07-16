import React from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
import { whiteColor, fontXL } from '../../components/constant';
import ListItem from '../../components/ListItem.js';
import LoggedinTabs from '../FooterTab.js';
import Main from '../Main';
import Bookings from '../Bookings';
import Favourite from '../Favourite';
import Accounts from '.';
var { height, width } = Dimensions.get('window')

class UserLocation extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.fullScreen}>
                <BackgroundContent />
                <View style={styles.upperCon}>
                    <Header source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation}/>
                    <BackgroundText textConatiner={{ top: "30%" }} showImage={false} textHeading="Location" />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <ScrollView>
                            <TouchableOpacity>
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="Home"
                                />
                            </TouchableOpacity>
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Work"
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Parent"
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="New Loaction..."
                            />
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(UserLocation)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
    },
    upperCon: {
        marginTop: 22,
    },
    mainContainer: {
        height: height,
        justifyContent: 'flex-end'
    },
    innerContainer: {
        backgroundColor: '#fff',
        height: height - 50
    },
    listStyle:{
        paddingLeft:20
    }
})

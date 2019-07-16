import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
import { whiteColor, fontXL } from '../../components/constant';
import ListItem from '../../components/ListItem.js';
import ActivationCode from '../Auth/ActivationCode';
import Login from '../Auth/Login';
var { height, width } = Dimensions.get('window')


class Accounts extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
        };
    }

    handleLocation() {
        this.props.navigation.navigate("UserLocation")
    }
    render() {
        return (
            <SafeAreaView style={styles.fullScreen}>
                <BackgroundContent />
                <View style={styles.upperCon}>
                    <BackgroundText textConatiner={{ top: "30%" }} showImage={false} textHeading="A C C O U N T   &   S E T T I N G" />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <ScrollView>
                            <TouchableOpacity onPress={() => this.handleLocation()}>
                                <ListItem
                                    iconLeftStyle={styles.iconOutLoaction}
                                    heading="Locations"
                                    iconLeft={require('../../assets/location.png')}
                                    iconRight={require('../../assets/arrow.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handlePayment()}>
                                <ListItem
                                    heading="Payments"
                                    iconLeftStyle={styles.iconOut}
                                    iconLeft={require('../../assets/card.png')}
                                    iconRight={require('../../assets/arrow.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleCard()}>
                                <ListItem
                                    heading="Credits"
                                    iconLeftStyle={styles.iconOutCredits}
                                    iconLeft={require('../../assets/dollar.png')}
                                    iconRight={require('../../assets/arrow.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleNotes()}>
                                <ListItem
                                    heading="Notes"
                                    iconLeftStyle={styles.iconOutNotes}
                                    iconLeft={require('../../assets/notes.png')}
                                    iconRight={require('../../assets/arrow.png')}
                                />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(Accounts)

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
    iconOutLoaction: {
        marginLeft: 5
    },
    iconOut: {
        height: 27,
        width: 35,
    },
    iconOutCredits: {
        height: 22,
        width: 36,
    },
    iconOutNotes: {
        height: 30,
        width: 30,
    }
})

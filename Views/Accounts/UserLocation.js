import React from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem.js';
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
                    <BackgroundText textConatiner={{ top: "30%" }} showImage={false} textHeading="LOCATION" />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <ScrollView>
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Home" 
                                bottomText="10 Down Street"
                                iconRight={require('../../assets/delete.png')}
                                iconRightStyle={styles.iconRight}
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Work"
                                bottomText="10 Down Street"
                                iconRight={require('../../assets/delete.png')}
                                iconRightStyle={styles.iconRight}
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Parent"
                                bottomText="10 Down Street"
                                iconRight={require('../../assets/delete.png')}
                                iconRightStyle={styles.iconRight}
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="New Loaction..."
                                bottomText="10 Down Street"
                                iconRight={require('../../assets/plus.png')}
                                iconRightStyle={styles.iconRightPlus}
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
        paddingLeft:40
    },
    iconRight:{
        width:16,
        height:20
    },
    iconRightPlus:{
        width:20,
        height:20
    }
})

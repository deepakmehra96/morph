import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
import { whiteColor, fontXL } from '../../components/constant';
import ListItem from '../../components/ListItem.js';
var { height, width } = Dimensions.get('window')

class UserPayment extends React.Component {
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
                            <TouchableOpacity onPress={() => this.handleSubmit()}>
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="Home"
                                    iconRight={require('../../assets/arrow.png')}
                                />
                            </TouchableOpacity>
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Work"
                                iconRight={require('../../assets/arrow.png')}
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="Parent"
                                iconRight={require('../../assets/arrow.png')}
                            />
                            <ListItem
                                listStyle={styles.listStyle}
                                heading="New Loaction..."
                                iconRight={require('../../assets/arrow.png')}
                            />
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(UserPayment )

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

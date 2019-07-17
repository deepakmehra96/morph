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
                    <Header source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation} />
                    <BackgroundText textConatiner={{ top: "30%" }} showImage={false} textHeading="PAYMENT" />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <ScrollView>
                            <View style={styles.innerContentScroll}>
                                <View style={styles.textOutMain}>
                                    <Text style={styles.textMain}>PAYMENT METHOD</Text>
                                </View>
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="Card ending in ****1234 *"
                                    iconRight={require('../../assets/delete.png')}
                                    iconRightStyle={styles.iconRight}
                                />
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="New payment method..."
                                    iconRight={require('../../assets/plus.png')}
                                    iconRightStyle={styles.iconRightPlus}
                                />
                                <View style={styles.textOutMain}>
                                    <Text style={styles.textMain}>TRANSACTIONS</Text>
                                </View>
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="£35"
                                    bottomText="19 May 2019 12:23"
                                    iconRight={require('../../assets/arrow.png')}
                                />
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="1 Credit"
                                    bottomText="19 May 2019 12:23"
                                    iconRight={require('../../assets/arrow.png')}
                                />
                                <ListItem
                                    listStyle={styles.listStyle}
                                    heading="£35"
                                    bottomText="19 May 2019 12:23"
                                    iconRight={require('../../assets/arrow.png')}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(UserPayment)

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
        height: height - 50,
    },
    listStyle: {
        paddingLeft: 40
    },
    textOutMain: {
        justifyContent: 'center',
        height: 80,
        borderBottomWidth: 1,
        borderColor: '#4A0BAF',
    },
    textMain: {
        color: '#4F4F4F',
        fontSize: fontXL,
        letterSpacing: 2,
        marginLeft: 40,
    },
    iconRight: {
        width: 16,
        height: 20
    },
    iconRightPlus: {
        width: 20,
        height: 20
    },
    innerContentScroll: {
        marginBottom: 220,
    }
})

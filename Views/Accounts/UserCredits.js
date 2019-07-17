import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem.js';
import { fontXL, whiteColor, fontLarge } from '../../components/constant';
var { height, width } = Dimensions.get('window')

class UserCredits extends React.Component {
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
                    <BackgroundText textConatiner={{ top: "30%" }} showImage={false} textHeading="CREDITS" />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <ScrollView>
                            <View style={styles.innerContentScroll}>
                                <View style={styles.textOutMain}>
                                    <Text style={styles.textMain}>CURRENT CREDITS</Text>
                                    <Text style={styles.textCredits}>12</Text>
                                </View>
                                <View style={[styles.flexRow, styles.mainCon]}>
                                    <View style={styles.credits}>
                                        <Text style={styles.textMainCredits}>10 Credits</Text> 
                                    </View>
                                    <View style={[styles.flexRow, styles.amount]}>
                                        <View >
                                            <Text style={styles.textMainCredits}>£1000</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={styles.btnStyles}>
                                                <Text style={styles.btnText}>BUY</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, styles.mainCon]}>
                                    <View style={styles.credits}>
                                        <Text style={styles.textMainCredits}>10 Credits</Text> 
                                    </View>
                                    <View style={[styles.flexRow, styles.amount]}>
                                        <View >
                                            <Text style={styles.textMainCredits}>£1000</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={styles.btnStyles}>
                                                <Text style={styles.btnText}>BUY</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, styles.mainCon]}>
                                    <View style={styles.credits}>
                                        <Text style={styles.textMainCredits}>10 Credits</Text> 
                                    </View>
                                    <View style={[styles.flexRow, styles.amount]}>
                                        <View >
                                            <Text style={styles.textMainCredits}>£1000</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={styles.btnStyles}>
                                                <Text style={styles.btnText}>BUY</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(UserCredits)

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
    innerContentScroll: {
        marginBottom: 220,
    },
    textCredits:{
        color: '#4F4F4F',
        fontSize: fontXL,
        letterSpacing: 2,
        fontWeight:'bold',
        position:'absolute',
        right:40
    },
    flexRow:{
        flexDirection:'row',
    },
    mainCon:{
        height:80,
    },
    credits:{
        width:'50%',
        justifyContent:'center',
        paddingLeft:40
    },
    amount:{
        width:'50%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    btnStyles:{
        height:35,
        width:70,
        backgroundColor:'#520CC3',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30
    },
    btnText:{
        color:whiteColor
    },
    textMainCredits:{
        fontSize:fontLarge,
        letterSpacing:2,
        color: '#A1A1A1',
        fontWeight:'500'
    }
})

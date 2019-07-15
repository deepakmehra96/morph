import React from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { fontSmall, errorColor, whiteColor, fontMedium } from '../../components/constant';
import ButtonMain from '../../components/ButtonMain';
import BackgroundContent from '../../components/BackgroundContent';
import BackgroundText from '../../components/BackgroundText';
var { height, width } = Dimensions.get('window')

class Location extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        this.state = {
            location: '',
            errors: ''
        };
    }

    handleChange(event) {
        let { location } = this.state
        location = event
        this.setState({ location, errors: '' })
    }

    handleSubmit() {
        let { location } = this.state
        if (location.length == 0) {
            this.setState({ errors: 'location is required' })
            return
        }
        location = ''
        this.setState({ location })
        this.props.navigation.navigate('Login')
    }

    render() {
        let { location, errors } = this.state
        return (
            <View style={styles.fullScreen}>
                <BackgroundContent />
                <Header source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation} />
                <View style={styles.mainContainer}>
                    <BackgroundText textHeading="L O C A T I O N" />
                    <Text style={styles.textBottom}>Find the default location you wish to exercise</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.textBoxOut}>
                            <TextBox
                                mode='outline'
                                placeholder="Postcode or address"
                                onChangeText={this.handleChange.bind(this)}
                                value={location}
                            />
                            <Text style={styles.errorMsgText}>{errors}</Text>
                        </View>
                        <View>
                            <Text style={styles.textBottom}>
                                Or
                            </Text>
                        </View>
                        <View style={styles.buttonOut}>
                            <ButtonMain
                                onPress={() => this.handleSubmit()}
                                isColored={false}
                                label='CURRENT LOCATION'
                            />
                        </View>
                    </View>
                </View>
             
            </View>
        )
    }
}
export default connect(state => state)(Location)

const styles = StyleSheet.create({
    fullScreen: {
        height: height
    },
    mainContainer: {
        marginTop: 52,
        alignItems: 'center',
    },
    formContainer: {
        marginTop: 55,
        width: width - 70,
    },
    textBoxOut: {
        marginTop: 20
    },
    errorMsgText: {
        fontSize: fontSmall,
        color: errorColor
    },
    buttonOut: {
        marginTop:25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBottom: {
        marginTop: 15,
        color: whiteColor,
        textAlign: 'center',
        fontSize:fontMedium,
    },
})
import React from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { fontSmall, errorColor, whiteColor } from '../../components/constant';
import { ActivationCodeApi } from '../../redux/actions';
import ButtonMain from '../../components/ButtonMain';
import BackgroundContent from '../../components/BackgroundContent';
import BackgroundText from '../../components/BackgroundText';
var { height, width } = Dimensions.get('window')

class ActivationCode extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super()
        this.state = {
            OTP: '',
            errors: ''
        };
    }

    handleChange(event) {
        let { OTP } = this.state
        OTP = event
        this.setState({ OTP, errors: '' })
    }

    handleSubmit() {
        let { OTP } = this.state
        if (OTP.length == 0) {
            this.setState({ errors: 'OTP is required' })
            return
        }
        this.props.dispatch(ActivationCodeApi(OTP))
        OTP = ''
        this.setState({ OTP })
        this.props.navigation.navigate('Location')
    }

    render() {
        let { OTP, errors } = this.state
        return (
            <View style={styles.fullScreen}>
                <BackgroundContent />
                <Header source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation} />
                <View style={styles.mainContainer}>
                    <BackgroundText textHeading="A C T I V A T E" />
                    <View style={styles.formContainer}>
                        <View style={styles.textBoxOut}>
                            <TextBox
                                mode='outline'
                                placeholder="Activation Code"
                                onChangeText={this.handleChange.bind(this)}
                                value={OTP}
                            />
                            <Text style={styles.errorMsgText}>{errors}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonOut}>
                    <ButtonMain
                        onPress={() => this.handleSubmit()}
                        isColored={false}
                        label='C O N T I N U E'
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textBottom}>Didn’t receive the code? </Text>
                        <TouchableOpacity style={{ borderBottomColor: whiteColor, borderBottomWidth: 1 }}>
                            <Text style={styles.textBottom}> Resend it.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default connect(state => state)(ActivationCode)

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
        position: 'absolute',
        bottom: 25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBottom: {
        marginTop: 15,
        color: whiteColor,
        textAlign: 'center',
    },
})
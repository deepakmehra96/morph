import React from 'react';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'
import microValidator from 'micro-validator'
import is from 'is_js'
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { fontSmall, errorColor, whiteColor, fontXXL, fontMedium } from '../../components/constant';
import { SignUpApi } from '../../redux/actions';
import ButtonMain from '../../components/ButtonMain';
import BackgroundContent from '../../components/BackgroundContent';
import BackgroundText from '../../components/BackgroundText';
import { CheckBox } from 'react-native-elements'
import MapMain from '../Map';
var { height, width } = Dimensions.get('window')


let validationSchema = {
    number: {
        required: {
            errorMsg: 'Number is required'
        },
    },
    street: {
        required: {
            errorMsg: 'Street is required'
        },
    },
    town: {
        required: {
            errorMsg: 'Town is required'
        },
    },
    postCode:{
        required: {
            errorMsg: 'Post Code is required'
        },
    }
}

class ConfirmLocation extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            checked: true,
            userData: {
                number: '',
                street: '',
                town: '',
                postCode:''
            },
            errors: {},
            keyboardAvoidEnable: false,
            checked: false
        };
    }
    handleChangeText(key, event) {
        let { userData } = this.state
        userData[key] = event
        this.setState({ userData, errors: {} })
    }

    handleSubmit() {
        let { userData } = this.state
        const errors = microValidator.validate(validationSchema, userData)
        if (!is.empty(errors)) {
            this.setState({ errors })
            return
        }
        let data = {
            number: userData.number,
            postCode: userData.postCode,
            street: userData.street,
            town: userData.town,
        }
        this.props.dispatch(SignUpApi(data))

        //empty textBoxes
        userData.number = ''
        userData.postCode = ''
        userData.street = ''
        userData.town = ''
        this.setState({ userData })
        this.props.navigation.navigate("LoggedinTabs")
    }

    handleCheck() {
        let { checked } = this.state
        this.setState({ checked: !checked })
    }

    render() {
        let { userData, errors, checked } = this.state
        return (
            <ScrollView>
                <View style={{ height: height }}>
                    <BackgroundContent />
                    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : ''}>
                    <Header  label="CONFIRM LOCATION" source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation}/>
                        <View style={styles.mainContainer}>
                            <BackgroundText textConatiner={{ opacity: 0}}/>
                            <View style={{position:"absolute", top:52}}>
                                <View style={{height:180, width:width, zIndex:999}}>
                                    <MapMain />
                                </View>
                                {/* <Image source={require('../../assets/map.png')} style={{ height : 180, width:width}}/>  */}
                            </View>
                            <View style={styles.formContainer}>
                                <View style={styles.textBoxOut}>
                                    <TextBox
                                        mode='outline'
                                        placeholder="Number"
                                        onChangeText={this.handleChangeText.bind(this, 'number')}
                                        value={userData.number}
                                        onFocus={() => this.setState({ keyboardAvoidEnable: false })}
                                    />
                                    <Text style={styles.errorMsgText}>{errors.number && errors.number[0]}</Text>
                                </View>
                                <View style={styles.textBoxOut}>
                                    <TextBox
                                        mode='outline'
                                        placeholder="Street"
                                        onChangeText={this.handleChangeText.bind(this, 'street')}
                                        value={userData.street}
                                        onFocus={() => this.setState({ keyboardAvoidEnable: true })}
                                    />
                                    <Text style={styles.errorMsgText}>{errors.street && errors.street[0]}</Text>
                                </View>
                                <View style={styles.textBoxOut}>
                                    <TextBox
                                        mode='outline'
                                        placeholder="Town"
                                        secureTextEntry={true}
                                        onChangeText={this.handleChangeText.bind(this, 'town')}
                                        value={userData.town}
                                        onFocus={() => this.setState({ keyboardAvoidEnable: true })}
                                    />
                                    <Text style={styles.errorMsgText}>{errors.town && errors.town[0]}</Text>
                                </View>
                                <View style={styles.textBoxOut}>
                                    <TextBox
                                        mode='outline'
                                        placeholder="Postcode"
                                        secureTextEntry={true}
                                        onChangeText={this.handleChangeText.bind(this, 'postCode')}
                                        value={userData.postCode}
                                        onFocus={() => this.setState({ keyboardAvoidEnable: true })}
                                    />
                                    <Text style={styles.errorMsgText}>{errors.town && errors.postCode[0]}</Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.buttonOut}>
                    <ButtonMain
                        onPress={() => this.handleSubmit()}
                        isColored={false}
                        label='CONTINUE'
                    />
                </View>
            </ScrollView>
        )
    }
}
export default connect(state => state)(ConfirmLocation)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
        width: width,
        position: 'relative',
    },
    mainContainer: {
        marginTop: 45,
        alignItems: 'center',
    },
    formContainer: {
        marginTop: 140,
        width: width - 70,
    },
    textBoxOut: {
        marginTop: 5,
    },
    textOut: {
        paddingTop: 5,
        padding: 15,
        paddingRight: 35,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center',
        position: 'relative'
    },
    textMain: {
        color: whiteColor,
        fontSize: fontMedium,
    },
    checkBoxStyle: {
        position: 'absolute',
        right: 10,
        color: whiteColor,
        borderColor: whiteColor
    },
    buttonOut: {
        position: 'absolute',
        bottom: 25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMsgText: {
        fontSize: fontSmall,
        color: errorColor
    },

    fullScreen: {
        height: height,
    },
    mainCon: {
        marginTop: 52,
        alignItems: 'center',
        position: "relative"
    },
    backImageOut: {
        height: 110,
        width: width,
    },
    logoMain: {
        height: 25,
        width: 135,
        position: 'absolute',
        top: '50%'
    },

    textHeading: {
        color: whiteColor,
        fontSize: fontXXL
    },
    textBottom: {
        marginTop: 15,
        color: whiteColor,
        textAlign: 'center',
    },
    flexRow: {
        flexDirection: "row"
    },

})
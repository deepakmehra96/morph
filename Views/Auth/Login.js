import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux'
import microValidator from 'micro-validator'
import is from 'is_js'
import { fontSmall, errorColor, fontLarge, whiteColor } from '../../components/constant';
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { Button } from 'react-native-paper';
import ButtonMain from '../../components/ButtonMain';
import { LoginApi } from '../../redux/actions';
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
var { height, width } = Dimensions.get('window')

let validationSchema = {
    email: {
        required: {
            errorMsg: 'Email is required'
        },
        email: {
            errorMsg: 'Email is not valid'
        }
    },
    password: {
        required: {
            errorMsg: 'Password is required'
        },
    },
}

class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            checked: true,
            userData: {
                email: '',
                password: ''
            },
            errors: {}
        };
    }
    handleChange(key, event) {
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
            email: userData.email,
            password: userData.password,
        }
        this.props.dispatch(LoginApi(data))

        //empty textBoxes
        userData.email = '',
            userData.password = '',
            this.setState({ userData })
    }

    render() {
        let { userData, errors } = this.state
        return (
            <View style={styles.fullScreen}>
                <BackgroundContent />
                <View style={styles.mainContainer}>
                    <BackgroundText textHeading="S I G N  I N" />
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'position' : ''}
                    >
                        <View style={styles.formContainer}>
                            <View style={styles.textBoxOut}>
                                <TextBox
                                    mode='outline'
                                    placeholder="Email"
                                    onChangeText={this.handleChange.bind(this, 'email')}
                                    value={userData.email}
                                />
                                <Text style={styles.errorMsgText}>{errors.email && errors.email[0]}</Text>
                            </View>
                            <View style={styles.textBoxOut}>
                                <TextBox
                                    mode='outline'
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={this.handleChange.bind(this, 'password')}
                                    value={userData.password}
                                />
                                <Text style={styles.errorMsgText}>{errors.password && errors.password[0]}</Text>
                            </View>

                        </View>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.buttonOut}>
                    <ButtonMain
                        onPress={() => this.handleSubmit()}
                        isColored={false}
                        label='C O N T I N U E'
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textBottom}>Not signed up yet?</Text>
                        <TouchableOpacity style={{ borderBottomColor: whiteColor, borderBottomWidth: 1 }} onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.textBottom}>  Sign up here </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default connect(state => state)(Login)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
    },
    mainContainer: {
        marginTop: 52,
        alignItems: 'center',
    },
    formContainer: {
        width: width - 80,
        height: height - 350,
        justifyContent: 'center'
    },
    textBoxOut: {
        marginTop: 25,
    },
    errorMsgText: {
        fontSize: fontLarge,
        color: errorColor
    },
    signUpTextOut: {
        marginTop: 15,
        alignItems: 'flex-end'
    },
    signUpText: {
        color: 'blue'
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
    }
})
import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux'
import microValidator from 'micro-validator'
import is from 'is_js'
import { fontSmall, errorColor } from '../../components/constant';
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { Button } from 'react-native-paper';
import ButtonMain from '../../components/ButtonMain';
import { LoginApi } from '../../redux/actions';
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
                <Header label="Login" />
                <View style={styles.mainContainer}>
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
                            <View style={styles.textBoxOut}>
                                <ButtonMain
                                    dark={true}
                                    onPress={() => this.handleSubmit()}
                                    mode="contained"
                                    label={'login'} />
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={styles.signUpTextOut}>
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }
}
export default connect(state => state)(Login)

const styles = StyleSheet.create({
    fullScreen: {
        height: height
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: width - 100,
    },
    textBoxOut: {
        marginTop: 20
    },
    errorMsgText: {
        fontSize: fontSmall,
        color: errorColor
    },
    signUpTextOut: {
        marginTop: 15,
        alignItems: 'flex-end'
    },
    signUpText: {
        color: 'blue'
    }
})
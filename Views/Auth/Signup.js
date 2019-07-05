import React from 'react';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux'
import microValidator from 'micro-validator'
import is from 'is_js'
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { Button } from 'react-native-paper';
import { fontSmall, errorColor } from '../../components/constant';
import { SignUpApi } from '../../redux/actions';
var { height, width } = Dimensions.get('window')


let validationSchema = {
    firstName: {
        required: {
            errorMsg: 'Name is required'
        },
    },
    lastName: {
        required: {
            errorMsg: 'Age is required'
        },
    },
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

class SignUp extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            checked: true,
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            errors: {}
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
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
        }
        this.props.dispatch(SignUpApi(data))

        //empty textBoxes
        userData.firstName = ''
        userData.lastName = ''
        userData.email = ''
        userData.password = ''
        this.setState({ userData })
        this.props.navigation.navigate("ActivationCode")
    }

    render() {
        let { userData, errors } = this.state
        return (
            <View style={styles.fullScreen}>
                <Header
                    label="Signup"
                    source={require('../../assets/back-btn.png')}
                    navigation={this.props.navigation} />
                <View style={styles.mainContainer}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'position' : ''}
                       >
                        <View style={styles.formContainer}>
                            <View style={styles.textBoxOut}>
                                <TextBox
                                    mode='outline'
                                    placeholder="First Name"
                                    onChangeText={this.handleChangeText.bind(this, 'firstName')}
                                    value={userData.firstName}
                                />
                                <Text style={styles.errorMsgText}>{errors.firstName && errors.firstName[0]}</Text>
                            </View>
                            <View style={styles.textBoxOut}>
                                <TextBox
                                    mode='outline'
                                    placeholder="Last Name"
                                    onChangeText={this.handleChangeText.bind(this, 'lastName')}
                                    value={userData.lastName}
                                />
                                <Text style={styles.errorMsgText}>{errors.lastName && errors.lastName[0]}</Text>
                            </View>
                            <View style={styles.textBoxOut}>
                                <TextBox
                                    mode='outline'
                                    placeholder="Email"
                                    onChangeText={this.handleChangeText.bind(this, 'email')}
                                    value={userData.email}
                                />
                                <Text style={styles.errorMsgText}>{errors.email && errors.email[0]}</Text>
                            </View>
                            <View style={styles.textBoxOut}>
                                <TextBox
                                    mode='outline'
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={this.handleChangeText.bind(this, 'password')}
                                    value={userData.password}
                                />
                                <Text style={styles.errorMsgText}>{errors.password && errors.password[0]}</Text>
                            </View>
                            <View style={styles.textBoxOut}>
                                <Button dark={true} onPress={() => this.handleSubmit()} mode="contained">
                                    SIGN UP
                            </Button>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }
}
export default connect(state => state)(SignUp)

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
    }
})
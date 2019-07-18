import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
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
    postCode: {
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
            userData: {
                number: '',
                street: '',
                town: '',
                postCode: ''
            },
            errors: {},
            keyboardAvoidEnable: false,
            setDropDown: false,
            loactionArray: [{ data: '10 Downing Street, London, W1 ABC' },
            { data: '1 Belmont Road, London, SW4 00X' },
            { data: '1 Belmont Road, London, SW4 00X' },
            { data: '1 Belmont Road, London, SW4 00X' }
            ],
            selectedLocation: ''
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

    handleDropDownSelect() {
        let { setDropDown } = this.state
        this.setState({ setDropDown: !setDropDown })
    }

    getDropDown() {
        let { setDropDown, loactionArray } = this.state
        if (setDropDown) {
            return (
                <View style={{ width: width, alignItems: 'center', zIndex: 9999 }}>
                    <View style={{ height: 150, width: width - 60, position: 'absolute', top: 80, backgroundColor: whiteColor, zIndex: 9, }}>
                        <ScrollView>
                            {loactionArray.map((val, index) => {
                                console.log(val)
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.handleDisplayLocation(val.data)} style={{ height: 60, borderBottomColor: "#d1d1d1", borderBottomWidth: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#A1A1A1', fontSize: fontMedium }}>
                                            {val.data}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>

            )
        }
    }
    handleDisplayLocation(data) {
        this.setState({ selectedLocation: data, setDropDown: false })
    }

    handleDropDown() {
        let { selectedLocation } = this.state
        console.log(selectedLocation, "selectedLocation")
        if (selectedLocation == '') {
            return (
                <View style={{ position: 'absolute', top: 60, width: width, zIndex: 999, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.handleDropDownSelect()} style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', width: 150 }}>
                        <Text style={{ color: whiteColor, marginRight: 10 }}>Select a match</Text>
                        <Image style={{ height: 6, width: 10 }} source={require('../../assets/drop.png')} />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={{ position: 'absolute', top: 60, width: width, zIndex: 999, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.handleDropDownSelect()} style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <Text numberOfLines={1} style={{ color: whiteColor, marginRight: 10 }}>{selectedLocation}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    render() {
        let { userData, errors } = this.state
        return (
            <View style={{ height: height }}>
                <BackgroundContent />
                <ScrollView>
                    <View style={styles.scrolllContent}>
                        <Header label="CONFIRM LOCATION" source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation} />
                        {this.handleDropDown()}
                        {this.getDropDown()}
                        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : ''}>
                            <View style={styles.mainContainer}>
                                <BackgroundText textConatiner={{ opacity: 0 }} />
                                <View style={{ position: "absolute", top: 52 }}>
                                    <View style={{ height: 180, width: width, zIndex: 999 }}>
                                        <MapMain />
                                    </View>
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
                        <View style={styles.buttonOut}>
                            <ButtonMain
                                onPress={() => this.handleSubmit()}
                                isColored={false}
                                label='CONTINUE'
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
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
        marginTop: 15,
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
    scrolllContent: {
        marginBottom: 50
    }

})
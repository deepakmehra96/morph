import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image, SafeAreaView } from 'react-native';
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
                <View style={[styles.dropCon , Platform.OS == 'ios' && {zIndex:  9999 } ]}>
                    <View style={styles.dropContainerOut}>
                        <ScrollView contentContainerStyle={{zIndex:999999}}>
                            {loactionArray.map((val, index) => {
                                console.log(val)
                                return (
                                    <View>
                                        <TouchableOpacity key={index} onPress={() => this.handleDisplayLocation(val.data)} style={{ height: 60, borderBottomColor: "#d1d1d1", borderBottomWidth: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.textDropDownCon}>
                                                {val.data}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
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
        if (selectedLocation == '') {
            return (
                <View style={styles.dropDownTextCon}>
                    <TouchableOpacity onPress={() => this.handleDropDownSelect()} style={styles.dropDownMain}>
                        <Text style={styles.textMainDropDown}>Select a match</Text>
                        <Image style={styles.dropDownIcon} source={require('../../assets/drop.png')} />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={styles.dropDownTextCon}>
                    <TouchableOpacity onPress={() => this.handleDropDownSelect()} style={styles.dropDownMenuText}>
                        <Text numberOfLines={1} style={styles.textMainDropDown}>{selectedLocation}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    render() {
        let { userData, errors, setDropDown } = this.state
        return (
            <View style={styles.fullScreen}>
                <BackgroundContent />
                <SafeAreaView>
                    <ScrollView scrollEnabled={!setDropDown}>
                        <View style={styles.scrolllContent}>
                            <KeyboardAvoidingView behavior={'position'}>
                                <Header label="CONFIRM LOCATION" source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation} />
                                {this.handleDropDown()}
                                {this.getDropDown()}
                                <View style={styles.mainContainer}>
                                    <BackgroundText textConatiner={styles.noOpacity} />
                                    <View style={styles.mapPostion}>
                                        <View style={styles.mapOut}>
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
                                            />
                                            <Text style={styles.errorMsgText}>{errors.number && errors.number[0]}</Text>
                                        </View>
                                        <View style={styles.textBoxOut}>
                                            <TextBox
                                                mode='outline'
                                                placeholder="Street"
                                                onChangeText={this.handleChangeText.bind(this, 'street')}
                                                value={userData.street}
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
                </SafeAreaView>
            </View>
        )
    }
}
export default connect(state => state)(ConfirmLocation)

const styles = StyleSheet.create({

    fullScreen: {
        height: height,
    },
    mainContainer: {
        marginTop: 35,
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
        color: errorColor,
        letterSpacing:2,
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
    },
    dropCon: {
        width: width,
        alignItems: 'center',
        // zIndex: Platform.OS == 'ios' ? 9999 : 1,
    },
    dropContainerOut: {
        height: 150,
        width: width - 60,
        position: 'absolute',
        top: 70,
        backgroundColor: whiteColor,
        zIndex: 99999,
    },
    textDropDownCon: {
        color: '#A1A1A1',
        fontSize: fontMedium
    },
    dropDownTextCon: {
        position: 'absolute',
        top: 40,
        width: width,
        zIndex: 999,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textMainDropDown: {
        color: whiteColor,
        marginRight: 10
    },
    dropDownIcon: {
        height: 6,
        width: 10
    },
    noOpacity: {
        opacity: 0
    },
    mapPostion: {
        position: "absolute",
        top: 52
    },
    mapOut: {
        height: 180,
        width: width,
        zIndex: 0
    },
    dropDownMain:{ 
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 150 
    },
    dropDownMenuText:{ 
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%' 
    }
})
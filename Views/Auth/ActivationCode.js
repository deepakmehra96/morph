import React from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import Header from '../../components/Header';
import TextBox from '../../components/TextField.js';
import { Button } from 'react-native-paper';
import { fontSmall, errorColor } from '../../components/constant';
import { ActivationCodeApi } from '../../redux/actions';
var { height, width } = Dimensions.get('window')


let validationSchema = {
    OTP: {
        required: {
            errorMsg: 'OTP is required'
        },
    },
}
class ActivationCode extends React.Component{
    static navigationOptions= {
        header : null
    }
    
    constructor(){
        super()
        this.state = {
            OTP:'',
            errors:''
        };
    }

    handleChange(event) {
        let { OTP } = this.state
        OTP = event
        this.setState({ OTP, errors: ''})
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
    }

    render(){
        let { OTP, errors } = this.state
        return(
            <View style={styles.fullScreen}>
                <Header 
                    label="Activation Code"
                    navigation={this.props.navigation}
                    source={require('../../assets/back-btn.png')} />
                <View style={styles.mainContainer}>
                    <Text>Activate your account</Text>
                    <Text>An email with the activation code was sent</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.textBoxOut}>
                            <TextBox 
                                mode='outline'
                                placeholder="Email"
                                onChangeText={this.handleChange.bind(this)} 
                                value={OTP}
                                />
                            <Text style={styles.errorMsgText}>{errors}</Text>
                        </View>
                        <View style={styles.textBoxOut}>
                            <Button dark={true} mode="contained" onPress={() => this.handleSubmit()}>
                                Continue
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default connect(state => state)(ActivationCode)

const styles = StyleSheet.create({
    fullScreen:{
        height:height
    },
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    formContainer:{
        width:width-100,
    },
    textBoxOut:{
        marginTop:20
    },
    errorMsgText:{
        fontSize:fontSmall,
        color:errorColor
    }
})
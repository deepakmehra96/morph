import React from 'react';
import { StyleSheet, Text, View, TextInput , Dimensions, Platform } from 'react-native';
var { height, width } = Dimensions.get('window');
// import { TextField } from 'react-native-material-textfield';

class TextBox extends React.Component {
    constructor() {
        super()
    }
    onChange(event) {
        this.props.onChange(event)
    }
    render() {
        return (
            <View>
                {/* <TextField
                    lineWidth={0}
                    activeLineWidth={0}
                    label={this.props.label}
                    inputContainerPadding={1}
                    labelPadding={5}
                    labelHeight={10}
                    containerStyle={styles.borderMain}
                    labelFontSize={12}
                    titleFontSize={10}
                    /> */}
                <Text style={[styles.inputLable , this.props.inputStyle]}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType= {this.props.type}
                    style={styles.textField}
                    onChangeText={this.props.onChange}
                    value={this.props.value}
                    autoCapitalize = 'none'
                />
            </View>
        )
    }
}
export default TextBox;

const styles = StyleSheet.create({
    borderMain:{
        borderWidth:1, 
        borderRadius:8,
        borderColor: '#b0aeae', 
        padding:10,
    },
    inputLable: {
        color: '#467bdd',
        position: 'absolute',
        marginTop: 5,
        paddingLeft: 22,    
        fontSize: 12
    },
    textField: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        display: 'flex',
        paddingTop: 20,
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
        paddingLeft: 22,
        paddingRight: 22,
        fontSize: 12
    },

});

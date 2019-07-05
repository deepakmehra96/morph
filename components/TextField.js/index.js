import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextBox = props => {
    return <TextInput {...props} style={styles.textField} />
}

export default TextBox;

const styles = StyleSheet.create({
    textField: {
        width:'100%',
        backgroundColor:'#fff'
    },

});



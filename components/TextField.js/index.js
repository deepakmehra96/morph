import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { MKTextField } from 'react-native-material-kit';
import { fontXL, whiteColor, fontLarge } from '../constant';

const TextBox = props => {
    return (
        <MKTextField
            tintColor={whiteColor}
            highlightColor={whiteColor}
            textInputStyle={styles.textInput}
            style={styles.textField}
            floatingLabelEnabled={true}
            allowFontScaling={true}
            floatingLabelBottomMargin={32}
            floatingLabelFont={styles.label}
            placeholderTextColor={whiteColor}
            {...props}
        />
    )
}
export default TextBox;

const styles = StyleSheet.create({
    textField: {
        width: '100%',
    },
    label:{ 
        paddingLeft: 12, 
        fontSize: fontXL, 
        color: whiteColor 
    },
    textInput: {
        paddingLeft: 12,
        fontSize: fontLarge,
        color: whiteColor,
        paddingBottom: 10
    }

});

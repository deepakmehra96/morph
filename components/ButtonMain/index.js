import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonMain = props => {
    return <Button {...props}>{props.label}</Button>
}

export default ButtonMain;

const styles = StyleSheet.create({

});

import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { fontXL, whiteColor, fontLarge } from '../constant';

const ListItem = props => {
    return (
        <View style={[styles.listMain, props.listStyle]}>
            <View style={[styles.iconOut, props.iconLeftStyle]}>
                <Image style={styles.imageMain} source={props.iconLeft} />
            </View>
            <View style={styles.textOutMain}>
                <Text style={styles.textMain}>{props.heading}</Text>
            </View>
            <View style={styles.backArrow}>
                <Image style={styles.imageMain} source={props.iconRight} />
            </View>
        </View>
    )
}
export default ListItem;

const styles = StyleSheet.create({
    listMain: {
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft:60
    },
    iconOut: {
        height: 28,
        width: 20,
        position:"absolute",
        left:25,
    },
    imageMain: {
        height: '100%',
        width: '100%'
    },
    textOutMain: {
        justifyContent: 'center',
    },
    textMain: {
        color: '#A1A1A1',
        marginLeft: 30,
        fontSize: fontXL,
        letterSpacing: 2,
        fontWeight: '600'
    },
    backArrow: {
        height: 18,
        width: 10,
        position: 'absolute',
        right: 30,
    }
})
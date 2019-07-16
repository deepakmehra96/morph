import React from 'react';
import { View, Image, StyleSheet, Dimensions, ImageBackground, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { whiteColor, fontXXL } from '../constant';
var { height, width } = Dimensions.get('window')

const BackgroundText = props => {
    return (
        <View style={styles.mainCon}>
            <View style={styles.backImageOut}>
                <Image resizeMode="stretch" style={styles.imageMain} source={require('../../assets/LogoMain.png')} />
            </View>
            <View style={[styles.textConatiner, props.textConatiner]}>
                {
                    props.showImage ?
                        <View style={styles.logoMain}>
                            <Image resizeMode="stretch" style={styles.imageMain} source={require('../../assets/LogoWhite.png')} />
                        </View> : null
                }
                <View>
                    <Text style={styles.textHeading}>{props.textHeading}</Text>
                </View>
            </View>
        </View>
    )
}
export default BackgroundText

const styles = StyleSheet.create({
    mainCon: {
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
    },
    imageMain: {
        height: '100%',
        width: '100%'
    },
    textHeading: {
        marginTop: 30,
        color: whiteColor,
        fontSize: fontXXL
    },
    textConatiner: {
        position: 'absolute',
        top: '50%',
        alignItems: 'center',
    }
})
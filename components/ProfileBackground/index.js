import React from 'react';
import { StyleSheet, Dimensions, ImageBackground, View, Image, Text, SafeAreaView } from 'react-native';
import { whiteColor, fontXL, fontXXL } from '../constant';
var { height, width } = Dimensions.get('window')

const ProfileBackground = props => {
    return (
            <ImageBackground source={require('../../assets/profileBackGround.png')} style={styles.fullScreen}>
                <SafeAreaView style={{ height:'60%', justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.backImageOut}>
                        <Image resizeMode="contain" style={styles.imageMain} source={require('../../assets/LogoMain.png')} />
                    </View>
                    <View style={{ position:'absolute', alignItems:'center'}}>
                        <Text style={styles.textHeading}>{props.textHeading}</Text>
                    </View>
                </SafeAreaView>
                    {
                        props.imageMain ?
                            <View style={{ height: 110, width: 110, borderRadius: 60, overflow: 'hidden', borderWidth: 2, borderColor: whiteColor, position: 'absolute', top: 70 }}>
                                <Image style={styles.imageMain} source={props.imageMain} />
                            </View>
                            :
                            null
                    }
                    <View style={styles.contentOut}>
                        {props.content}
                    </View>
            </ImageBackground>
    )
}
export default ProfileBackground

const styles = StyleSheet.create({
    fullScreen: {
        width: width,
        zIndex: -1,
        height: height / 2,
        // paddingTop: '10%',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'absolute'
    },
    backImageOut: {
        height: 120,
        width: width,
        position: 'relative',
    },
    imageMain: {
        height: '100%',
        width: '100%'
    },
    contentOut: {
        borderTopWidth: 1,
        borderColor: '#9A73D8',
        justifyContent: 'center',
        height: 70,
        width: width,
        position: 'absolute',
        bottom: 0
    },
    textHeading: {
        color: whiteColor,
        fontSize: fontXXL,
        letterSpacing: 3,
        marginTop:35
    },
})
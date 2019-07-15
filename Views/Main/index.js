import React from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'
// import LinearGradient from 'react-native-linear-gradient';
import { fontMedium, fontLarge, whiteColor, fontXXL, fontXL, fontSmall } from '../../components/constant';
var { height, width } = Dimensions.get('window')


class Main extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            data: [
                { title: 'FAT LOSS', trainerCount: 28 },
                { title: 'MUSCLE BUILDING', trainerCount: 280 },
                { title: 'BETTER POSTURE', trainerCount: 2822 },
                { title: 'EMS', trainerCount: 28 }
            ]
        };
    }

    render() {
        let { data } = this.state
        return (
            <SafeAreaView style={styles.fullScreen}>
                <ScrollView>
                    <View style={styles.mainCon}>
                        <Text style={styles.headingMain}>HI USER, <Text style={styles.headingColor}>WELCOME BACK</Text></Text>
                        <Text style={styles.heading}>Your next booking is with <Text style={styles.headingColor}>Jodi</Text> on <Text style={styles.headingColor}>Sunday</Text></Text>
                        <View style={styles.listOut}>
                            {data.map((val, index) => {
                                return (
                                    <View key={index} style={styles.listView}>
                                        <View style={styles.textOutMain}>
                                            <Text style={styles.exerciseHeading}>
                                                {val.title}
                                            </Text>
                                            <View style={styles.trainerTextOut}>
                                                <View style={styles.groupMain}>
                                                    <Image style={styles.imageMain} source={require('../../assets/group.png')} />
                                                </View>
                                                <Text style={styles.trainerText}>
                                                    {val.trainerCount} Trainers available
                                            </Text>
                                            </View>
                                        </View>
                                        <View style={styles.imageContainer}>
                                            <View style={styles.imageOut}>
                                                <Image style={styles.imageMain} source={require('../../assets/exercise.png')} />
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}
export default connect(state => state)(Main)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
    },
    mainCon: {
        padding: 20,
        marginBottom: 50
    },
    headingMain: {
        letterSpacing: 3,
        fontSize: fontLarge
    },
    heading: {
        letterSpacing: 2,
        marginTop: 10,
        fontSize: fontMedium
    },
    headingColor: {
        color: "#743ecf"
    },
    listOut: {
        flexDirection: 'column',
        marginTop: 10
    },
    listView: {
        height: 100,
        backgroundColor: "#743ecf",
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15
    },
    textOutMain: {
        flexDirection: 'column',
        width: '70%',
        paddingLeft: width <= 320 ? 10 : 15
    },
    exerciseHeading: {
        color: whiteColor,
        letterSpacing: 3,
        fontSize: width <= 320 ? fontLarge : fontXXL
    },
    trainerText: {
        color: whiteColor,
        letterSpacing: 2,
        fontSize: width <= 320 ? fontSmall : fontMedium,
        marginLeft: 10
    },
    imageContainer: {
        width: '30%',
        alignItems: 'flex-end',
        paddingRight: width <= 320 ? 10 : 15
    },
    imageOut: {
        height: 70,
        width: 70,
        borderRadius: 50,
        overflow: 'hidden'
    },
    imageMain: {
        height: '100%',
        width: '100%'
    },
    trainerTextOut: {
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    groupMain: {
        height: 12,
        width: 14
    }
})
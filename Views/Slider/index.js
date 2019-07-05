import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Platform } from 'react-native';
let { height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';

class SliderScreens extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
    }
   
    render() {
        return (
            <View style={styles.mainContainer}>
                <Swiper style={styles.wrapper}
                    loop={false}
                    showsButtons={true}
                    dotStyle={styles.dotStyles}
                    dotColor='transparent'
                    activeDotColor='blue'
                    nextButton={
                        <View style={styles.nextBtnOut}>
                            <Text style={styles.nextBtnColor}>NEXT</Text>
                        </View>
                    }
                    prevButton={
                        <View>
                            <Text>.</Text>
                        </View>
                    }
                    >
                    <View style={styles.slide}>
                        <Text>first</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>second</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>third</Text>
                    </View>
                </Swiper>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.skipBtnMain}>
                    <Text style={styles.skipText}>SKIP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default SliderScreens;

const styles = StyleSheet.create({

    mainContainer:{
        flex: 1, 
        position: 'relative' 
    },
    dotStyles:{ 
        borderColor: 'skyblue', 
        borderWidth: 1 
    },
    skipBtnMain: {
        position: 'absolute',
        bottom: 22,
        left: 18
    },
    skipText: {
        color: 'black',
        fontSize: 14,
        fontWeight: "400"

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextBtnOut:{
        height: height, 
        paddingBottom: Platform.OS === 'ios' ? 22 : 35, 
        justifyContent: 'flex-end', 
        marginRight: 10 
    },
    nextBtnColor:{ 
        color: 'black' 
    }
});

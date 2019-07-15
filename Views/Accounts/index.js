import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { connect } from 'react-redux'
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
var { height, width } = Dimensions.get('window')


class Accounts extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
        };
    }
   
    render() {
        return (
            <SafeAreaView style={styles.fullScreen}>
                  <BackgroundContent />
                    <View style={styles.mainContainer}>
                    <Header source={require('../../assets/back-white-arrow.png')} navigation={this.props.navigation}/>
                        <BackgroundText textConatiner={{top:"30%"}} showImage={false} textHeading="A C C O U N T   &   S E T T I N G" />
                    </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(Accounts)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
    },
    mainContainer:{  
        marginTop: 22,
    }
})
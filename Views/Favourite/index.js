import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux'
var { height, width } = Dimensions.get('window')


class Favourite extends React.Component {
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
            <View style={styles.fullScreen}>
                        <Text>Favourite</Text>
            </View>
        )
    }
}
export default connect(state => state)(Favourite)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
    },
})
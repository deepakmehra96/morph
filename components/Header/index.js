import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, SafeAreaView } from 'react-native';

class Header extends React.Component {
    
    handleBack() {
        if (this.props.source) {
            if (this.props.handleBackBtn) {
                return this.props.handleBackBtn()
            }
            this.props.navigation.goBack();
        }
    }
    render() {
        return (
            <SafeAreaView style={[styles.headerMainView,this.props.mainViewStyles]}>
                <View style={styles.headerOut}>
                    <View style={styles.leftImageOut}>
                        <TouchableOpacity onPress={() => { this.handleBack()}}>
                            <Image style={styles.imageaMain} source={this.props.source} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.width100}>
                        <View style={styles.titleOut}>
                            <Text style={[styles.label, this.props.textStyleHeader]} numberOfLines={1}>{this.props.label}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default Header;

const styles = StyleSheet.create({
    leftImageOut: {
        position: 'absolute',
        left: 20,
        top: 5,
        width: 23,
        height: 16
    },
    imageaMain: {
        height: '100%',
        width: '100%',
    },
    width100: {
        width: '100%',
    },
    headerOut: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 0 : 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom:10,
        position: 'relative',
    },
    titleOut: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 15,
        marginTop: 5
    },
    headerMainView:{
        zIndex:999,
        backgroundColor:'#f2f2f2',
        position: 'relative',
    }
});


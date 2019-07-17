import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import BackgroundText from '../../components/BackgroundText';
import BackgroundContent from '../../components/BackgroundContent';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem.js';
var { height, width } = Dimensions.get('window')


class Booking extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            listArray:{
                    upcoming: [
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'upcomimg'
                        },
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'upcomimg'
                        },
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'upcomimg'
                        },
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'upcomimg'
                        },
                    ],
                    past: [
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'past'
                        },
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'past'
                        },
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'past'
                        },
                        {
                            title: 'EMS, 12 Aug 2019, 14:30',
                            address: 'Jodi Pitout, 10 Downing Street',
                            type: 'past'
                        }
                    ]
                },
            tabIndex: 0
        };
    }

    handleTab(val) {
        this.setState({ tabIndex: val })
    }

    handleBooking(data){
        if (data.type == 'upcomimg') {
            this.props.navigation.navigate('ManageBooking', {
                item: data,
              });
        }
    }
    render() {
        let { listArray, tabIndex } = this.state
        let arrayToShow = tabIndex == 0 ? listArray.upcoming : listArray.past  
        return (
            <SafeAreaView style={styles.fullScreen}>
                <BackgroundContent />
                <View style={styles.upperCon}>
                    <BackgroundText textConatiner={{ top: "30%" }} showImage={false} textHeading="BOOKING" />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.tabOut}>
                            <TouchableOpacity onPress={() => this.handleTab(0)} style={tabIndex == 0 ? styles.tabMainActive : styles.tabMain}>
                                <Text style={styles.tabText}>UPCOMING</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleTab(1)} style={tabIndex == 1 ? styles.tabMainActive : styles.tabMain}>
                                <Text style={styles.tabText}>PAST</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View style={styles.scrollContent}>
                                {arrayToShow.map((val, index) => {
                                    return (
                                        <TouchableOpacity onPress={() => this.handleBooking(val)}>
                                            <ListItem
                                                key={index}
                                                listStyle={styles.listStyle}
                                                heading={val.title}
                                                bottomText={val.address}
                                                iconRight={val.type == 'past' ? '' : require('../../assets/arrow.png')}
                                                iconRightStyle={styles.iconRight}
                                            />
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect(state => state)(Booking)

const styles = StyleSheet.create({
    fullScreen: {
        height: height,
    },
    upperCon: {
        marginTop: 22,
    },
    mainContainer: {
        height: height,
        justifyContent: 'flex-end'
    },
    innerContainer: {
        backgroundColor: '#fff',
        height: height - 50
    },
    listStyle: {
        paddingLeft: 40
    },
    iconRight: {
        width: 10,
        height: 20
    },
    scrollContent: {
        marginBottom: 220
    },
    tabOut: {
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    tabMain: {
        backgroundColor: '#EEEEEE',
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabMainActive: {
        width: width / 2,
        borderTopWidth: 4,
        borderTopColor: '#FFC379',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText:{
        letterSpacing:3
    }

})

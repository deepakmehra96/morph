import React from 'react';
import { View, Text } from 'react-native';
import SignUp from '../Auth/Signup';

class Main extends React.Component{
    static navigationOptions= {
        header : null
    }
    constructor(){
        super()
    }

    render(){
        return(
            <View>
               <SignUp />
            </View>
        )
    }
}
export default Main
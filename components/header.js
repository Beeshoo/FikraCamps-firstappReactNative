import React, { Component } from 'react';
import {View, Text, Image} from "react-native";



class Header extends Component {
    render() { 
        return ( 
            <View style={{height:60,flexDirection:"row", backgroundColor:'red'}}>
                <Image style={{height:60}} resizeMode="cover" source={require("../assets/icon.png")} />
                <Text>News App</Text>
            </View>
         );
    }
}
 
export default Header;
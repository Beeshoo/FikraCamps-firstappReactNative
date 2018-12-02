import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from "react-native";



class Header extends Component {
    render() { 
        return ( 
            <View style={styles.headerContainer}>
                <Image style={styles.image} resizeMode="cover" source={require("../assets/icon.png")} />
                <Text>News App</Text>
            </View>
         );
    }
}
 
export default Header;

const styles = StyleSheet.create({
    headerContainer : {
        height: 60,
        flexDirection:"row", 
        backgroundColor:'red', 
        alignItems:"center"
    },
    image: {height:45, width:95, marginRight:10}

})
import React, { Component } from 'react';
import {View, TextInput} from "react-native";



class Search extends Component {
    render() { 
        return ( 
            <View style={{height:60, backgroundColor:"green"}}>
                <TextInput placeholder="Search a News..." style={{height:50, borderColor:"white", borderRadius:10, backgroundColor:"white", paddingLeft:20}}/>
            </View>
         );
    }
}
 
export default Search;
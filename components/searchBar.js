import React, { Component } from 'react';
import {View, TextInput, StyleSheet} from "react-native";



class Search extends Component {
    constructor(prop){
        super(prop)
        this.state = {
            value: ""
        }
    }
    search(text){
        this.setState({value: text})
        this.props.searchfun(text)
        console.log(text)
    }
    render() { 
        return ( 
            <View style={styl.searchBar}>
                <TextInput placeholder="Search a News..." style={styl.searcInput} onChangeText={this.search.bind(this)} value={this.state.value}/>
            </View>
         );
    }
}
 
export default Search;

const styl = StyleSheet.create({
    searchBar : {
        height:60, 
        backgroundColor:"green",
        flexDirection: 'row',
        alignItems: 'center',
    },
    searcInput : {
        height:50,
        borderColor:"white", 
        borderRadius:10, 
        backgroundColor:"white", 
        paddingLeft:20,
        marginLeft:20,
        marginRight:20
    }
})
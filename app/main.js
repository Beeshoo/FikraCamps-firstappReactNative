import React, { Component } from 'react';
import {View} from 'react-native';
import Header from '../components/header';
import Search from '../components/searchBar';
import News from '../components/newsList'

class Main extends Component {
    render() { 
        return ( 
            <View style={{flex:1}}>
                <Header/>
                <Search/>
                <News/>
            </View>
         );
    }
}
 
export default Main;
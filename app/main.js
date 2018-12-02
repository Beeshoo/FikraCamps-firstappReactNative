import React, { Component } from 'react';
import {View} from 'react-native';
import Header from '../components/header';
import Search from '../components/searchBar';
import News from '../components/newsList'

class Main extends Component {


    constructor(props){
        super(props)

        this.state = {
            news: []
        }
    }
    componentDidMount(){
        this.search("bitcoin");
    }

    search(q) {
        fetch(`https://newsapi.org/v2/everything?q=${q}&from=2018-11-02&sortBy=publishedAt&apiKey=46bb3ad5b00f453dbb9535d88dbc61a6`)
            .then(res => res.json())
            .then(news => {
                this.setState({ news: news.articles });
            }).catch((err) => {
                console.log(err);
            });
    }

    render() { 
        return ( 
            <View style={{flex:1}}>
                <Header/>
                <Search searchfun={this.search.bind(this)}/>
                <News news={this.state.news}/>
            </View>
         );
    }
}
 
export default Main;
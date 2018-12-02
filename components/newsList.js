import React, { Component } from 'react';
import {View} from "react-native";
import NewsItem from './newsItem'



class News extends Component {
   
    render() { 
        const { news } = this.props;
        const newsList = news.map((itemData,i)=> <NewsItem key={i} item={itemData}/>)
        return ( 
            <View style={{flex:1, backgroundColor:"yellow"}}>{newsList}</View>
         );
    }
}
 
export default News;
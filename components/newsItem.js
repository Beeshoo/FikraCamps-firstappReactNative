import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from "react-native";



class NewsItem extends Component {
    
    render() {
        let {item} = this.props; 
        const { description, publishedAt, title, urlToImage } = item;
        return ( 
            <View style={styles.headerContainer}>
                <Image style={styles.image} resizeMode="cover" source={{url:urlToImage}} />
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{publishedAt}</Text>
            </View>
         );
    }
}
 
export default NewsItem;

const styles = StyleSheet.create({
    headerContainer : {
        height: 60,
        flexDirection:"row", 
        backgroundColor:'yellow', 
        alignItems:"center"
    },
    image: {height:45, width:95, marginRight:10}

})
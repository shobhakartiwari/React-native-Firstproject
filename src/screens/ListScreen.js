import React from 'react';
import {Text , View, StyleSheet}  from "react-native";
import { FlatList } from 'react-native-gesture-handler';


const ListScreen = () => {

    //Array of objects 
    const friendsArray = [
        {name : 'shobhakar',key:'1'},
        {name : 'Krishnendra',key:'2'},
        {name : 'Vivek',key:'3'},
        {name : 'Dharmendra',key:'4'},
        {name : 'Nikhil',key:'5'},
        {name : 'Manoj',key:'6'},
        {name : 'Lokesh',key:'7'},
        {name : 'Himanshu',key:'8'},
        {name : 'Shikha',key:'9'},
        {name : 'shobhakar',key:'10'},
        {name : 'shobhakar',key:'11'},
        {name : 'shobhakar',key:'12'},
        {name : 'shobhakar',key:'13'}
];



    return (
    <FlatList 
    data={friendsArray}
    renderItem = { ({item}) => {
            //element = {item:{name:shobhakar},index:0}
            //and then  item : {name:shobhakar}

    return <Text>{item.name}</Text>
    }}
    />
    );
};


const styles = StyleSheet.create(
    {
        
    }
);


export default ListScreen ;
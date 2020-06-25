import React from "react";
import {Text, StyleSheet, View} from "react-native";


//Creating variable 
const text_info = "Hi Shobhakar this side" ;

//Function returning JSX
const Home = () => {
    return (
    <View>
            <Text style={styles.fontSize}>{text_info}</Text>
    </View>
);
};


//Styling goes here ----
const styles = StyleSheet.create({
    text: {
      fontSize: 100
    }
  });

//export 
export default Home;

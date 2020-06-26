import React from "react";
import {Text, StyleSheet, View} from "react-native";


//constant 
const txtInfo = ["1,2,3,4,5", "react", "ios", "android"];

//Function returning JSX
const Home = () => {
    return ( 
        <View>
            <Text style={styles.fontSize}> {txtInfo}  </Text>
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

import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Home = () => {
  var myImage = require("./images/News_bg.jpg")
  return (
    <View style={styles.container}>
        <ImageBackground
        source={myImage}
        style={styles.ImageBackground}
        resizeMode="cover"
        />
      <Text>Home</Text>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text>BusandCode News App</Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundImage:{
        flex:1,
        justifyContent:"center",
    },
    overlay:{
      flex:1,
      backgroundColor:"rgba(0,0,0,0.5)",
      justifyContent:"center",
      alignItems:"center",
      padding:24
    },
    header:{
      marginBottom:20
    }
})
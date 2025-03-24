import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
        // source={{uri:''}}
        style={styles.ImageBackground}
        resizeMode='cover'
        />
      <Text>Home</Text>
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

    },
})
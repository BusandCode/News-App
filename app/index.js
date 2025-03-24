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
          <Text style={styles.title} >BusandCode News App</Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a dark overlay to enhance text readability
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 43,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
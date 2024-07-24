import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import logo from "../../assets/Key-ingredient-icon-3.png";

const StartingScreen = () => {
  return (
    <LinearGradient
      colors={['#6B8A7A', '#254336']}
      style={styles.container}
    >
      <StatusBar style="light" backgroundColor="#6B8A7A" />
      <View style={styles.containerImg}>
        <Image source={logo} style={styles.image} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImg: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 220
  }
});

export default StartingScreen;

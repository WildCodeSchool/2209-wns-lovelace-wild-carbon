//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Titles {
  title: string;
  subtitle: string;
}

// create a component
const Title = ({ title, subtitle }: Titles) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 25,
    color: "#609f39",
  },
  subtitle: {
    fontSize: 15,
    color: "#609f39",
  },
});

//make this component available to the app
export default Title;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Saved extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>this will be the Saved screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

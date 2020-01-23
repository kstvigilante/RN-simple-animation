import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Tags extends React.Component {
  render() {
    return (
      <View style={{ ...this.props.style, ...styles.tag }}>
        <Text style={{ fontSize: 10, fontWeight: "700" }}>
          {this.props.tag}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    minHeight: 20,
    minWidth: 40,
    padding: 5,
    backgroundColor: "white",
    borderColor: "#ddd",
    borderRadius: 2,
    borderWidth: 1
  }
});

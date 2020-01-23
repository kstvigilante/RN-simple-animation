import React from "react";
import { View, Text,Image, StyleSheet } from "react-native";

class Category extends React.Component {
  render() {
    return (
      <View style={styles.scrollItem}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.source}
            style={styles.scrollImage}
          />
        </View>
        <View style={{ ...styles.scrollText, flex: 1 }}>
          <Text>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  scrollText: {
    paddingTop: 10,
    paddingLeft: 10
  },
  scrollItem: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#ddd"
  }
});

export default Category;

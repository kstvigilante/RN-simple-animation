import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import StarRating from 'react-native-star-rating'
const { height, width } = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    return (
      <View style={{...styles.homesListContainer, width: this.props.width, height: this.props.height}}>
        <View style={{ flex: 1 }}>
          <Image source={require("../assets/home.jpg")} style={styles.image} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 10, color: "#b63838" }}>
            {this.props.desc}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 10, color: '#aaa' }}>{this.props.price} $</Text>
          <StarRating 
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={10}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homesListContainer: {
    width: width / 2,
    height: width / 2,
    borderWidth: 0.5,
    borderColor: "#ddd",
    marginVertical: 10
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
});

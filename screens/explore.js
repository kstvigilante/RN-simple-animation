import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Category, Home, Tags } from "../components";

const { height, width } = Dimensions.get("window");

export default class Explore extends React.Component {
  UNSAFE_componentWillMount() {
    this.startHeaderHeight = 80
    this.endHeaderHeight = 80
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endheaderHeight = 70 + StatusBar.currentHeight;
    }

    this.scrollY = new Animated.Value(0)

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0,50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endheaderHeight, this.startHeaderHeight],
      outputRange: [0,1],
      extrapolate: 'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endheaderHeight, this.startHeaderHeight],
      outputRange: [-30,10],
      extrapolate: 'clamp'
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Animated.View style={{ ...styles.header, height: this.animatedHeaderHeight }}>
            <View style={styles.searchContainer}>
              <Ionicons
                name="ios-search"
                size={24}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={styles.textInput}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tags style={{ marginRight: 10 }} tag={"Guests"} />
              <Tags style={{}} tag={"Dates"} />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View style={styles.scrollContainer}>
              <Text style={styles.titleText}>
                What can we help you find, Siddharth?
              </Text>

              <View style={styles.horizontalScrollContainer}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    source={require("../assets/home.jpg")}
                    text="Home"
                  />

                  <Category
                    source={require("../assets/experiences.jpg")}
                    text="Experiences"
                  />

                  <Category
                    source={require("../assets/restaurant.jpg")}
                    text="Restaurant"
                  />
                </ScrollView>
              </View>

              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={styles.heading}>Introducing Airbnb Plus</Text>

                <Text style={styles.subHeading}>
                  A new selection of homes verified for quality & comfort
                </Text>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/home.jpg")}
                    style={styles.imageWithBorder}
                  />
                </View>
              </View>
            </View>

            <View style={{ marginVertical: 40, paddingHorizontal: 20 }}>
              <Text style={{ ...styles.heading }}>Homes around the world</Text>

              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width / 2 - 30}
                  height={width / 2 - 30}
                  desc={"PRIVATE ROOM - 2 BEDS"}
                  name={"The Cozy Place"}
                  price={82}
                  rating={3.5}
                />
                <Home
                  width={width / 2 - 30}
                  height={width / 2 - 30}
                  desc={"PRIVATE ROOM - 3 BEDS"}
                  name={"Amrapali Princely"}
                  price={92}
                  rating={4}
                />
                <Home
                  width={width / 2 - 30}
                  height={width / 2 - 30}
                  desc={"PRIVATE ROOM - 4 BEDS"}
                  name={"Amrapali Silicon"}
                  price={102}
                  rating={4.6}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 24,
    fontWeight: "700"
  },
  header: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    padding: 10,
    marginTop: 30
  },
  textInput: {
    flex: 1,
    fontWeight: "700",
    width: 300
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  horizontalScrollContainer: {
    height: 130,
    marginTop: 20,
    backgroundColor: "white"
  },
  subHeading: {
    fontWeight: "100",
    marginTop: 10,
    color: "#bbb"
  },
  imageContainer: {
    width: width - 40,
    height: 200,
    marginTop: 20
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
  imageWithBorder: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd"
  }
});

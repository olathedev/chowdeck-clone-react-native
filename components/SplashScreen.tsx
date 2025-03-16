import { Image, Text, View } from "react-native";
import React, { Component } from "react";

export class SplashScreen extends Component {
  render() {
    return (
      <View className="bg-primary flex-1 items-center justify-center flex-row">
        <Image
          source={require("../assets/images/chowdecklogo.webp")}
          className="h-16 w-16"
        />
        <Text
          className="text-4xl font-semibold text-white font-custom"
          style={{
            fontFamily: "Custom-font",
            fontWeight: 600,
          }}
        >
          Chowdeck
        </Text>
      </View>
    );
  }
}

export default SplashScreen;

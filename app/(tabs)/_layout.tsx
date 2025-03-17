import { Stack, Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import React, { Component } from "react";
import { Text, View } from "react-native";

export class TabLayout extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({}) => (
              <View className="">
                <Home size={30} className="text-gray-600" color="#4b5563" />
              </View>
            ),
            tabBarLabelStyle: {
              fontFamily: "default",
              fontSize: 14,
              fontWeight: 500,
            },
          }}
        />
      </Tabs>
    );
  }
}

export default TabLayout;

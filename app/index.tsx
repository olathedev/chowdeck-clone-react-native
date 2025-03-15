import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-wite px-6 font-outfit">
      <Image
        source={require("../assets/images/adaptive-icon.png")}
        className="h-56 w-56 mb-10"
        resizeMode="contain"
      />

      <Text className="mt-8 font-outfit text-primary text-xl  font-bold mb-2">
        Multiple delivery options
      </Text>
      <Text className="text-4xl tracking-wide text-text text-center font-bold">
        Enjoy best in the market
      </Text>
      <Text className="text-4xl tracking-wide text-text text-center font-bold mb-10">
        exchange rates
      </Text>

      <TouchableOpacity
        className="mt-10 rounded-lg py-4 flex items-center justify-center bg-primary w-full text-white"
        onPress={() => console.log("Get Started Pressed")}
      >
        <Text className="text-white text-lg font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

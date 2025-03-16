import { useFonts } from "expo-font";
import { Link, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 p-5 bg-white">
      <View className="flex-row justify-between items-center mb-8">
        <Text className="text-2xl text-primary" style={{ fontFamily: "bold" }}>
          Chowdeck
        </Text>

        <TouchableOpacity>
          <Text
            className="text-primary underline"
            style={{ fontFamily: "regular" }}
          >
            Continue as guest
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center mb-3">
        <View className="mb-10">
          <Text className="text-4xl text-center" style={{ fontFamily: "bold" }}>
            We bring you
          </Text>

          <Text
            className="text-3xl py-2.5 border-[3px] text-center leading-[1.5] bg-orange-600/50 my-3 rounded-2xl w-auto px-2"
            style={{ fontFamily: "bold" }}
          >
            Chow
          </Text>
          <Text
            className="text-4xl text-center "
            style={{ fontFamily: "bold" }}
          >
            wherever you are.
          </Text>
        </View>

        <Image
          source={require("../assets/images/onboard.png")}
          className="w-full h-80"
          resizeMode="contain"
        />
      </View>

      <View className="my-6 text-center">
        <TouchableOpacity className="bg-primary py-5 rounded-lg items-center mb-4">
          <Text className="text-white " style={{ fontFamily: "semibold" }}>
            Get Started
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-center items-center"
          onPress={() => router.push("/login")}
        >
          <Text
            className="text-center  text-lg"
            style={{ fontFamily: "regular" }}
          >
            Already have an account?
          </Text>
          <Text
            className=" px-1 text-primary text-lg"
            style={{ fontFamily: "semibold" }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

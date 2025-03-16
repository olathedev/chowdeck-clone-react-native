import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      className="flex-1 bg-white p-5"
      edges={["bottom", "left", "right"]}
    >
      <View className="w-full ">
        <TouchableOpacity
          className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center"
          onPress={() => router.back()}
        >
          <ArrowLeft color="#000000" size={20} />
        </TouchableOpacity>
      </View>

      <View className="mt-10 items-center">
        <Text className="text-3xl mb-3" style={{ fontFamily: "bold" }}>
          Welcome Back
        </Text>

        <Text className="text-center text-lg" style={{ fontFamily: "regular" }}>
          You can login back into your account using your {"\n"} phone number
        </Text>
      </View>

      <View className="flex-1 justify-center">
        <View className="">
          <Text className="mb-2" style={{ fontFamily: "semibold" }}>
            Phone number{" "}
          </Text>
          <TextInput
            placeholder="09000000000"
            className="w-full py-4 px-4 bg-gray-100 text-sm rounded-lg border-none text-gray-900"
            style={{ fontFamily: "regular" }}
          />
        </View>
      </View>

      <View className="my-6 text-center">
        <TouchableOpacity className="bg-primary py-[18px] rounded-lg items-center mb-4">
          <Text className="text-white " style={{ fontFamily: "semibold" }}>
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-center items-center"
          // onPress={() => router.push("/login")}
        >
          <Text
            className=" px-1 text-primary text-lg underline"
            style={{ fontFamily: "semibold" }}
          >
            Continue as guest
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default login;

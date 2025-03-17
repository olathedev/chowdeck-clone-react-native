import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronDown, MapPin, Menu } from "lucide-react-native";
import { categories } from "@/constants/cateories";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-white p-5"
      edges={["bottom", "left", "right"]}
    >
      <View className="w-full flex-row justify-between">
        <View className="flex-row gap-3 items-center">
          <View className="flex-row items-center gap-1">
            <MapPin className="text-primary" color="#0C513F" size={14} />
            <Text style={{ fontFamily: "semibold" }}>
              Rayfield, Jos Plateau...
            </Text>
          </View>

          <ChevronDown size={18} color="#000000" />
        </View>
        <View className="flex-row items-center gap-3">
          <View className="h-10 w-10 bg-gray-200 rounded-full"></View>
          <View className="bg-primary py-2 px-4  rounded-full font-fam flex-row items-center gap-1">
            <Text className="text-white text-sm font-family_semibold">
              Filter
            </Text>
            <Menu color="#ffffff" size={14} />
          </View>
        </View>
      </View>

      <View className="flex-row flex-wrap justify-between mt-10 gap-4">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            className="w-[30%] h-28  items-center justify-center rounded-lg "
            style={{ backgroundColor: category.color }}
          >
            <Image
              source={category.image}
              className="h-10 w-10 mb-2"
            />
            <Text className="font-family_regular text-sm">{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;

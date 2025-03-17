import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bike, ChevronDown, Heart, MapPin, Menu } from "lucide-react-native";
import { categories } from "@/constants/cateories";
import { vendors } from "@/constants/vendor";
import { foodItems } from "@/constants/featured";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-white "
      edges={["bottom", "left", "right"]}
    >
      <View className="w-full flex-row justify-between p-5">
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

      <ScrollView>
        <View className="flex-row flex-wrap justify-between p-5 gap-3">
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              className="w-[31%] h-28  items-center justify-center rounded-lg "
              style={{ backgroundColor: category.color }}
            >
              <Image source={category.image} className="h-10 w-10 mb-2" />
              <Text className="font-family_regular text-sm">
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="p-5 border-t-[5px] border-b-[5px] border-gray-50">
          <Text className="pb-5 text-xl font-family_semibold">Explore</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 10 }}
          >
            {vendors.map((vendor, index) => (
              <TouchableOpacity className="items-center w-16 mr-3" key={index}>
                <View className="h-12 w-12 bg-white border border-gray-400 rounded-full mb-1"></View>
                <Text className="text-center font-family_regular text-xs">
                  {vendor.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="p-5">
          <Text className="pb-5 text-xl font-family_semibold ">
            Featured 🌟
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingEnd: 16 }}
          >
            {foodItems.map((food, index) => (
              <View className="mr-6" key={index}>
                <TouchableOpacity className="w-[20rem] h-[10rem] rounded-lg bg-primary/20"></TouchableOpacity>
                <View className="flex-row justify-between items-center mt-2.5">
                  <Text className="font-family_semibold text-lg">
                    {food.name}
                  </Text>

                  <View>
                    <Heart color="#A9A9A9" size={16} />
                  </View>
                </View>

                <View className="flex-row justify-between items-center mt-2">
                  <View className="flex-row items-center gap-2">
                    <View className="flex-row items-center gap-1">
                      <Bike color="#000000" size={16} />
                      <Text className="font-family_regular border-r-2 border-gray-300 pr-2">
                        from {food.price}
                      </Text>
                    </View>

                    <Text className="text-red-500 font-family_regular">
                      Closed
                    </Text>
                  </View>

                  <View>
                    <Text className="font-family_regular"> ⭐ 4.2 (2523)</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="p-5">
          <Text className="pb-5 text-xl font-family_semibold ">
            HandPicked for you
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {foodItems.map((food, index) => (
              <View className="mr-6" key={index}>
                <TouchableOpacity className="w-[20rem]  h-[10rem] rounded-lg bg-primary/20"></TouchableOpacity>
                <View className="flex-row justify-between items-center mt-2.5">
                  <Text className="font-family_semibold text-lg">
                    {food.name}
                  </Text>

                  <View>
                    <Heart color="#A9A9A9" size={16} />
                  </View>
                </View>

                <View className="flex-row justify-between items-center mt-2">
                  <View className="flex-row items-center gap-2">
                    <View className="flex-row items-center gap-1">
                      <Bike color="#000000" size={16} />
                      <Text className="font-family_regular border-r-2 border-gray-300 pr-2">
                        from {food.price}
                      </Text>
                    </View>

                    <Text className="text-red-500 font-family_regular">
                      Closed
                    </Text>
                  </View>

                  <View>
                    <Text className="font-family_regular"> ⭐ 4.2 (2523)</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

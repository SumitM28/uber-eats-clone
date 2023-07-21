import { View, Text, ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import { SafeAreaView } from "react-native";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import BottomTab from "../components/home/BottomTab";

export default function Home({ navigation }) {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantsData={restaurantsData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}

import { View, SafeAreaView } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";
import LottieView from "lottie-react-native";
export default function RestaurantDetails({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <About route={route} />
      <View
        style={{ borderWidth: 0.5, borderColor: "gray", marginTop: 20 }}
      ></View>
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </SafeAreaView>
  );
}

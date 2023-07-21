import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetails/MenuItems";
export default function OrderCompleted() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const restaurantName = useSelector(
    (state) => state.cartReducer.selectedItems.restaurantName
  );
  const total = items
    .map((cartItem) => Number(cartItem.item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* green checkmark */}
      <LottieView
        style={{
          height: 100,
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 30,
        }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />

      <View
        style={{
          margin: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontSize: 17, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for ${total}
        </Text>
      </View>

      <MenuItems restaurantName={restaurantName} hiddenCheckBox={true} />

      <LottieView
        style={{
          height: 150,
          alignSelf: "center",
          marginBottom: 20,
        }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
        // loop={false}
      />
    </SafeAreaView>
  );
}

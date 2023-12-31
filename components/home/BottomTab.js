import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function BottomTab() {
  return (
    <View
      style={{
        borderTopColor: "gray",
        borderWidth: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <Icon icon={"home"} text={"Home"} />
        <Icon icon={"search"} text={"Search"} />
        <Icon icon={"shopping-bag"} text={"Grocery"} />
        <Icon icon={"receipt"} text={"Orders"} />
        <Icon icon={"user"} text={"Account"} />
      </View>
    </View>
  );
}

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

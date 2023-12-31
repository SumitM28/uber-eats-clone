import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityicons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems({ restaurantsData, navigation }) {
  return (
    <>
      {restaurantsData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          style={{
            marginBottom: 30,
          }}
          activeOpacity={1}
          onPress={() =>
            navigation.navigate("RestaurantDetails", {
              name: restaurant.name,
              image_url: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{
              padding: 15,
              marginTop: 10,
              backgroundColor: "white",
            }}
          >
            <RestaurantImage img={restaurant.image_url} />
            <RestaurantInfo restaurant={restaurant} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = ({ img }) => {
  return (
    <>
      <Image
        source={{
          uri: img,
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 20,
        }}
      >
        <MaterialCommunityicons name="heart-outline" size={25} color={"#fff"} />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ restaurant }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {restaurant.name}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{restaurant.rating}</Text>
      </View>
    </View>
  );
};

import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const restaurant = {
  name: "Beachside Bar",
  image_url:
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  description: "Thai - Comfort Food - $$ -  - 4 🌟 (2913+)",
};

export default function About({ route }) {
  const { name, image_url, price, reviews, rating, categories } = route.params;

  let formattedCategories = "";
  categories.map((cat) => (formattedCategories += " • " + cat));

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage img={image_url} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ img }) => {
  return <Image source={{ uri: img }} style={{ width: "100%", height: 180 }} />;
};

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);

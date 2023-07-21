import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cartReducer";
const foods = [
  {
    id: 1,
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    id: 2,
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    id: 4,
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
];

export default function MenuItems({ restaurantName, hiddenCheckBox }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkBoxValue) => {
    dispatch(
      addToCart({
        item: item,
        checkBoxValue: checkBoxValue,
        restaurantName: restaurantName,
      })
    );
  };

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  console.log(cartItems);
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((cartItem) => cartItem.item.id === food.id));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            {hiddenCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                size={25}
                fillColor="green"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "red", borderRadius: 0 }}
                innerIconStyle={{ borderWidth: 1.5, borderRadius: 0 }}
                // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage img={food.image} />
          </View>

          <View
            style={{
              borderBottomWidth: 0.2,
              borderColor: "gray",
              marginTop: 20,
            }}
          ></View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  description: {},
});

const FoodInfo = ({ food }) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: "space-evenly",
        marginHorizontal: 5,
      }}
    >
      <Text style={styles.title}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};

const FoodImage = ({ img }) => (
  <Image
    source={{ uri: img }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);

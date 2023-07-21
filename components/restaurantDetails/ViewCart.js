import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import firebase from "../../firebase";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";
import Loading from "../Loading";

export default function ViewCart({ navigation }) {
  const [laoding, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const restaurantName = useSelector(
    (state) => state.cartReducer.selectedItems.restaurantName
  );
  const total = items
    .map((cartItem) => Number(cartItem.item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const addOrderToFirebase = () => {
    // const db = firebase.firestore();
    // db.collection("orders").add({
    //   items: items,
    //   restaurantName: restaurantName,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    setModalVisible(false);
    navigation.navigate("OrderComplete");
  };
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContaner}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalText}>${total}</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  addOrderToFirebase();
                }}
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    color: "white",
                    right: 20,
                    fontSize: 15,
                  }}
                >
                  {total ? <Text>${total}</Text> : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContaner: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
            bottom: 20,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // setLoading(true);
                // setTimeout(() => {
                //   setLoading(true);
                //   setModalVisible(true);
                // }, 2000);
                setModalVisible(true);
              }}
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 45 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>${total}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

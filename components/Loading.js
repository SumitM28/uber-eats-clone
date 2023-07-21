import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View
      style={{
        backgroundColor: "black",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <LottieView
        style={{ height: 200 }}
        source={require("../assets/animations/scanner.json")}
        autoPlay
        speed={3}
      />
    </View>
  );
}

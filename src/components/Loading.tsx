import { ActivityIndicator, View } from "react-native";
import { Colors } from "../constants/Colors";

export const Loading = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color={Colors.blue} />
  </View>
);

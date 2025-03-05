import { Text, View } from "react-native";
import { ApiError } from "../api/types/apiTypes";
import { Colors } from "../constants/Colors";

export const Error = ({ error }: { error: ApiError }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: Colors.red }}>{error.message}</Text>
    {error.status && <Text>Status: {error.status}</Text>}
  </View>
);

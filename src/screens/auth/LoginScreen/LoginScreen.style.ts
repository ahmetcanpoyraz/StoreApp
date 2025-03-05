import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageStyle: {
    width: scale(250),
    height: verticalScale(100),
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    marginHorizontal: scale(20),
  },

  sizedBoxStyle: {
    height: verticalScale(20),
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default styles;

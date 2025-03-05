import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Colors } from "../constants/Colors";

interface ButtonProps {
  title: string;
  onPress?: () => void; // Opsiyonel hale getirdik
  disabled?: boolean;
  loading?: boolean; // Eğer dışarıdan loading verilmezse, içeride yönetilecek
  icon?: string;
  style?: object;
  textStyle?: object;
}

const CustomButton = ({
  title,
  onPress,
  disabled,
  loading: externalLoading,
  icon,
  style,
  textStyle,
}: ButtonProps) => {
  const [internalLoading, setInternalLoading] = useState(false);

  // Eğer dışarıdan loading değeri verilmediyse, içeride yönet
  const isLoading = externalLoading ?? internalLoading;

  const handlePress = () => {
    if (onPress) {
      setInternalLoading(true);
      onPress();
      setTimeout(() => setInternalLoading(false), 2000); // 2 saniye sonra yükleme biter
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled || isLoading ? styles.disabledButton : null,
        style,
      ]}
      onPress={handlePress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <View style={styles.content}>
          {icon && (
            <Icon
              name={icon}
              size={moderateScale(20)}
              color={Colors.white}
              style={styles.icon}
            />
          )}
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
    paddingVertical: verticalScale(10),
    borderRadius: scale(10),
    width: "80%",
    height: verticalScale(40),
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
  buttonText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: scale(5),
  },
});

export default CustomButton;

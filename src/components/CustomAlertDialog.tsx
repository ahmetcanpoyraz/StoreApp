// CustomAlertDialog.tsx
import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const CustomAlertDialog = ({
  visible,
  onClose,
  title,
  message,
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Button title="Tamam" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: scale(300),
    padding: scale(20),
    backgroundColor: Colors.white,
    borderRadius: scale(10),
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginBottom: verticalScale(10),
  },
  message: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(20),
  },
});

export default CustomAlertDialog;

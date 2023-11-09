import React, { useState } from "react";
import { Modal, TextInput, Button, View, StyleSheet } from "react-native";

const AddModal = ({ visible, setvisible, onAdd, text, setText }) => {
  const handleAdd = () => {
    onAdd(text);
    setText("");
    setvisible(false);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View
        style={styles.modalContainer}
        onStartShouldSetResponder={() => setvisible(false)}
      >
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={text}
            onChangeText={setText}
          />
          <Button title="Add" onPress={handleAdd} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  innerContainer: {
    backgroundColor: "#F1F3F6",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#5193F2",
    width: "80%",
    height: "30%",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
});

export default AddModal;

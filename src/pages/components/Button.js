import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function Button({ handleAddNewSkill }) {
  return (
    <TouchableOpacity
      onPress={handleAddNewSkill}
      activeOpacity={0.7}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 17,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

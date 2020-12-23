import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.apskatitZinas}>Apskatīt ziņas</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  apskatitZinas: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "taviraj-500"
  }
});

export default CupertinoButtonGrey1;

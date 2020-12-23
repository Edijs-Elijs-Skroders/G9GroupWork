import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonGrey3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.back}>Back</Text>
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
  back: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonGrey3;

import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonGrey2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}></Text>
      <Icon name="chevron-with-circle-left" style={styles.icon1}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "#000000",
    fontSize: 14
  },
  icon1: {
    top: -3,
    left: 30,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default MaterialButtonGrey2;

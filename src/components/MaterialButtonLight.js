import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonLight(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="chevron-with-circle-left" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CCCCCC",
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
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    alignSelf: "center"
  }
});

export default MaterialButtonLight;

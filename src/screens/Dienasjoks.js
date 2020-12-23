import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSpinner1 from "../components/MaterialSpinner1";
import MaterialButtonGrey1 from "../components/MaterialButtonGrey1";
import Icon from "react-native-vector-icons/Entypo";

function Dienasjoks(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackRow}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <View style={styles.textRow}>
              <Text style={styles.text}>Dienas joks</Text>
              <MaterialSpinner1
                style={styles.materialSpinner1}
              ></MaterialSpinner1>
            </View>
          </View>
          <MaterialButtonGrey1
            style={styles.materialButtonGrey1}
          ></MaterialButtonGrey1>
        </View>
        <Icon name="chevron-with-circle-left" style={styles.icon1}></Icon>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.nosaukums}>Nosaukums</Text>
      </View>
      <View style={styles.rect3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 3,
    width: 353,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(136,175,188,1)",
    flexDirection: "row"
  },
  text: {
    fontFamily: "taviraj-500",
    color: "rgba(243,242,242,1)",
    fontSize: 28,
    width: 153,
    height: 48
  },
  materialSpinner1: {
    width: 47,
    height: 42,
    marginLeft: 54
  },
  textRow: {
    height: 48,
    flexDirection: "row",
    flex: 1,
    marginLeft: 99,
    marginTop: 34
  },
  materialButtonGrey1: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(136,175,188,1)"
  },
  rectStack: {
    width: 356,
    height: 83
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 92,
    marginTop: 13
  },
  rectStackRow: {
    height: 83,
    flexDirection: "row",
    marginTop: 58,
    marginLeft: 9,
    marginRight: -122
  },
  rect2: {
    width: 353,
    height: 66,
    backgroundColor: "rgba(58,112,129,1)",
    marginTop: 1,
    marginLeft: 12
  },
  nosaukums: {
    fontFamily: "taviraj-500",
    color: "rgba(252,245,245,1)",
    fontSize: 18,
    marginTop: 18,
    marginLeft: 126
  },
  rect3: {
    width: 353,
    height: 564,
    backgroundColor: "rgba(171,214,230,1)",
    marginLeft: 12
  }
});

export default Dienasjoks;

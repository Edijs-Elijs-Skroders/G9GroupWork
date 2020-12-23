import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSpinner2 from "../components/MaterialSpinner2";
import MaterialButtonGrey3 from "../components/MaterialButtonGrey3";

function Apskatitzinas(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.textStack}>
          <Text style={styles.text}>Apskatīt ziņas</Text>
          <MaterialSpinner2 style={styles.materialSpinner2}></MaterialSpinner2>
          <MaterialButtonGrey3
            style={styles.materialButtonGrey3}
          ></MaterialButtonGrey3>
        </View>
      </View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 351,
    height: 92,
    backgroundColor: "rgba(171,214,230,1)",
    marginTop: 60,
    marginLeft: 14
  },
  text: {
    top: 32,
    position: "absolute",
    fontFamily: "taviraj-500",
    color: "rgba(250,243,243,1)",
    fontSize: 28,
    width: 261,
    height: 43,
    left: 80
  },
  materialSpinner2: {
    width: 22,
    height: 22,
    position: "absolute",
    left: 307,
    top: 32
  },
  materialButtonGrey3: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(171,214,230,1)"
  },
  textStack: {
    width: 341,
    height: 75
  },
  rect2: {
    width: 351,
    height: 52,
    backgroundColor: "rgba(58,112,129,1)",
    marginLeft: 14
  },
  rect3: {
    width: 351,
    height: 567,
    backgroundColor: "rgba(84,159,176,1)",
    marginLeft: 14
  }
});

export default Apskatitzinas;

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSpinner from "../components/MaterialSpinner";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import CupertinoSearchBarBasic1 from "../components/CupertinoSearchBarBasic1";
import MaterialButtonGrey2 from "../components/MaterialButtonGrey2";
import Svg, { Ellipse } from "react-native-svg";

function Laikazinas(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.icon1Row}>
            <FontAwesomeIcon
              name="map-marker"
              style={styles.icon1}
            ></FontAwesomeIcon>
            <Text style={styles.valmiera}>Valmiera</Text>
            <MaterialSpinner style={styles.materialSpinner}></MaterialSpinner>
          </View>
          <View style={styles.icon3Stack}>
            <FontAwesomeIcon
              name="calendar-check-o"
              style={styles.icon3}
            ></FontAwesomeIcon>
            <MaterialIconTextbox
              style={styles.materialIconTextbox1}
            ></MaterialIconTextbox>
          </View>
          <CupertinoSearchBarBasic1
            style={styles.cupertinoSearchBarBasic1}
          ></CupertinoSearchBarBasic1>
        </View>
        <MaterialButtonGrey2
          style={styles.materialButtonGrey2}
        ></MaterialButtonGrey2>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <Svg viewBox="0 0 92.25 84" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={46}
              cy={42}
              rx={46}
              ry={42}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.rect3}>
          <Svg viewBox="0 0 92.25 84" style={styles.ellipse1}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={46}
              cy={42}
              rx={46}
              ry={42}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.rect4}>
          <Svg viewBox="0 0 92.25 84" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={46}
              cy={42}
              rx={46}
              ry={42}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.rect5}>
          <Svg viewBox="0 0 92.25 84" style={styles.ellipse3}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={46}
              cy={42}
              rx={46}
              ry={42}
            ></Ellipse>
          </Svg>
        </View>
      </View>
      <View style={styles.rect6}>
        <Svg viewBox="0 0 92.25 84" style={styles.ellipse4}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={46}
            cy={42}
            rx={46}
            ry={42}
          ></Ellipse>
        </Svg>
      </View>
      <View style={styles.undefined}></View>
      <View style={styles.rect8Stack}>
        <View style={styles.rect8}></View>
        <View style={styles.rect9}></View>
      </View>
      <View style={styles.rect10Stack}>
        <View style={styles.rect10}></View>
        <View style={styles.rect11}></View>
      </View>
      <View style={styles.rect12}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 1,
    width: 358,
    height: 231,
    position: "absolute",
    backgroundColor: "rgba(171,214,230,1)"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 22,
    marginTop: 7
  },
  valmiera: {
    fontFamily: "taviraj-regular",
    color: "#121212",
    fontSize: 28,
    marginLeft: 12,
    marginTop: -1
  },
  materialSpinner: {
    width: 31,
    height: 30,
    marginLeft: 11,
    marginTop: 7
  },
  icon1Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 145,
    marginRight: 23
  },
  icon3: {
    top: 3,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  materialIconTextbox1: {
    height: 43,
    width: 204,
    position: "absolute",
    left: 26,
    top: 0
  },
  icon3Stack: {
    width: 230,
    height: 43,
    marginTop: 31,
    marginLeft: 86
  },
  cupertinoSearchBarBasic1: {
    height: 44,
    width: 319,
    marginTop: 23,
    marginLeft: 39
  },
  materialButtonGrey2: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(171,214,230,1)"
  },
  rectStack: {
    top: 54,
    left: 8,
    width: 359,
    height: 231,
    position: "absolute"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 246,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(136,175,188,1)"
  },
  ellipse: {
    width: 92,
    height: 84,
    marginTop: 5,
    marginLeft: 130
  },
  rect3: {
    top: 94,
    width: 246,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(130,166,178,1)",
    left: 0
  },
  ellipse1: {
    width: 92,
    height: 84,
    marginTop: 8,
    marginLeft: 130
  },
  rect4: {
    top: 186,
    left: 0,
    width: 246,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(117,153,164,1)"
  },
  ellipse2: {
    width: 92,
    height: 84,
    marginTop: 5,
    marginLeft: 130
  },
  rect5: {
    top: 280,
    left: 0,
    width: 246,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(89,138,153,1)"
  },
  ellipse3: {
    width: 92,
    height: 84,
    marginTop: 5,
    marginLeft: 130
  },
  rect2Stack: {
    top: 285,
    left: 121,
    width: 246,
    height: 375,
    position: "absolute"
  },
  rect6: {
    top: 660,
    left: 121,
    width: 246,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(58,112,129,1)"
  },
  ellipse4: {
    width: 92,
    height: 84,
    marginTop: 5,
    marginLeft: 130
  },
  undefined: {},
  rect8: {
    top: 0,
    left: 0,
    width: 112,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(149,193,207,1)"
  },
  rect9: {
    top: 94,
    left: 0,
    width: 112,
    height: 92,
    position: "absolute",
    backgroundColor: "rgba(136,175,188,1)"
  },
  rect8Stack: {
    top: 285,
    left: 9,
    width: 112,
    height: 186,
    position: "absolute"
  },
  rect10: {
    top: 0,
    left: 0,
    width: 112,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(130,166,178,1)"
  },
  rect11: {
    top: 94,
    left: 0,
    width: 112,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(117,153,164,1)"
  },
  rect10Stack: {
    top: 471,
    left: 9,
    width: 112,
    height: 189,
    position: "absolute"
  },
  rect12: {
    top: 660,
    left: 9,
    width: 112,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(89,138,153,1)"
  }
});

export default Laikazinas;

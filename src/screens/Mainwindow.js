import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";

function Mainwindow(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.ellipseRow}>
          <Svg viewBox="0 0 111 103.5" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={56}
              cy={52}
              rx={56}
              ry={52}
            ></Ellipse>
          </Svg>
          <FontAwesomeIcon
            name="map-marker"
            style={styles.icon}
          ></FontAwesomeIcon>
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}></View>
            <Text style={styles.valmiera}>Valmiera</Text>
          </View>
        </View>
        <View style={styles.materialIconTextboxStack}>
          <MaterialIconTextbox
            style={styles.materialIconTextbox}
          ></MaterialIconTextbox>
          <FontAwesomeIcon
            name="calendar-check-o"
            style={styles.icon4}
          ></FontAwesomeIcon>
        </View>
        <CupertinoSearchBarBasic
          style={styles.cupertinoSearchBarBasic}
        ></CupertinoSearchBarBasic>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.rect8Stack}>
            <View style={styles.rect8}></View>
            <View style={styles.rect9}></View>
            <Text style={styles.loremIpsum}>Šodien vārda dienu svin:</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.rect10Row}>
            <View style={styles.rect10}></View>
            <Svg viewBox="0 0 124.5 120" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={62}
                cy={60}
                rx={62}
                ry={60}
              ></Ellipse>
            </Svg>
          </View>
        </View>
        <CupertinoButtonGrey
          style={styles.cupertinoButtonGrey}
        ></CupertinoButtonGrey>
      </View>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}></View>
        <CupertinoButtonGrey1
          style={styles.cupertinoButtonGrey1}
        ></CupertinoButtonGrey1>
      </View>
      <View style={styles.rect5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(246,251,246,1)"
  },
  rect: {
    width: 351,
    height: 230,
    backgroundColor: "rgba(171,214,230,1)",
    marginTop: 52,
    marginLeft: 14
  },
  ellipse: {
    width: 111,
    height: 104
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 22,
    marginLeft: 19,
    marginTop: 42
  },
  rect6: {
    top: 0,
    left: 0,
    width: 152,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(171,214,230,1)"
  },
  valmiera: {
    top: 6,
    left: 21,
    position: "absolute",
    fontFamily: "taviraj-regular",
    color: "#121212",
    fontSize: 28
  },
  rect6Stack: {
    width: 152,
    height: 54,
    marginLeft: 11,
    marginTop: 37
  },
  ellipseRow: {
    height: 104,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 21,
    marginRight: 15
  },
  materialIconTextbox: {
    height: 43,
    width: 204,
    position: "absolute",
    left: 36,
    top: 0
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  materialIconTextboxStack: {
    width: 240,
    height: 43,
    marginTop: 7,
    marginLeft: 96
  },
  cupertinoSearchBarBasic: {
    height: 44,
    width: 315,
    marginTop: 3,
    marginLeft: 21
  },
  rect2: {
    top: 0,
    left: 2,
    width: 351,
    height: 74,
    position: "absolute",
    backgroundColor: "rgba(149,193,207,1)"
  },
  rect8: {
    top: 36,
    left: 56,
    width: 254,
    height: 37,
    position: "absolute",
    backgroundColor: "rgba(149,193,207,1)"
  },
  rect9: {
    top: 0,
    left: 0,
    width: 351,
    height: 37,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    top: 12,
    position: "absolute",
    fontFamily: "taviraj-600",
    color: "#121212",
    left: 90,
    fontSize: 16
  },
  rect8Stack: {
    width: 351,
    height: 73
  },
  rect3: {
    top: 73,
    width: 351,
    height: 195,
    position: "absolute",
    backgroundColor: "rgba(122,156,168,1)",
    left: 0,
    flexDirection: "row"
  },
  rect10: {
    width: 166,
    height: 120,
    backgroundColor: "rgba(122,156,168,1)"
  },
  ellipse2: {
    width: 125,
    height: 120,
    marginLeft: 18
  },
  rect10Row: {
    height: 120,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 23,
    marginTop: 60
  },
  cupertinoButtonGrey: {
    height: 44,
    width: 351,
    position: "absolute",
    left: 2,
    top: 80,
    backgroundColor: "rgba(136,175,188,1)"
  },
  rect2Stack: {
    width: 353,
    height: 268,
    marginLeft: 12
  },
  rect4: {
    top: 0,
    left: 2,
    width: 351,
    height: 72,
    position: "absolute",
    backgroundColor: "rgba(84,159,176,1)"
  },
  cupertinoButtonGrey1: {
    height: 44,
    width: 351,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(91,135,145,1)"
  },
  rect4Stack: {
    width: 353,
    height: 72,
    marginLeft: 12
  },
  rect5: {
    width: 351,
    height: 150,
    backgroundColor: "rgba(62,138,155,1)",
    marginLeft: 14
  }
});

export default Mainwindow;

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity, FlatList, ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VardaDienas from './resursi/VardaDienas'; 
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconTextbox from "./src/components/MaterialIconTextbox";
import CupertinoSearchBarBasic from "./src/components/CupertinoSearchBarBasic";


    

export default function App() {

const Stack = createStackNavigator();
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);


useEffect(() => {
  fetch(
'http://newsapi.org/v2/top-headlines?country=lv&category=business&apiKey=c5baacfcc6684a6aaeacd289d4bf00e3'
  )
    .then((response) => response.json())
    .then((json) => setData(json.articles))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    
}, []);

    function HomeScreen({ navigation }, props) {
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
                            <VardaDienas></VardaDienas>
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
                    <TouchableOpacity style={styles.container3, styles.cupertinoButtonGrey} 
                        onPress={() => navigation.navigate('DienasJoks')}>
                        <Text style={styles.dienasJoks}>Dienas izklaide</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rect4Stack}>
                    <View style={styles.rect4}></View>
                    <TouchableOpacity style={styles.cupertinoButtonGrey1}
                        onPress={() => navigation.navigate('Zinas')}>
                        <Text style={styles.apskatitZinas}>Apskatīt ziņas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rect5}></View>
            </View>
        );
    }

function ZinasScreen({navigation}) {
  return(
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text>Zinas</Text>,
      <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{ margin: 10 }}>
              <Button
                title={item.title}
                onPress={() =>
                  navigation.navigate('ZinasApraksts', {
                    title: item.title,
                    description: item.description,
                    publishedAt: item.publishedAt,
                    url: item.url,
                  })
                }
              />
              </View>
          )}
        />
      )}
      <Button 
        title = "Atgriezties uz sākumu"
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  )
}

function AprakstsScreen({navigation,route}) {

  const { title, description, publishedAt, url} = route.params;
  
    return (
        <View style={styles.containerAZ}>
            <View style={styles.rectAZ}>
                <View style={styles.textStackAZ}>
                    <Text style={styles.textAZ}>Ziņu apraksts</Text>
                    
                </View>
            </View>
                <View style={styles.rect3AZ}>
<Text>{JSON.stringify(title)}</Text>
      <Text>{JSON.stringify(description)}</Text>
      <Text>{'Datums: '}{JSON.stringify(publishedAt)}</Text>
      <Text>Avots: {JSON.stringify(url)}</Text>
                </View>
        <View style={styles.rect2AZ}>
<TouchableOpacity style={styles.materialButtonGrey3AZ}
                        onPress={() => navigation.navigate('Zinas')}>
                        <Text>Atgriezties uz ziņām</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.materialButtonGrey4AZ}
                        onPress={() => navigation.navigate('Home')}>
                        <Text>Atgriezties uz sākumu</Text>
                    </TouchableOpacity>
            </View>
    </View>
  );
}

function DienasScreen({navigation}) {

  return (
            <View style={styles.containerDJ}>
                <View style={styles.rectStackRowDJ}>
                    <View style={styles.rectStackDJ}>
                        <View style={styles.rectDJ}>
                            <View style={styles.textRowDJ}>
                                <Text style={styles.textDJ}>Dienas joks</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rect2DJ}>
                    <Text style={styles.nosaukumsDJ}>Joks: mēs laicīgi pabeigsim grupas darbu! </Text>
          </View>
          <TouchableOpacity style={styles.materialButtonGreyDJ}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.dienasJoks}>Atgriezties uz sākumu</Text>
                 </TouchableOpacity>
                <View style={styles.rect3DJ}></View>
            </View>
        );
}

return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options = {{title: 'DAG'}}/>
        <Stack.Screen name="Zinas"
          component={ZinasScreen}
          options = {{title: 'Ziņas'}}/>
        <Stack.Screen name="ZinasApraksts"
          component={AprakstsScreen}/>
        <Stack.Screen name="DienasJoks"
          component={DienasScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
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
    materialSpinner1: {
        width: 47,
        height: 42,
        marginLeft: 54
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
        alignItems: "center",
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
        alignItems: "center",
        top: 0,
        left: 0,
        width: 351,
        height: 90,
        position: "absolute",
        backgroundColor: "rgba(149,193,207,1)"
    },
    rect8: {
        alignItems: "center",
        top: 36,
        left: 56,
        width: 254,
        height: 60,
        position: "absolute",
        backgroundColor: "rgba(149,193,207,1)"
    },
    rect9: {
        alignItems: "center",
        top: 0,
        left: 0,
        width: 351,
        height: 37,
        position: "absolute",
        backgroundColor: "#E6E6E6"
    },
    loremIpsum: {
        alignItems: "center",
        top: 12,
        position: "absolute",
        fontFamily: "taviraj-600",
        color: "#121212",
        left: 90,
        fontSize: 16
    },
    rect8Stack: {
        alignItems: "center",
        width: 351,
        height: 73
    },
    rect3: {
        alignItems: "center",
        top: 73,
        width: 351,
        height: 195,
        position: "absolute",
        backgroundColor: "rgba(122,156,168,1)",
        left: 0,
        flexDirection: "row"
    },
    rect10: {
        alignItems: "center",
        width: 166,
        height: 120,
        backgroundColor: "rgba(122,156,168,1)"
    },
    ellipse2: {
        alignItems: "center",
        width: 125,
        height: 120,
        marginLeft: 18
    },
    rect10Row: {
        alignItems: "center",
        height: 120,
        flexDirection: "row",
        flex: 1,
        marginRight: 19,
        marginLeft: 23,
        marginTop: 60
    },
    cupertinoButtonGrey: {
        alignItems: "center",
        height: 44,
        width: 351,
        position: "absolute",
        left: 0,
        top: 80,
        backgroundColor: "rgba(136,175,188,1)"
    },
    rect2Stack: {
        alignItems: "center",
        width: 351,
        height: 268,
        marginLeft: 12
    },
    rect4: {
        alignItems: "center",
        top: 0,
        left: 0,
        width: 351,
        height: 72,
        position: "absolute",
        backgroundColor: "rgba(84,159,176,1)"
    },
    cupertinoButtonGrey1: {
        alignItems: "center",
        height: 44,
        width: 351,
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(91,135,145,1)"
    },
    rect4Stack: {
        alignItems: "center",
        width: 351,
        height: 72,
        marginLeft: 12
    },
    rect5: {
        alignItems: "center",
        width: 351,
        height: 50,
        backgroundColor: "rgba(62,138,155,1)",
        marginLeft: 14
    },
    container2: {
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
    },
    container3: {
        backgroundColor: "#8E8E93",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
        paddingLeft: 16,
        paddingRight: 16
    },
    dienasJoks: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "taviraj-500"
    },
    containerDJ: {
        flex: 1,
        flexDirection: "column",
        
    },
    rectDJ: {
        width: 351,
        height: 83,
        position: "absolute",
        backgroundColor: "rgba(136,175,188,1)",
        flexDirection: "row"
    },
    textDJ: {
        fontFamily: "taviraj-500",
        color: "rgba(243,242,242,1)",
        fontSize: 28,
        width: 153,
        height: 48
    },
    materialSpinnerDJ: {
        width: 47,
        height: 42,
        marginLeft: 54
    },
    textRowDJ: {
        height: 48,
        flexDirection: "row",
        flex: 1,
    },
    materialButtonGreyDJ: {
        height: 50,
        width: 351,
        backgroundColor: "rgba(136,175,188,1)"
    },
    rectStackDJ: {
        width: 356,
        height: 83
    },
    icon1DJ: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,

    },
    rectStackRowDJ: {
        height: 83,
        flexDirection: "row",

    },
    rect2DJ: {
        width: 353,
        height: 66,
        backgroundColor: "rgba(58,112,129,1)",

    },
    nosaukumsDJ: {
        fontFamily: "taviraj-500",
        color: "rgba(252,245,245,1)",
        fontSize: 18,
 
    },
    rect3DJ: {
        width: 353,
        height: 100,
        backgroundColor: "rgba(171,214,230,1)",
 
    },
    containerAZ: {
        flex: 1,
        flexDirection: "column"
    },
    rectAZ: {
        width: 351,
        height: 92,
        backgroundColor: "rgba(171,214,230,1)",
        marginTop: 60,
        marginLeft: 14
    },
    textAZ: {
        top: 32,
        position: "absolute",
        fontFamily: "taviraj-500",
        color: "rgba(250,243,243,1)",
        fontSize: 28,
        width: 261,
        height: 43,
        left: 80
    },
    materialSpinner2AZ: {
        width: 22,
        height: 22,
        position: "absolute",
        left: 307,
        top: 32
    },
    materialButtonGrey3AZ: {
        height: 60,
        width: 100,
        left: 0,
        top: 0,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "rgba(171,214,230,1)",
        textAlign: "center",
        fontWeight: "bold"
    },
    materialButtonGrey4AZ: {
        height: 60,
        width: 100,
        left: 0,
        top: 0,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "rgba(171,214,230,1)",
        textAlign: "center",
        fontWeight: "bold"
    },
    textStackAZ: {
        width: 341,
        height: 75
    },
    rect2AZ: {
        width: 351,
        height: 52,
        backgroundColor: "rgba(58,112,129,1)",
        marginLeft: 14,
        flexDirection: "row",
        flex: 1,
    },
    rect3AZ: {
        width: 351,
        height: 300,
        backgroundColor: "rgba(84,159,176,1)",
        marginLeft: 14
    }

});


import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VardaDienas from './resursi/VardaDienas'; //iesākts veidot vārda dienas;
import nameday from "nameday-api";


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

//jāpabeidz nākamajā funkcijā VardaDienas .js failā

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Sākums</Text>  
      <Button 
        title = "Apskatīt ziņas"
        onPress={() => navigation.navigate('Zinas')} 
      />
      <VardaDienas></VardaDienas>
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
    <View style={{margin:10, alignItems: 'center', justifyContent: 'center'}}>  
      <Text style={{fontSize: 24}}>{JSON.stringify(title)}</Text>
      <Text style={{ fontSize: 14}}>{JSON.stringify(description)}</Text>
      <Text style={{ fontSize: 14}}>{'Datums: '}{JSON.stringify(publishedAt)}</Text>
      <Text style={{ fontSize: 14 }}>Avots: {JSON.stringify(url)}</Text>
      <Button 
        title = "Atgriezties uz ziņām"
        onPress={() => navigation.navigate('Zinas')} 
      />
      <Button 
        title = "Atgriezties uz sākumu"
        onPress={() => navigation.navigate('Home')} 
      />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

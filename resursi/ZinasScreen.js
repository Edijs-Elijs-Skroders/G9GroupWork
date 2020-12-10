import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, Button, FlatList } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ZinasScreen({navigation}) {

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
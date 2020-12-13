import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, FlatList, Button } from 'react-native';

export default function VardaDienas({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch(
'https://api.abalin.net/today?country=lv'
    )
      .then((response) => response.json() )
      .then((json) => (json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
  }, []);
  
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{marginTop: 7}}>
              <Text>{item.lv}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

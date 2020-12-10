import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';

export default function VardaDienas({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
'https://api.abalin.net/today?country=lv'
    )
      .then((response) => response.json())
      .then((json) => (json.namedays))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ margin: 10 }}>
              <Text>{"Šodien vārda dienu svin: "}{item.lv}</Text>
              </View>
          )}
        />
    )}
    </View>
  );
}
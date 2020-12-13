import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, FlatList, Text } from 'react-native';

export default function VardaDienas({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(
      'https://api.abalin.net/today?country=lv'
    )
      .then((response) => response.json())
      .then(function (json) {
        var data = json.data.namedays.lv;
        var result = data != null ? data : 'No data available';
        setData(result)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <Text>{"Šodien vārda dienu svin: "}{data}</Text>
      )}
    </View>
  );
};
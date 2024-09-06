import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

const HomePage = (props) => {
  const windowWidth = Dimensions.get('window').width;
  const darkMode = useSelector(state => state.user.darkMode);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error(error);
        setError('Konum alınamadı');
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(`http://10.0.2.2:3000/weather?lat=${latitude}&lon=${longitude}`);
      if (!response.ok) {
        throw new Error('Hava durumu verisi alınamadı');
      }
      const jsonData = await response.json();
      setWeatherData(jsonData);
    } catch (error) {
      setError(error.message);
      console.warn('Error fetching data:', error);
    }
  };

  const fetchData = async (city) => {
    try {
      const response = await fetch(`http://10.0.2.2:3000/weather?city=${city}`);
      if (!response.ok) {
        throw new Error('Hava durumu verisi alınamadı');
      }
      const jsonData = await response.json();
      setData([jsonData]);
    } catch (error) {
      setError(error.message);
      console.warn('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchData = () => {
    if (city.trim()) {
      setLoading(true);
      fetchData(city);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 5, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ color: darkMode ? "white" : "black", fontSize: 30, fontWeight: 'bold' }}>{item.location.name}</Text>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image source={{ uri: `https:${item.current.condition.icon}` }}
               style={{ width: 140, aspectRatio: 1 }}/>
        <View>
          <Text style={{ color: darkMode ? "white" : "black" }}>{`Sıcaklık: ${item.current.temp_c} °C`}</Text>
          <Text style={{ color: darkMode ? "white" : "black", width: windowWidth * 3 / 5 }}>{`Durum: ${item.current.condition.text}`}</Text>
          <Text style={{ color: darkMode ? "white" : "black" }}>{`Rüzgar Hızı: ${item.current.wind_kph} km/h`}</Text>
          <Text style={{ color: darkMode ? "white" : "black" }}>{`Nem: ${item.current.humidity}%`}</Text>
        </View>
      </View>
    </View>
  );

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ backgroundColor: darkMode ? "black" : "white", flex: 1, padding: 10 }}>
      <TouchableOpacity activeOpacity={1}
                        style={{ alignSelf: "center", width: windowWidth / 2, height: 10, backgroundColor: "red", marginBottom: 10 }}
                        onPress={() => props.navigation.navigate('Calendar')}/>
      {location && weatherData && (
        <View style={{ backgroundColor: darkMode ? "black" : "white", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ color: darkMode ? "white" : "black", fontSize: 24, fontWeight: 'bold' }}>
            {weatherData.location.name}, {weatherData.location.country}
          </Text>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image source={{ uri: `https:${weatherData.current.condition.icon}` }}
                   style={{ width: 100, aspectRatio: 1 }}/>
            <View>
              <Text style={{ fontSize: 20, color: darkMode ? "white" : "black" }}>{`Sıcaklık: ${weatherData.current.temp_c} °C`}</Text>
              <Text style={{ fontSize: 16, color: darkMode ? "white" : "black" }}>{`Durum: ${weatherData.current.condition.text}`}</Text>
            </View>
          </View>
        </View>
      )}
      <TextInput placeholder="Şehir ismi girin"
                 value={city}
                 onChangeText={setCity}
                 style={{
                   height: 40,
                   borderColor: 'gray',
                   borderWidth: 1,
                   paddingLeft: 8,
                   marginBottom: 10,
                   color: darkMode ? "white" : "black" }}/>
      <TouchableOpacity activeOpacity={0.7}
                        onPress={handleFetchData}
                        style={{
                          backgroundColor: darkMode ? "gray" : "lightblue",
                          padding: 10,
                          alignItems: 'center',
                          borderRadius: 5 }}>
        <Text style={{ color: darkMode ? "white" : "black", fontSize: 20 }}>Hava Durumu NE</Text>
      </TouchableOpacity>
      <FlatList data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
};

export default HomePage;



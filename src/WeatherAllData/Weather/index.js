import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Weather = props => {
  const bottomSheetRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [indexx, setIndexx] = useState(0);
  const [barVisible, setBarVisible] = useState(true);
  const [barVisiblee, setBarVisiblee] = useState(true);
  const [barVisible2, setBarVisible2] = useState(true);

  const [data, setData] = useState(null);
  useEffect(() => {getData()}, []);

  const snapPoints = ['45%','75%'];
  const handleSheetChanges = useCallback(newIndex => {}, []);

  async function getData() {
    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=37.81021&lon=-122.42282&language=en&units=auto';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '637479bf0dmshf4bbd543182f9b4p1ed2f6jsnd130a3fbee43',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.warn(result)
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSnapPress = async () => {
    setBarVisible(!barVisible);
    setIndex(index === 0 ? 1 : 0);
    bottomSheetRef?.current?.snapToIndex(index);
  };
  const handleSnapPress2 = async () => {
    setBarVisiblee(!barVisiblee);
  };
  const handleSnapPress3 = async () => {
    setBarVisible2(!barVisible2);
  };
  const handleListChange = index => {
    setIndexx(index)
  };

  if (data == null) {
    return (
      <ActivityIndicator/>
    );
  }
  if (data == null) {return null}
  return (
    <Modal visible={true}>
      <View>
        <ImageBackground source={require('../WeatherPageImages/background.png')}
                         style={{height: '100%', width: '100%'}}
                         resizeMode="cover">
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../WeatherPageImages/HousePage.png')}
                   style={{width: '100%'}}
                   resizeMode="contain"/>
            <View style={{position: 'absolute', alignItems: 'center'}}>
              <Text style={{marginTop: -260, marginLeft: 0, fontSize: 20, fontWeight: '300', color: 'rgba(255,255,255,0.81)'}}>
                Mostly Clear
              </Text>
              <Text style={{marginTop: -85, marginLeft: 0, fontSize: 50, color: 'white'}}>
                19°
              </Text>
              <Text style={{marginTop: -90, marginLeft: 0, fontSize: 27, fontWeight: 'bold', color: 'white'}}>
                ISTANBUL
              </Text>
            </View>
          </View>
          <BottomSheet
            ref={bottomSheetRef}
            index={index}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enableContentPanningGesture={true}
            enableHandlePanningGesture={true}
            handleComponent={() => (
              <View style={{marginBottom: -10, backgroundColor: '#7B61FF', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                <TouchableOpacity onPress={() => {handleSnapPress(barVisible)}}
                                  activeOpacity={1}
                                  style={{alignItems: 'center', backgroundColo: '#612FAB'}}>
                  <View style={{flexDirection: 'row', marginTop: 6, marginBottom: 33}}>
                    <Text style={{width: 40, borderWidth: 3, height: 0.1, marginBottom: 5}}/>
                  </View>
                </TouchableOpacity>
              </View>
            )}>

            <BottomSheetFlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{backgroundColor: '#7B61FF'}}
              data={data.daily.data}
              renderItem={({item, index}) => {
                return(

                  <View style={{marginTop: 10, marginLeft: 6, marginRight: 5, borderRadius: 20, overflow: 'hidden', height: 180, borderWidth: 1, padding: 16, backgroundColor: '#583bb1', borderColor: '#C493DBFF'}}>
                    <TouchableOpacity onPress={() => handleListChange(index)}>
                      <View style={{alignItems: 'center', width: 48}}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 14}}>
                          {item.day}
                        </Text>
                        <Image source={require('../WeatherBigIcon/MoonCloudFastWind.png')}
                               style={{width: 54, height: 54, marginBottom: 14}}/>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                          {item.temperature}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}}
            />
            <ScrollView  style={{height: windowHeight / 5, backgroundColor: '#7B61FF'}} showsVerticalScrollIndicator={false}>
              <View style={{ marginRight: 15, marginLeft: 15, borderWidth: 1, padding: 20, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  * WEATHER
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginBottom: 5}}>
                  {data.daily.data[indexx].weather}
                </Text>
              </View>

              <View style={{ marginRight: 15, marginLeft: 15, borderWidth: 1, padding: 20, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  * SUMMARY
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginBottom: 5}}>
                  {data.daily.data[indexx].summary}
                </Text>
              </View>

              <View style={{ marginRight: 15, marginLeft: 15, borderWidth: 1, padding: 20, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  * TEMPERATURE
                </Text>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white', marginBottom: 5}}>
                  {data.daily.data[indexx].temperature}°
                </Text>
                <View style={{flexDirection: 'row',fontSize: 20}}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    MIN:  {data.daily.data[indexx].temperature_min}°
                  </Text>
                  <Text style={{marginLeft: 220, fontSize: 15, color: 'white', position: 'absolute'}}>
                    MAX:  {data.daily.data[indexx].temperature_max}°
                  </Text>
                </View>
              </View>

              <View style={{ marginRight: 15, marginLeft: 15, borderWidth: 1, padding: 20, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  * WIND
                </Text>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white', marginBottom: 5}}>
                  {data.daily.data[indexx].wind.speed} km/s
                </Text>
                <View style={{flexDirection: 'row',fontSize: 20}}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    Gust:  {data.daily.data[indexx].wind.gusts}
                  </Text>
                  <Text style={{marginLeft: 120, fontSize: 15, color: 'white', position: 'absolute'}}>
                    Dir:  {data.daily.data[indexx].wind.dir}
                  </Text>
                  <Text style={{marginLeft: 240, fontSize: 15, color: 'white', position: 'absolute'}}>
                    Angle:  {data.daily.data[indexx].wind.angle}
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%',height: 180, borderRadius: 15, backgroundColor: '#48319D'}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * FEELS LIKE
                  </Text>
                  <Text style={{fontSize: 45, fontWeight: 'bold', color: 'white', marginBottom: 15, marginLeft: 35}}>
                    {data.daily.data[indexx].feels_like}°
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
                    MIN:  {data.daily.data[indexx].feels_like_min}°
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
                    MAX:  {data.daily.data[indexx].feels_like_max}°
                  </Text>
                </View>

                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%', height: 180, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * WIND CHILL
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 45, fontWeight: 'bold', color: 'white', marginBottom: 15, marginLeft: 35}}>
                      {data.daily.data[indexx].wind_chill}
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 30, marginLeft: 8}}>
                      km/h
                    </Text>
                  </View>
                  <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
                    MIN:  {data.daily.data[indexx].wind_chill_min}
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
                    MAX:  {data.daily.data[indexx].wind_chill_max}
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%',height: 180, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * DEW POINT
                  </Text>
                  <Text style={{fontSize: 45, fontWeight: 'bold', color: 'white', marginBottom: 15, marginLeft: 35}}>
                    {data.daily.data[indexx].dew_point}
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
                    MIN:  {data.daily.data[indexx].dew_point_min}
                  </Text>
                  <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
                    MAX:  {data.daily.data[indexx].dew_point_max}
                  </Text>
                </View>
                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%', height: 180, borderRadius: 15, backgroundColor: '#48319D'}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * CLOUD COVER
                  </Text>
                  <Text style={{fontSize: 80, fontWeight: 'bold', color: 'white', marginBottom: 15, marginLeft: 35}}>
                    {data.daily.data[indexx].cloud_cover}
                  </Text>
                </View>
              </View>

              <View style={{ marginRight: 15, marginLeft: 15, borderWidth: 1, padding: 20, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  * PROBABILITY
                </Text>
                  <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
                    Precipitation: %{data.daily.data[indexx].probability.precipitation}
                  </Text>
                  <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
                    Storm: %{data.daily.data[indexx].probability.storm}
                  </Text>
                  <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
                    Freeze: %{data.daily.data[indexx].probability.freeze}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>

                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%',height: 180, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * OZONE
                  </Text>
                  <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white', marginLeft: 12, marginTop: 20}}>
                    {data.daily.data[indexx].ozone}
                  </Text>
                </View>

                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%', height: 180, borderRadius: 15, backgroundColor: '#48319D'}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * HUMIDITY
                  </Text>
                  <Text style={{fontSize: 80, fontWeight: 'bold', color: 'white', marginBottom: 15, marginLeft: 35}}>
                    {data.daily.data[indexx].humidity}
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>

                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%',height: 180, borderRadius: 15, backgroundColor: '#48319D', marginBottom: 20}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * PREDICTABILITY
                  </Text>
                  <Text style={{fontSize: 50, fontWeight: 'bold', color: 'white', marginLeft: 12, marginTop: 20}}>
                    {data.daily.data[indexx].predictability}
                  </Text>
                </View>

                <View style={{ marginRight: 10, marginLeft: 10, borderWidth: 1, width: '45%', height: 180, borderRadius: 15, backgroundColor: '#48319D'}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 15, marginLeft: 10, marginBottom: 10}}>
                    * xxx
                  </Text>
                </View>
              </View>

            </ScrollView>
          </BottomSheet>


          {barVisible && (
            <View style={{position: 'absolute', bottom: 0, height: 135, width: '100%', backgroundColor: '#7a60fd'}}>
              <View>
                <TouchableOpacity style={{position: 'absolute'}}
                                  activeOpacity={1}
                                  onPress={() => props.navigation.navigate('HomePage')}>
                  <Image style={{width: 65, height: 65, marginTop: 45, marginLeft: 35}}
                         source={require('../WeatherPageImages/Hover.png')}/>
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => {handleSnapPress2(barVisiblee)}}
                                  activeOpacity={1}>
                  <Image style={{width: 130, height: 130, marginTop: 20}}
                         source={require('../WeatherPageImages/plusIcon.png')}/>
                </TouchableOpacity>
              </View>
              <View style={{position: 'absolute', marginLeft: 300, marginTop: 20}}>
                <TouchableOpacity onPress={() => {handleSnapPress3(barVisible2)}}>
                  <Image style={{width: 70, height: 70, marginTop: 28, marginLeft: 15}}
                         source={require('../WeatherPageImages/ListPageing.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          )}


          {!barVisiblee && (
            <View style={{position: 'absolute', bottom: 0, height: '100%', width: '100%', backgroundColor: '#7a60fd'}}>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <TouchableOpacity onPress={() => {handleSnapPress2(barVisiblee)}}
                                  activeOpacity={1}>
                  <Text style={{backgroundColor: 'green', borderWidth: 3, width: 20, height: 20, borderRadius: 20}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 40, color: 'yellow', fontWeight: 'bold'}}>
                  0
                </Text>
              </View>
            </View>
          )}
          {!barVisible2 && (
            <View style={{position: 'absolute', bottom: 0, height: '100%', width: '100%', backgroundColor: 'pink'}}>
              <View style={{marginLeft: 10, marginTop: 10}}>
                <TouchableOpacity onPress={() => {handleSnapPress3(barVisible2)}}
                                  activeOpacity={1}>
                  <Text style={{backgroundColor: 'yellow', borderWidth: 3, width: 20, height: 20, borderRadius: 20}}/>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ImageBackground>
      </View>
    </Modal>
  );
};

export default Weather;

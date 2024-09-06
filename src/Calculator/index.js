import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const Calculator = () => {
  const navigation = useNavigation();
  const darkMode = useSelector(state => state.user.darkMode);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: darkMode ? 'black' : 'white'}}>
      <View style={{ padding: 20 }}>
        <Text style={{fontWeight: "bold", color: darkMode ? '#fff' : '#000', fontSize: 30 }}>
          HESAPMATİKx2.
        </Text>
      </View>
      {result === '9999' && (
        <View style={{position: "absolute", alignSelf: "center", marginTop: windowHeight / 5, }}>
          <TouchableOpacity onPress={() => {navigation.navigate('WinPage')}}
                            style={{justifyContent:"center", width: 60, aspectRatio: 1, backgroundColor: "blue", borderRadius: 20}}>
            <Text style={{textAlign:"center", color: "yellow", fontWeight:"bold", fontSize: 30}}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 1, justifyContent: 'flex-end', padding: 20 }}>

        <Text style={{ fontSize: 36, fontWeight: "bold", textAlign: 'right', marginBottom: 10, color: darkMode ? '#fff' : '#000' }}>
          {input}
        </Text>
        <View style={{flexDirection: "row",justifyContent: 'flex-end'}}>
          <Text style={{ fontSize: 28, textAlign: 'right', marginBottom: 20, color: darkMode ? '#fff' : '#000' }}>
            {result}
          </Text>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => handleInput('1')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('2')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('3')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('+')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => handleInput('4')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('5')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('6')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('-')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => handleInput('7')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('8')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('9')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('*')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TouchableOpacity onPress={handleClear}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#7a0808' : '#ff0000',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('0')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCalculate}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#007a0a' : '#00fd22',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput('/')}
                              activeOpacity={1}
                              style={{
                                width: '22%',
                                padding: 20,
                                backgroundColor: darkMode ?  '#5d5d5d' : '#e0e0e0',
                                alignItems: 'center',
                                borderRadius: 5 }}>
              <Text style={{ color: darkMode ? "white" : "black", fontSize: 24 }}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;

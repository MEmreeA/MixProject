import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Modal, Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [Translate, setTranslate] = useState(false);
  const [barVisible, setBarVisible] = useState(false);

  const handleLogin = async () => {
    if (username === '' || password === '') {
      setError('Kullanıcı adı ve şifre boş olamaz');
    } else {
      try {
        const user = await AsyncStorage.getItem(username);
        const parsedUser = JSON.parse(user);

        if (parsedUser && parsedUser.password === password) {
          Alert.alert('Hoşgeldin', 'Giriş başarılı!', [
            { text: 'Tamam', onPress: () => navigation.navigate('HomePage') },
          ]);
        } else {
          setError('Geçersiz kullanıcı adı veya şifre');
          setUsername('');
          setPassword('');
        }
      } catch (error) {
        setError('Kullanıcı doğrulama hatası');
      }
    }
  };

  const handleCreateUser = async (newUsername, email, newPassword, confirmPassword) => {
    if (newUsername === '' || email === '' || newPassword === '') {
      setError('Tüm alanlar doldurulmalıdır');
    } else if (newPassword !== confirmPassword) {
      setError('Şifreler uyuşmuyor');
    } else {
      try {
        const newUser = {
          username: newUsername,
          email,
          password: newPassword,
        };
        await AsyncStorage.setItem(newUsername, JSON.stringify(newUser));
        Alert.alert('Başarılı', 'Kullanıcı kaydedildi!', [
          { text: 'Tamam', onPress: () => setBarVisible(false) }, // Kayıt başarılı olursa bar'ı kapat
        ]);
      } catch (error) {
        setError('Kullanıcı kaydedilemedi');
      }
    }
  };

  return (
    <Modal>
      <TouchableOpacity onPress={() => setTranslate(!Translate)}
                        style={{
                          marginTop: 30,
                          marginLeft: windowWidth * 5 / 6,
                          position: "absolute",
                          width: 40,
                          aspectRatio: 1,
                          backgroundColor: Translate ? "blue" : "red"}}/>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
        <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
          {Translate ? "Welcome to Zamazingo" : "Zamazingo'ya Hoşgeldin"}
        </Text>
        <TextInput placeholder={Translate ? "UserName" : "Kullanıcı Adı"}
                   placeholderTextColor={"gray"}
                   value={username}
                   onChangeText={setUsername}
                   style={{
                     color: "black",
                     height: 50,
                     borderColor: 'gray',
                     borderWidth: 1,
                     marginBottom: 15,
                     paddingHorizontal: 10,
                     borderRadius: 5 }}/>

        <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 15 }}>
          <TextInput placeholder={Translate ? "Password" : "Şifre"}
                     placeholderTextColor={"gray"}
                     secureTextEntry={!isPasswordVisible}
                     value={password}
                     onChangeText={setPassword}
                     style={{
                       color: "black",
                       height: 50,
                       flex: 1,
                       paddingHorizontal: 10 }}/>
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            style={{ paddingHorizontal: 10 }}>
            <View style={{
              borderWidth: 2,
              borderRadius: 20,
              width: 22,
              aspectRatio:1,
              backgroundColor: isPasswordVisible ? "red" : "white",
              borderColor: isPasswordVisible ? "red" : "black"
            }}/>
          </TouchableOpacity>
        </View>
        {error ? (
          <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
            {error}
          </Text>
        ) : null}

        <TouchableOpacity onPress={handleLogin}
                          style={{
                            backgroundColor: 'blue',
                            padding: 15,
                            borderRadius: 5,
                            alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            {Translate ? "Login" : "Giriş Yap"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setBarVisible(!barVisible)}
                          style={{
                            backgroundColor: 'green',
                            padding: 15,
                            borderRadius: 5,
                            marginTop: 10,
                            alignItems: 'center'}}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            {Translate ? "CreateUser" : "Kayıt Ol"}
          </Text>
        </TouchableOpacity>

        {barVisible && (
          <View style={{ position: 'absolute', bottom: 0, width: windowWidth,
            backgroundColor: 'lightgray',
            height: (windowHeight / 2) - 30,
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}>
            <TouchableOpacity onPress={() => setBarVisible(!barVisible)}
                              style={{ alignSelf: "center", width: 60, height: 10, backgroundColor: "black", marginBottom: 10,}}/>
            <TextInput placeholder={Translate ? "UserName" : "Kullanıcı Adı"}
                       placeholderTextColor="gray"
                       style={{
                         color: 'black',
                         height: 50,
                         borderColor: 'gray',
                         borderWidth: 1,
                         marginBottom: 15,
                         paddingHorizontal: 10,
                         borderRadius: 5,
                       }}
                       onChangeText={setUsername}/>

            <TextInput placeholder={Translate ? "E-mail" : "E-posta"}
                       placeholderTextColor="gray"
                       keyboardType="email-address"
                       style={{
                         color: 'black',
                         height: 50,
                         borderColor: 'gray',
                         borderWidth: 1,
                         marginBottom: 15,
                         paddingHorizontal: 10,
                         borderRadius: 5,
                       }}
                       onChangeText={(text) => setEmail(text)}/>

            <TextInput placeholder={Translate ? "Password" : "Şifre"}
                       placeholderTextColor="gray"
                       secureTextEntry={true}
                       style={{
                         color: 'black',
                         height: 50,
                         borderColor: 'gray',
                         borderWidth: 1,
                         marginBottom: 15,
                         paddingHorizontal: 10,
                         borderRadius: 5,
                       }}
                       onChangeText={(text) => setPassword(text)}/>

            <TextInput placeholder={Translate ? "Password Again" : "Şifre Tekrar"}
                       placeholderTextColor="gray"
                       secureTextEntry={true}
                       style={{
                         color: 'black',
                         height: 50,
                         borderColor: 'gray',
                         borderWidth: 1,
                         marginBottom: 15,
                         paddingHorizontal: 10,
                         borderRadius: 5,
                       }}
                       onChangeText={(text) => setConfirmPassword(text)}/>

            <TouchableOpacity onPress={() => handleCreateUser(username, email, password, confirmPassword)}
                              style={{
                                backgroundColor: 'blue',
                                padding: 15,
                                borderRadius: 5,
                                alignItems: 'center',
                              }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                {Translate ? "CreateUser" : "Kayıt Ol"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default LoginScreen;

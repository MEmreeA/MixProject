
//TODO: LoginScreen OLD VERSİON

// import React, { useRef, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, Modal, Dimensions } from "react-native";
// import { useNavigation } from '@react-navigation/native';
//
// const LoginScreen = (props) => {
//   const navigation = useNavigation();
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;
//
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [Translate, setTranslate] = useState(false);
//
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);
//
//   const handleLogin = () => {
//     if (username === '' || password === '') {
//       setError('Kullanıcı adı ve şifre boş olamaz');
//     } else if (username === 'Emre' && password === '1234') {
//       Alert.alert('Hoşgeldin', 'Giriş başarılı!', [{ text: 'Tamam', onPress: () => navigation.navigate('HomePage') }]);
//     } else {
//       setError('Geçersiz kullanıcı adı veya şifre');
//       if (usernameRef.current && passwordRef.current) {
//         usernameRef.current.clear();
//         passwordRef.current.clear();
//         setUsername('');
//         setPassword('');
//       }
//     }
//   };
//
//   return (
//     <Modal>
//       <TouchableOpacity onPress={() => setTranslate(!Translate)}
//                         style={{
//                           marginTop: 30,
//                           marginLeft: windowWidth * 5 / 6,
//                           // alignSelf: "flex-end",
//                           position: "absolute",
//                           width: 40,
//                           aspectRatio: 1,
//                           backgroundColor: Translate ? "blue" : "red"}}/>
//       <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
//         <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
//           {/*Zamazingo'ya Hoşgeldin*/}
//           {Translate ? "Welcome to Zamazingo" : "Zamazingo'ya Hoşgeldin"}
//         </Text>
//         <TextInput placeholder = {Translate ? "UserName" : "Kullanıcı Adı"}
//                    placeholderTextColor={"gray"}
//                    value={username}
//                    onChangeText={setUsername}
//                    ref={usernameRef}
//                    style={{
//                      color: "black",
//                      height: 40,
//                      borderColor: 'gray',
//                      borderWidth: 1,
//                      marginBottom: 15,
//                      paddingHorizontal: 10,
//                      borderRadius: 5 }}/>
//
//         <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 15 }}>
//           <TextInput placeholder={Translate ? "Password" : "Şifre"}
//                      placeholderTextColor={"gray"}
//                      secureTextEntry={!isPasswordVisible}
//                      value={password}
//                      onChangeText={setPassword}
//                      ref={passwordRef}
//                      style={{
//                        color: "black",
//                        height: 40,
//                        flex: 1,
//                        paddingHorizontal: 10 }}/>
//           <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}
//                             style={{ paddingHorizontal: 10 }}>
//             <View style={{
//               borderWidth: 2,
//               borderRadius: 20,
//               width: 22,
//               aspectRatio:1,
//               backgroundColor: isPasswordVisible ? "red" : "white",
//               borderColor: isPasswordVisible ? "red" : "black"
//             }}/>
//           </TouchableOpacity>
//         </View>
//         {error ? (
//           <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
//             {error}
//           </Text>
//         ) : null}
//
//         <TouchableOpacity onPress={() => props.navigation.navigate('CreateUser')}
//                           style={{
//                             width: 200,
//                             alignSelf: "center",
//                             backgroundColor: 'blue',
//                             padding: 15,
//                             borderRadius: 20,
//                             alignItems: 'center' }}>
//           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
//             {Translate ? "CreateUser" : "KayıtOl Yap"}
//           </Text>
//         </TouchableOpacity>
//
//         <TouchableOpacity onPress={handleLogin}
//                           style={{
//                             backgroundColor: 'blue',
//                             padding: 15,
//                             borderRadius: 5,
//                             alignItems: 'center' }}>
//           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
//             {Translate ? "Login" : "Giriş Yap"}
//           </Text>
//         </TouchableOpacity>
//
//       </View>
//     </Modal>
//   );
// };
//
// export default LoginScreen;


//TODO: CreateUser PAGE OLD VERSİON

// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';
//
// const CreateUser = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//
//   const handleCreateUser = () => {
//     axios.post('http://192.168.150.149:3000/api/users', { username, password }) // IP adresinizi güncelleyin
//       .then(response => {
//         Alert.alert('Başarılı', response.data.message);
//       })
//       .catch(error => {
//         Alert.alert('Hata', error.response?.data?.error || 'Bir hata oluştu');
//       });
//   };
//
//   return (
//     <View style={{ backgroundColor: "pink", padding: 20 }}>
//       <TextInput
//         placeholderTextColor={'black'}
//         placeholder="Kullanıcı Adı"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholderTextColor={'black'}
//         placeholder="Şifre"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Kullanıcı Oluştur" onPress={handleCreateUser} />
//     </View>
//   );
// };
//
// export default CreateUser;

import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      dispatch(login('47074674-abbf0c58d927439ebe148907e'));
      Alert.alert('Login Successful', 'You are now logged in!');
    } else {
      Alert.alert('Invalid credentials', 'Please check your username and password.');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/loginScreen';
import HomeScreen from '../screens/homeScreen';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { login } from '../features/auth/authSlice';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        if (storedToken) {
          dispatch(login(storedToken));
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    checkToken();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

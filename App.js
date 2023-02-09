import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';

import * as firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH5Ut5HSdarfWEpB6hYPH0khdmPo6wbHg",
  authDomain: "matrimonyapp-ff84c.firebaseapp.com",
  projectId: "matrimonyapp-ff84c",
  storageBucket: "matrimonyapp-ff84c.appspot.com",
  messagingSenderId: "803438044667",
  appId: "1:803438044667:web:75a2a9dc934c8aebe0975e",
  measurementId: "G-Z5G2N17TDB"
};

if(firebase.apps.length == 0 ){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



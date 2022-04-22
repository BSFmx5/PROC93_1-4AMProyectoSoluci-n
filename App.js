import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./pantalla/Inicio";
import StartMapScreen from "./pantallas/MapaEstelar";
import DailyPicScreen from "./pantallas/FotoDiaria";
import SpaceCraftScreen from "./pantallas/Nave espacial";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Mapa estelar" component={StartMapScreen} />
        <Stack.Screen name="Foto diaria" component={DailyPicScreen} />
        <Stack.Screen name="Nave espacial" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

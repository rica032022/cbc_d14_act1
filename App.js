import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlueScreen from './Screens/BlueScreen';
import RedScreen from './Screens/RedScreen';
import GreenScreen from './Screens/GreenScreen';

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.title}>Home Screen</Text>
      
      {}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Blue')}>
        <Text style={styles.buttonText}>Go to Blue</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Red')}>
        <Text style={styles.buttonText}>Go to Red</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Green')}>
        <Text style={styles.buttonText}>Go to Green</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blue" component={BlueScreen} />
        <Stack.Screen name="Red" component={RedScreen} />
        <Stack.Screen name="Green" component={GreenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',  
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

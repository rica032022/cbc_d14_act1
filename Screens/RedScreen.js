import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RedScreen({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: 'red' }]}>
      <Text style={styles.text}>Red Screen</Text>

      
      <TouchableOpacity 
        style={styles.button1}
        onPress={() => navigation.navigate('Red')}>
        <Text style={styles.buttonText}>Go to Red</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button2}
        onPress={() => navigation.navigate('Blue')}>
        <Text style={styles.buttonText}>Go to Blue</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button3}
        onPress={() => navigation.navigate('Green')}>
        <Text style={styles.buttonText}>Go to Green</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button4}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 32,
    marginBottom: 30,
  },
  button1: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },

  button2: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },

  button3: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },

  button4: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

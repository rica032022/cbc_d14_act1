import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
      <Button title="Go Details" onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
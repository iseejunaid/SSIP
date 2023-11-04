import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  
  const handleStart = () => {
    navigation.navigate('Quiz', { name });
    setName('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.heading1}>Let's Play Quiz,</Text>
        <Text style={styles.heading3}>Enter Your Name Below:</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#F4F8FF"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.greetingText}>Hi, {name}</Text>
        <TouchableOpacity style={styles.startButton}
        onPress={handleStart}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44455D',
  },
  heading: {
    flex: 0.35,
    width: '90%',
    justifyContent: 'flex-end',
  },
  heading1: {
    color: '#F4F8FF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading3: {
    color: '#F4F8FF',
    fontSize: 15,
  },
  inputContainer: {
    flex: 0.35,
    width: '90%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#282D45',
    width: '100%',
    height: '20%',
    borderRadius: 10,
    paddingLeft: 10,
    color: '#F4F8FF',
    borderColor: '#1ED8B6',
    borderWidth: 1,
  },
  buttonContainer: {
    flex: 0.45,
    width: '90%',
    alignItems: 'center',
  },
  greetingText: {
    color: '#F4F8FF',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginBottom: '2%',
  },
  startButton: {
    backgroundColor: '#1ED8B6',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#F4F8FF',
    fontSize: 20,
  },
});

export default HomeScreen;

import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const Screen1Label2 = ({ label, value}) => {
  
  return (
    <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text
        style={styles.valueInput}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    width: '100%',
    justifyContent: 'center',
  },
  label: {
    fontSize: 25,
    color: '#2A7CB0',
    marginLeft: '5%',
  },
  valueInput: {
    fontSize: 30,
    color: 'white',
    left: '5%',
    top: '5%',
    fontWeight: 'bold',
  },
});

export default Screen1Label2;

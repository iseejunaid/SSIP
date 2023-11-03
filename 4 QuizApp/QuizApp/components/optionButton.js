import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OptionButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor:'#1ED8B6',
    alignItems: 'center',
    width:'90%',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OptionButton;

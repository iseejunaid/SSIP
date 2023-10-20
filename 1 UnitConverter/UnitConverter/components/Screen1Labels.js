import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import CustomModal from './Modal';

const Screen1Labels = ({ label,data,isTouchable,labelModal}) => {
  const [text, setText] = useState('0');
  
  const toggleLabelModal = () => {
  };
  
  return (
    <View style={styles.container}>
      {isTouchable ? (
        <TouchableOpacity style={styles.labelButton} onPress={() => setLabelModal(true)}>
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
      <TextInput
        style={styles.valueInput}
        value={text}
        onChangeText={setText}
        placeholder="Enter value"
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      <CustomModal isModalVisible={labelModal} toggleModal={toggleLabelModal} headingText = 'Select' data={data}/>
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
  labelButton: {
    width: '40%',
    height: '40%',
    left: '2%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  valueInput: {
    fontSize: 30,
    color: 'white',
    left: '5%',
    top: '5%',
    fontWeight: 'bold',
  },
});

export default Screen1Labels;

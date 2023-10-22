import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import CustomModal from './Modal';
import conversionFactors from '../helpers/conversionFactors.json'

const Screen1Labels = ({ label, isTouchable, unit, setSelected }) => {
  const [text, setText] = useState('0');
  const [isModalVisible, setModalVisible] = useState(false);
  const isFirstRender = useRef(true);

  const factors = conversionFactors[unit];
  const data = Object.keys(factors);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      if (isTouchable) {
        toggleModal();
      }
    } else {
      isFirstRender.current = false;
    }
  }, [unit]);

  return (
    <View style={styles.container}>
      {isTouchable ? (
        <TouchableOpacity
          style={styles.labelButton}
          onPress={toggleModal}
        >
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
      {isTouchable ? (
        <CustomModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          headingText="Type"
          data={data}
          setSelected={setSelected}
        />
      ) : null}
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

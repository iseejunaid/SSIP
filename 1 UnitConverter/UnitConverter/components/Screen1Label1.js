import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import CustomModal from './Modal';
import conversionFactors from '../helpers/conversionFactors.json'

const Screen1Label1 = ({ label, unit, setSelected, value, setValue }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const isFirstRender = useRef(true);
  const factors = conversionFactors[unit];
  const data = Object.keys(factors);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    if (!isFirstRender.current) {
      toggleModal();
    } else {
      isFirstRender.current = false;
    }
  }, [unit]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.labelButton}
        onPress={toggleModal}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.valueInput}
        value={value.toString()}
        onChangeText={setValue}
        placeholder="0"
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      <CustomModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        headingText="Type"
        data={data}
        setSelected={setSelected}/>
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

export default Screen1Label1;

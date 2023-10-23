import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import CustomModal from './Modal';
import conversionFactors from '../helpers/conversionFactors.json'

const Screen1Labels = ({ label, isTouchable, unit, setSelected, value }) => {
  const [text1, setText1] = useState('0');
  const [text2, setText2] = useState('0');
  const [isModalVisible, setModalVisible] = useState(false);
  const isFirstRender = useRef(true);
  const factors = conversionFactors[unit];
  const data = Object.keys(factors);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // useEffect(() => {
  //   if(isTouchable){
  //     const result = text1*value;
  //     console.log(JSON.stringify(result));
  //     setText2(JSON.stringify(result));
  //   }
  // }, [text1])

  useEffect(() => {
    if (isTouchable) {
      const result = text1 * value;
      setText2(result.toString());
      console.log("text2: " + text2);
    }
  }, [text1, value, isTouchable]);

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
      
      { isTouchable ?(
      <TextInput
        style={styles.valueInput}
        value={text1}
        onChangeText={setText1}
        placeholder="Enter value"
        placeholderTextColor="white"
        keyboardType="numeric"
      />) : (
        <TextInput
        style={styles.valueInput}
        value={console.log(text2)}
        onChangeText={setText2}
        placeholder={text2}
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      )
      }
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

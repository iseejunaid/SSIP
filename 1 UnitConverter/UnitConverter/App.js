import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import conversionFactors from './helpers/conversionFactors.json';
import Screen1Labels from './components/Screen1Labels';
import ConversionInfo from './components/ConversionInfo';
import Header from './components/header';
// done most of work, modify labels when clicked and also value
export default function App() {
  const [unit, setUnit] = useState('weight');
  const [label1, setLabel1] = useState('gram');
  const [label2, setLabel2] = useState('kilogram');
  const [value, setValue] = useState(0.001);
  const [displayValue, setDisplayValue] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState('gramsToKilograms');

  useEffect(() => {
    const indexOfTo = selectedLabel.indexOf("To");
    if (indexOfTo !== -1) {
      setLabel1(selectedLabel.slice(0, indexOfTo));
      setLabel2(selectedLabel.slice(indexOfTo + 2).toLowerCase());
    }
    if (conversionFactors[unit] && conversionFactors[unit][selectedLabel]) {
      const value = conversionFactors[unit][selectedLabel];
      if(unit === 'temperature'){
        setDisplayValue(false);
      }else{
        setDisplayValue(true);
      }
      setValue(value);
    } else {
      console.log("unit or label not found in JSON.");
    }
  }, [selectedLabel]);

  const ReverseButtonHandler = () => {
    setSelectedLabel(label2+"To"+label1.charAt(0).toUpperCase() + label1.slice(1));
    setLabel1(label2);
    setLabel2(label1);
  }
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header unit={unit} setUnit={setUnit} />

      <Screen1Labels
        label={label1}
        unit = {unit}
        value={value}
        isTouchable={true}
        setSelected={setSelectedLabel}/>


      <View style={styles.SwitchIconContainer}>
        <TouchableOpacity
        onPress={ReverseButtonHandler}>
        <MaterialCommunityIcons name="compare-vertical" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <Screen1Labels
        label={label2}
        isTouchable={false}
        unit = {unit}
      />
      {
        displayValue && <ConversionInfo unit1={label1} value={value} unit2={label2} />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151F29',
    alignItems: 'center',
  },
  SwitchIconContainer: {
    right: '15%',
  },
});

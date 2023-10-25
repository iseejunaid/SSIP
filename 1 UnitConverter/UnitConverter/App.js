import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import conversionFactors from './helpers/conversionFactors.json';
import Screen1Label1 from './components/Screen1Label1';
import Screen1Label2 from './components/Screen1Label2'
import ConversionInfo from './components/ConversionInfo';
import Header from './components/header';

export default function App() {
  const [unit, setUnit] = useState('weight');
  const [label1, setLabel1] = useState('gram');
  const [label2, setLabel2] = useState('kilogram');
  const [label1Value, setLabel1Value] = useState(0);
  const [label2Value, setLabel2Value] = useState('0');
  const [value, setValue] = useState(0.001);
  const [displayValue, setDisplayValue] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState('gramsToKilograms');

  useEffect(() => {
    const indexOfTo = selectedLabel.indexOf("To");
    if (indexOfTo !== -1) {
      setLabel1(selectedLabel.slice(0, indexOfTo));
      setLabel2(selectedLabel.slice(indexOfTo + 2).toLowerCase());
    }
  }, [selectedLabel]);

  // Handle changes to unit and selectedLabel and update value and displayValue
  useEffect(() => {
    if (conversionFactors[unit] && conversionFactors[unit][selectedLabel]) {
      const factor = conversionFactors[unit][selectedLabel];
      if (unit === 'temperature') {
        setDisplayValue(false);
      } else {
        setDisplayValue(true);
      }
      setValue(factor);
    } else {
      console.log("unit or label not found in JSON.");
    }
  }, [selectedLabel]);

  const ReverseButtonHandler = () => {
    setLabel1Value(0);
    setLabel2Value(0);
    setSelectedLabel(label2 + "To" + label1.charAt(0).toUpperCase() + label1.slice(1));
  }

  useEffect(() => {
    if (label1Value !== 0) {
      var calculatedValue = label1Value;

      if (label1 === 'celsius' && label2 === 'fahrenheit') {
        calculatedValue = (label1Value * 9/5) + 32;
      } else if (label1 === 'fahrenheit' && label2 === 'celsius') {
        calculatedValue = (label1Value - 32) * 5/9;
      } else {
        calculatedValue = label1Value * value;
      }
    } else {
      calculatedValue = 0;
    }
    if(calculatedValue !== label2Value) {
      setLabel2Value(calculatedValue);
    }
  }, [label1Value, value]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header unit={unit} setUnit={setUnit} />

      <Screen1Label1
        label={label1}
        unit={unit}
        value={label1Value}
        setValue={setLabel1Value}
        setSelected={setSelectedLabel}
      />

      <View style={styles.SwitchIconContainer}>
        <TouchableOpacity
          onPress={ReverseButtonHandler}>
          <MaterialCommunityIcons name="compare-vertical" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <Screen1Label2
        label={label2}
        value={label2Value}/>

      {displayValue && <ConversionInfo unit1={label1} value={value} unit2={label2} />}
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

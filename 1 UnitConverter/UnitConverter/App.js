import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
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
  const [selectedLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    console.log(selectedLabel);
  }, [selectedLabel]);
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header unit={unit} setUnit={setUnit} setSelected={selectedLabel} />

      <Screen1Labels
        label={label1}
        unit = {unit}
        isTouchable={true}
        setSelected={setSelectedLabel}/>


      <View style={styles.SwitchIconContainer}>
        <MaterialCommunityIcons name="compare-vertical" size={40} color="white" />
      </View>

      <Screen1Labels
        label={label2}
        isTouchable={false}
        unit = {unit}
      />

      <ConversionInfo unit1={label1} value={2} unit2={label2} />
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

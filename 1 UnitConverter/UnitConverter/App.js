import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import conversionFactors from './helpers/conversionFactors.json'; // Import the conversion factors
import Screen1Labels from './components/Screen1Labels';
import ConversionInfo from './components/ConversionInfo';
import Header from './components/header';

export default function App() {
  const [unit, setUnit] = useState('weight');
  const [labelModal, setLabelModal] = useState(false);
  const [label1, setLabel1] = useState('gram');
  const [label2, setLabel2] = useState('kilogram');

  const unitData = conversionFactors[unit];
  unitTitles = Object.keys(unitData);



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header unit={unit} setUnit={setUnit} />

      <Screen1Labels
        label={label1}
        data={unitTitles}
        isTouchable={true}
        labelModal={labelModal}
        />


      <View style={styles.SwitchIconContainer}>
        <MaterialCommunityIcons name="compare-vertical" size={40} color="white" />
      </View>

      <Screen1Labels
        label={label2}
        data={unitTitles}
        isTouchable={false}
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

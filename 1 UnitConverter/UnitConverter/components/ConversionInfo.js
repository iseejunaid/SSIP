import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConversionInfo = ({ unit1, unit2, value }) => {
    return (
        <View style={styles.conversionInfo}>
            <Text style={styles.conversionText}>1 {unit1} = {value} {unit2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conversionInfo: {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
      },
      conversionText: {
        color: 'grey',
        fontSize: 17,
      },
});

export default ConversionInfo;

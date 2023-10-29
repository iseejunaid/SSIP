import React from 'react';
import { View, StyleSheet } from 'react-native';
import KeyboardButton from './keyboardButtons';
import { Ionicons } from '@expo/vector-icons';

const Keyboard = ({ onPress }) => {
    const handlePress = (value) => {
        onPress(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.TopRow}>
                <KeyboardButton text="%" type={'medium'} onPress={() => handlePress('%')} />
                <KeyboardButton text="x²" type={'medium'} onPress={() => handlePress('^2')} />
                <KeyboardButton text={<Ionicons name="backspace-outline" size={30} color="black" />} type={'largeZeroBtn'} onPress={() => handlePress('bkspce')} />
            </View>
            <View style={styles.row}>
                <KeyboardButton text="C" type={'large'} onPress={() => handlePress('C')} />
                <KeyboardButton text="(" type={'large'} onPress={() => handlePress('(')} />
                <KeyboardButton text=")" type={'large'} onPress={() => handlePress(')')} />
                <KeyboardButton text="/" type={'large-operator'} onPress={() => handlePress('/')} />            
            </View>
            <View style={styles.row}>
                <KeyboardButton text="7" type={'large'} onPress={() => handlePress('7')} />
                <KeyboardButton text="8" type={'large'} onPress={() => handlePress('8')} />
                <KeyboardButton text="9" type={'large'} onPress={() => handlePress('9')} />
                <KeyboardButton text="×" type={'large-operator'} onPress={() => handlePress('*')} />            
            </View>
            <View style={styles.row}>
                <KeyboardButton text="4" type={'large'} onPress={() => handlePress('4')} />
                <KeyboardButton text="5" type={'large'} onPress={() => handlePress('5')} />
                <KeyboardButton text="6" type={'large'} onPress={() => handlePress('6')} />
                <KeyboardButton text="-" type={'large-operator'} onPress={() => handlePress('-')} />            
            </View>
            <View style={styles.row}>
                <KeyboardButton text="1" type={'large'} onPress={() => handlePress('1')} />
                <KeyboardButton text="2" type={'large'} onPress={() => handlePress('2')} />
                <KeyboardButton text="3" type={'large'} onPress={() => handlePress('3')} />
                <KeyboardButton text="+" type={'large-operator'} onPress={() => handlePress('+')} />            
            </View>
            <View style={styles.row}>
                <KeyboardButton text="0" type={'largeZeroBtn'} onPress={() => handlePress('0')} />
                <KeyboardButton text="." type={'large'} onPress={() => handlePress('.')} />
                <KeyboardButton text="=" type={'large-operator'} onPress={() => handlePress('=')} />            
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    TopRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        width:'100%',
        height:'10%',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        width:'100%',
        height:'15%',
        marginBottom: 10,
    },
    
});

export default Keyboard;

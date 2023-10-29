import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopResult = ({ history,result }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.history}>{history}</Text>
            <Text style={styles.result}>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20,
    },
    result: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    history: {
        fontSize: 25,
        color: 'gray',
    },
});

export default TopResult;
